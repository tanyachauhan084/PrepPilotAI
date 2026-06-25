import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { analyzeResume } from "../controllers/interview.controllers.js";

export const interviewRouter= express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume)