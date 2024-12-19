import mongoose from "mongoose";

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
