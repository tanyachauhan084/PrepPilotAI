import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true

    },

    email:{

        type:String,
        required: true,
        uniqie:true
    },

    credential:{

        type:String,
        required:true,
        
    }


    },
    
{timestamps:true}

)


const User= mongoose.model("Userss", userSchema);

export default User;