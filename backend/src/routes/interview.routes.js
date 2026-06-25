import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { analyzeResume } from "../controllers/interview.controllers.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

export const interviewRouter= express.Router();

interviewRouter.post("/resume", authMiddleware, upload.single("resume"), analyzeResume)