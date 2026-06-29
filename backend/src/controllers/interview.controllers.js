import ApiError from "../utilities/api-error.js"
import fs from "fs"
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs"
import { askAi } from "../services/openRouter.services.js";
import { json } from "express";
import ApiReponse from "../utilities/api-response.js";
import { parse } from "path";
import asyncHandler from "../utilities/async_handler.js";
import User from "../models/user.models.js";
import { NONAME } from "dns";

export const analyzeResume= async(req,res)=>{

    if(!req.file){
        throw new ApiError(
            400,
            {},
            "Resume required"
        )
    }

    const filepath= req.file.path;

    const fileBuffer= await fs.promises.readFile(filepath);

    const uintArray= new Uint8Array(fileBuffer);

    const pdf= await pdfjsLib.getDocument({data: uintArray}).promise;

    let resumeText= "";

    for(let pageNum=1; pageNum<= pdf.numPages; pageNum++){

        const page= await pdf.getPage(pageNum);
        const content= await page.getTextContent();



        const pageText= content.items.map(item=> item.str).join(" ");

        resumeText += pageText+ "\n";
    }

    resumeText= resumeText.replace(/\s+/g, " ").trim();


    const messages=[
    
    {

        role: "system",
        content:`
        
        Extract structured data from resume.
        
        Return strictly JSON:
        
        {
        
        "role": "string",
        "experience": "string",
        "projects": ["project1", "project2"],
        "skills": ["skill1" , "skill2"]        
        }
        

        `
    } ,

    {

        role: "user",
        content: resumeText
    }



]





const  aiResponse= await askAi(messages);

const parsed= JSON.parse(aiResponse);

fs.unlinkSync(filepath)


return res.status(200).json(
    new ApiReponse(
        200,
        {
            role: parsed.role,
            experience: parsed.experience,
            projects: parsed.projects,
            skills: parsed.skills,
            resumeText
        },
        "data"
    )
)
};






//create interview//



export const generateQuestions= asyncHandler(async(req, res)=>{


    const {role, experience, mode, resumeText, projects, skills}= req.body;


    role= role?.trim();
    experience= experience?.trim();
    mode= mode?.trim();



    if(!role || !experience || !mode){
         throw new ApiError(
            400,
            "An error occured",
            "role, experience and mode are required fields"
         )
    }



    const user= await User.findById(req.userId)


    
    if(!user){
        throw new ApiError(
            404,
            "An error occured",
            "user not found"
        )
    }



    if(user.credits<50){
        throw new ApiError(
            400,
            "An error occured",
    "Not enough credits. Minimum 50 required"
        )
    }


const projectText= Array.isArray(projects) && projects.lenght
? projects.join(", ")
: "None";



const skillsText= Array.isArray(skills) && skills.length
? skills.join(", ")
: "None";



const safeResume= resumeText?.trim() || "None";


const userPrompt= `



Role: ${role}
Experience: ${experience}
InterviewMode: ${mode}
Projects: ${projectText}
Skills:${skillsText}


Resume:${safeResume}


`;

if(!userPrompt.trim()){

    throw new ApiError(
        400,
        "An error occured",
        "Prompt content is empty"
    )
}



const messages = [


     {

        role: "system",

        content: 
`You are a real human interviewer conducting a professional interview.

Speak in simple, natural English as if you are directly talking to the candidate.

Generate exactly 5 interview questions.

Strict Rules:
- Each question must contain between 15 and 25 words.
- Each question must be a single complete sentence.
- Do NOT number them.
- Do NOT add explanations.
- Do NOT add extra text before or after.
- One question per line only.
- Keep language simple and conversational.
- Questions must feel practical and realistic.

Difficulty progression:
Question 1 → easy  
Question 2 → easy  
Question 3 → medium  
Question 4 → medium  
Question 5 → hard  

Make questions based on the candidate’s role, experience,interviewMode, projects, skills, and resume details.`


},

{

    role: "user",
    content: userPrompt
}

];



const aisResponse= await askAi(messages);


if (!aiResponse || !aiResponse.trim()) {
           
      throw new ApiError(
        500,
        "An error occured",
        "Ai returned empty response"
      )
    }



     const questionsArray = aiResponse
      .split("\n")
      .map(q => q.trim())
      .filter(q => q.length > 0)
      .slice(0, 5);

    if (questionsArray.length === 0) {
      
     throw new ApiError(
        500,
       "AI failed to generate questions."
      );
    }





})