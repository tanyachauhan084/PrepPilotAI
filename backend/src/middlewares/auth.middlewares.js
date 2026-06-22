import ApiError from "../utilities/api-error.js";
import jwt from "jsonwebtoken"



const authMiddleware= async(req,res,next)=>{

    const {generatedToken}= req.cookies;

    if(!generatedToken){
        throw new ApiError(
            400,
            "An error occured",
            "User deos not have a token"
        )
    }

    

    //else//

    const verifiedToken= jwt.verify(generatedToken, process.env.TOKENSECRET);

    if(!verifiedToken){
        throw ApiError(
            400,
            "An error occured",
            "User doesn't have a valid token"
        )
    }

    //else

        req.id= verifiedToken.id;

        next();

}

export default authMiddleware;