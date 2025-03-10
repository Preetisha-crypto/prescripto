import express from "express";
import { getAllDoctors, addDoctor, approveDoctor } from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/", getAllDoctors); // Get all doctors
router.post("/", addDoctor); // Add a new doctor
router.put("/approve/:doctorId", approveDoctor); // Approve a doctor

export default router;
