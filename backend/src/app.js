import express from "express";
import healthcheckroute from "./routes/healthcheck.routes.js";
import authroutes from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middlewares.js";
import cors from "cors"
import cookieParser from "cookie-parser"


const server= express();

server.use(cookieParser());

//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))

//cross-origin configuration//
server.use(cors({
    origin:"http://localhost:5173",
    credentials:true
   
}))


server.use("/healthcheck", healthcheckroute );

server.use("/auth", authroutes);

server.use(errorMiddleware);

export default server


