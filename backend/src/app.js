import express from "express";
import healthcheckroute from "./routes/healthcheck.routes.js";
import authroutes from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middlewares.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";
import {interviewRouter} from "./routes/interview.routes.js";


const server= express();

server.use(cookieParser());

//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))

//cross-origin configuration//
server.use(cors({
    origin:"https://preppilotai-client-d2xl.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials:true
   
}))


server.use("/healthcheck", healthcheckroute );

server.use("/auth", authroutes);



server.use("/user", userRouter);


server.use("/interview", interviewRouter);


server.use(errorMiddleware);

export default server


