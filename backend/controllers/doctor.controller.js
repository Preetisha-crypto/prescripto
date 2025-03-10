import Doctor from "../models/doctor.model.js";
import User from "../models/user.model.js";

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("userId", "name email");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addDoctor = async (req, res) => {
  try {
    const { userId, specialization, experience, phone, availableSlots } = req.body;

    const doctor = new Doctor({
      userId,
      specialization,
      experience,
      phone,
      availableSlots,
      isApproved: false,
    });

    await doctor.save();
    res.status(201).json({ message: "Doctor added successfully, pending approval" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const approveDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const doctor = await Doctor.findByIdAndUpdate(doctorId, { isApproved: true }, { new: true });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    res.json({ message: "Doctor approved", doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
