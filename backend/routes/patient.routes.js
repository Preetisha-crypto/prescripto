import express from "express";
import { getAllPatients, addPatient } from "../controllers/patient.controller.js";

const router = express.Router();

router.get("/", getAllPatients); // Get all patients
router.post("/", addPatient); // Add a new patient

export default router;
