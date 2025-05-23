import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import cors from "cors"
import { connectDB } from "./lib/db.js";
import cookieParcer from 'cookie-parser'


dotenv.config();




const app = express();


const PORT = process.env.PORT;

app.use(express.json({ limit: '50mb' }))
app.use(cookieParcer())

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
 }))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running at PORT: " + PORT);
  connectDB()
});