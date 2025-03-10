import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    phone: { type: String, required: true },
    availableSlots: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true },
      },
    ],
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
