import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import { User } from "./models/user.model";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const JWT_PASSWORD =  process.env.SECRET_KEY;

connectDB(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });

