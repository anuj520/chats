import mongoose from "mongoose";
import { Env } from "./env.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://erroreagle790:8057892261@cluster0.ijgid.mongodb.net/ChatsNew?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
