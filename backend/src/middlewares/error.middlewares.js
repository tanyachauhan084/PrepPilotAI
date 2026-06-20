import ApiReponse from "../utilities/api-response.js"


const errorMiddleware= (err, req,res,next)=>{
   if(err instanceof Error){
    return res.status(err.statusCode).json(
        new ApiReponse(
            err.statusCode,
            err.data,
            err.message

        )
    )
   }

   return res.status(500).json(
    new ApiReponse(
        500,
        "An error occured",
        "something went wrong"
    )
   )
}