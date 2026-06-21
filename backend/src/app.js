import express from "express";
import healthcheckroute from "./routes/healthcheck.routes.js";
import authroutes from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middlewares.js";

const server= express();
//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))


server.use("/healthcheck", healthcheckroute );

server.use("/auth", authroutes);


export default server


