import express from "express"
import registerUsers from "../controllers/auth.controllers.js";

const router= express.Router();

router.post("/register", registerUsers);

export default router;