import Appointment from "../models/appointment.model.js";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";

export const bookAppointment = async (doctorId, patientId, date, time) => {
  const doctor = await Doctor.findById(doctorId);
  if (!doctor) throw new Error("Doctor not found");

  const patient = await Patient.findById(patientId);
  if (!patient) throw new Error("Patient not found");

  const appointment = new Appointment({
    doctorId,
    patientId,
    date,
    time,
    status: "pending",
  });

  await appointment.save();
  return appointment;
};

export const getAppointmentsByDoctor = async (doctorId) => {
  return await Appointment.find({ doctorId }).populate("patientId", "name email");
};

export const updateAppointmentStatus = async (appointmentId, status) => {
  const appointment = await Appointment.findByIdAndUpdate(appointmentId, { status }, { new: true });
  if (!appointment) throw new Error("Appointment not found");

  return appointment;
};
