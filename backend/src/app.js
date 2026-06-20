import express from "express";

const server= express();
//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))

export default server


