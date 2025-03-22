// // pages/api/auth/register.js
// import connectDB from "../../../../../server/config/db";
// import Patient from "../../../../../server/models/patient";
// import bcrypt from "bcryptjs";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   await connectDB();

//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Check if the email already exists
//     const existing = await Patient.findOne({ email });
//     if (existing) {
//       return res.status(422).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const newPatient = await Patient.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword
//     });

//     res.status(201).json({ success: true, user: newPatient });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
