import mongoose from "mongoose"

const db_connect= async()=>{

    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection successfully done");

    }

    catch{

        console.log("connection failed");
        process.exit(1);
    }
}

export default db_connect;

