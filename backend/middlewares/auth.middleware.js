import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

// Middleware to check if the user is a doctor
export const isDoctor = (req, res, next) => {
  if (req.user.role !== "doctor") return res.status(403).json({ message: "Access Denied: Doctor only" });
  next();
};

// Middleware to check if the user is an admin
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access Denied: Admin only" });
  next();
};
