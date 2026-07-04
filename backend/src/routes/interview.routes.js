import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { analyzeResume, finishInterview,  generateQuestion,  submitAnswer } from "../controllers/interview.controllers.js";
import authMiddleware from "../middlewares/auth.middlewares.js";


export const interviewRouter= express.Router();

interviewRouter.post("/resume", authMiddleware, upload.single("resume"), analyzeResume);
interviewRouter.post("/questions", authMiddleware, generateQuestion);
interviewRouter.post("/submit-answerss", authMiddleware, submitAnswer);
interviewRouter.post("/finish", authMiddleware, finishInterview)