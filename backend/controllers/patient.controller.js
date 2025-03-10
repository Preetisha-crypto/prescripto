import Patient from "../models/patient.model.js";

export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("userId", "name email");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addPatient = async (req, res) => {
  try {
    const { userId, age, gender, phone, medicalHistory } = req.body;

    const patient = new Patient({
      userId,
      age,
      gender,
      phone,
      medicalHistory,
    });

    await patient.save();
    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
