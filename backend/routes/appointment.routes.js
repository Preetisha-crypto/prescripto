import express from "express";
import { bookAppointment, getAppointmentsByDoctor, updateAppointmentStatus } from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", bookAppointment); // Book an appointment
router.get("/doctor/:doctorId", getAppointmentsByDoctor); // Get all appointments for a doctor
router.put("/:appointmentId", updateAppointmentStatus); // Update appointment status

export default router;
