import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


connectDB(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });

// app.post("/api/v1/signup", (req, res) => {


// })

// app.post("/api/v1/signin", (req, res) => {

// })

// app.post("/api/v1/content", (req, res) => {

// })


// app.get("/api/v1/content", (req, res) => {

// })


// app.delete("/api/v1/content", (req, res) => {


// })

// app.post("/api/v1/brain/share", (req, res) => {


// })
// app.get("/api/v1/brain/:shareLink", (req, res) => {


// })