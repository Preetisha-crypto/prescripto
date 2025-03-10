import Patient from "../models/patient.model.js";

export const getPatients = async () => {
  return await Patient.find().populate("userId", "name email");
};

export const createPatient = async (userId, age, gender, phone, medicalHistory) => {
  const patient = new Patient({
    userId,
    age,
    gender,
    phone,
    medicalHistory,
  });

  await patient.save();
  return patient;
};
