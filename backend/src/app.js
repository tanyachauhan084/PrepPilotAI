import express from "express";
import healthcheckroute from "./routes/healthcheck.routes";

const server= express();
//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))


server.use("/healthcheck", healthcheckroute );

export default server


