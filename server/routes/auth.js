const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Patient = require('../models/patient');
const generateToken = require('../utils/generateToken'); // Import the utility

dotenv.config();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, patientId } = req.body;
  
  if (!firstName || !lastName || !email || !password || !patientId) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  
  try {
    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already exists.' });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create and save a new patient record
    const patient = new Patient({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      patientId
    });
    
    await patient.save();
    
    // Generate JWT token using the utility
    const token = generateToken(patient._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    
    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    
    // Generate and return a JWT token using the utility
    const token = generateToken(patient._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
