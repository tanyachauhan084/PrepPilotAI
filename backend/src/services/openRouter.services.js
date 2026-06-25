import axios from "axios"
import ApiError from "../utilities/api-error.js"

//Ai -> artificial intelligence//



export const askAi= async(messages)=>{

   
        

        if(!messages || !Array.isArray(messages) || messages.length===0){
                throw new ApiError(
                    400,
                    {},
                    "Messages array is empty"
                )

        }

        const response= await axios.post("https://openrouter.ai/api/v1/chat/completions",  {

            model: "openai/gpt-4o-mini",

            messages: messages
        },

    
    {
    headers: {
    Authorization:    `Bearer ${process.env.OPENROUTER_APIKEY}`,
    'Content-Type': 'application/json',
  },

}

)




const content= response?.data?.choices?.[0]?.message?.content;
   

if(!content || !content.trim()){

    throw new ApiError(
        400,
        {},
        "Api returned  empty response"
)



 }



return content;
}