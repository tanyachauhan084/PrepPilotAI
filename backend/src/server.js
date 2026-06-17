import express from "express"
import dotenv from "dotenv"
import db_connect from "./Db_connection/DB_connection.js";

dotenv.config();
const server= express();

const port= process.env.PORT || 8880;


db_connect()
.then(()=>{
    server.listen(port, ()=>{
    console.log(`server is listening at the port:${port}`);
})
})

.catch((err)=>{
console.log(err);
})