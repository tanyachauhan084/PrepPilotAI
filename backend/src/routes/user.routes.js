import express from "express";
import authMiddleware from "../middlewares/auth.middlewares.js";
import getcurrUser from "../controllers/user.controllers.js";


const userRouter= express.Router();


userRouter.get("/info", authMiddleware, getcurrUser);

export default userRouter;