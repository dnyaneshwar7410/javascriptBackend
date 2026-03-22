import path from "path";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: path.resolve(".env") });

connectDB();
