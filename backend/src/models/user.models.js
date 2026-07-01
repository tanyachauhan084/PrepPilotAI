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


    credits:{

        type:Number,
        default: 100000
    }
    },
    
{timestamps:true}

)


const User= mongoose.model("Userss", userSchema);

export default User;