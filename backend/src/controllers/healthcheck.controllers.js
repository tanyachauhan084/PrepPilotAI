import ApiReponse from "../utilities/api-response.js";
import asyncHandler from "../utilities/async_handler.js";


const healthcheck= asyncHandler(async(req,res)=>{

    return res.status(200).json(
        new ApiReponse(
            200,
            "this is a healthcheck",
            "everything is great here"
        )
    )
})


export default healthcheck