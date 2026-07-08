import User from "../models/user.models.js";
import generateTokens from "../services/generateToken.services.js";
import ApiError from "../utilities/api-error.js";
import ApiReponse from "../utilities/api-response.js";
import asyncHandler from "../utilities/async_handler.js";


const registerUser= asyncHandler(async(req, res)=>{

    const {email, name}= req.body;

    let user= await User.findOne({email});

    if(!user){

     user= await User.create({
        name,
        email
    })

}
       
   
    const generatedToken= await generateTokens(user);

    const options= {
        httpOnly: true,
        secure: true,
        sameSite:"none",
        maxAge: 7* 24* 60* 60* 1000
    }
    res.status(201)
    .cookie("generatedToken", generatedToken, options)
    .json(
        new ApiReponse(
        201,
        user,
        "User logged in"

        )
    )
        

})


const logoutUser= asyncHandler(async(req,res)=>{

   await res.clearCookie("generatedToken")
   
   return res.status(200).json(
    new ApiReponse(
        200,
        {},
        "user successfully logged out"
    )
   )

})



export  {registerUser, logoutUser};