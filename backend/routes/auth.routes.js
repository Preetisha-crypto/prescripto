import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register); // User registration
router.post("/login", login); // User login

export default router;
