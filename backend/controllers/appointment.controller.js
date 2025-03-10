import Appointment from "../models/appointment.model.js";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";

export const bookAppointment = async (req, res) => {
  try {
    const { doctorId, patientId, date, time } = req.body;

    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Check if patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    const appointment = new Appointment({
      doctorId,
      patientId,
      date,
      time,
      status: "pending",
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await Appointment.find({ doctorId }).populate("patientId", "name email");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(appointmentId, { status }, { new: true });
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    res.json({ message: "Appointment status updated", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
