import express from "express"
import { registerUser,logoutUser } from "../controllers/auth.controllers.js";

const router= express.Router();

router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;