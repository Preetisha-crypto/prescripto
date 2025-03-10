import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    phone: { type: String, required: true },
    medicalHistory: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Patient", patientSchema);
