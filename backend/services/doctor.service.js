import Doctor from "../models/doctor.model.js";

export const getDoctors = async () => {
  return await Doctor.find().populate("userId", "name email");
};

export const createDoctor = async (userId, specialization, experience, phone, availableSlots) => {
  const doctor = new Doctor({
    userId,
    specialization,
    experience,
    phone,
    availableSlots,
    isApproved: false,
  });

  await doctor.save();
  return doctor;
};

export const approveDoctor = async (doctorId) => {
  const doctor = await Doctor.findByIdAndUpdate(doctorId, { isApproved: true }, { new: true });
  if (!doctor) throw new Error("Doctor not found");

  return doctor;
};
