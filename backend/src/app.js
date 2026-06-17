import server from "./server";
import express from "express";


//built-in middlewares//
server.use(express.json({limit:"16kb"}));
server.use(express.urlencoded({limit:"16kb", extended:true}))
server.use(express.static("public"))

