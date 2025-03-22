import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

// Resolving __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Route registration:
// Note: Adjusted the appointments import to a named import assuming it’s exported as a named export.
import authRoutes from "./routes/auth.js";
import patientsRoutes from "./routes/patients.js";
import { appointmentsRoutes } from "./routes/appointments.js";

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/appointments", appointmentsRoutes);

app.use(express.static(path.join(__dirname, "/emar/out")));

// Render client on any path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/emar/out/index.html"))
);

app.get("/", (req, res) => {
  res.send("Emar system API is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
