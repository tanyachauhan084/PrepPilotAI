import User from "../models/user.models.js";
import ApiError from "../utilities/api-error.js";
import ApiReponse from "../utilities/api-response.js";
import asyncHandler from "../utilities/async_handler.js";


const getcurrUser= asyncHandler(async(req, res)=>{

    const id= req.id;

    const curruserInfo= await User.findById(id);


    if(!curruserInfo){
        throw new ApiError(
            "404",
            "An error occured",
            "User is not found"
        )
    }

    return res.status(200).json(
        new ApiReponse(
            200,
            curruserInfo,
            "User Fetched"
        )
    )
})

export default getcurrUser;