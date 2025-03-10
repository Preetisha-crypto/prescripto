import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = ["MONGO_URI", "JWT_SECRET", "EMAIL_USER", "EMAIL_PASS"];

requiredEnvVariables.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing environment variable: ${envVar}`);
    process.exit(1);
  }
});

export default {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};
