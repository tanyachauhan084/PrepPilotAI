import jwt from "jsonwebtoken"


const generateTokens= (user)=>{

    return jwt.sign(
        {
            id:user._id,
        email: user.email   
    
    },

    process.env.TOKENSECRET,

    {expiresIn: process.env.TOKENEXPIRY}
    )

}

export default generateTokens;