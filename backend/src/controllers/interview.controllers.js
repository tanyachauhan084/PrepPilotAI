import ApiError from "../utilities/api-error.js"
import fs from "fs"
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs"
import { askAi } from "../services/openRouter.services.js";
import { json } from "express";
import ApiReponse from "../utilities/api-response.js";
import { parse } from "path";

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