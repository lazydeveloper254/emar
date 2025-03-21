const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  // Reference to the patient who created the appointment.
  patient: {
    type: String,
    ref: 'Patient',
    required: true,
  },
  // For simplicity, we keep doctor as a string. In a complete system, you might reference a Doctor model.
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // Using a string for time (e.g., "14:30"). Alternatively, you might combine date and time into a Date object.
  time: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  // Appointment status: Pending, Confirmed, or Cancelled.
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
