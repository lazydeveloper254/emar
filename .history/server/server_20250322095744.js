import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Ensure file extension is added

import path from "path";
import { fileURLToPath } from "url";

// Resolving __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// Route registration (Change require to dynamic import)
import authRoutes from "./routes/auth.js";
import patientsRoutes from "./routes/patients.js";
import appointmentsRoutes from "./routes/appointments.js";

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/appointments", appointmentsRoutes);

app.use(express.static(path.join(__dirname, "/emar/out")));

//render client any path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/emar/out/index.html"))
);

// app.use(express.static(path.join(__dirname, "/emar/out")));
// app.all("*", (req, res) => handle(req, res));
app.get("/", (req, res) => {
  res.send("Emar system API is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
