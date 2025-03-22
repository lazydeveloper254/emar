"use client"
import { useState } from 'react';

export default function CreateAppointment() {
  const [formData, setFormData] = useState({
    patient: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
    status: 'Pending'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      // Post the appointment data to the Express server.
      const res = await fetch('http://localhost:4000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Appointment created successfully!');
        setFormData({
          patient: '',
          doctor: '',
          date: '',
          time: '',
          reason: '',
          status: 'Pending'
        });
      } else {
        setMessage('Error: ' + data.error);
      }
    } catch (err) {
      setMessage('Error: ' + err.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Appointment</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Patient ID:
          <input
            type="text"
            name="patient"
            value={formData.patient}
            onChange={handleChange}
            placeholder="Enter patient ID"
            required
          />
        </label>
        <label>
          Doctor:
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            placeholder="Enter doctor's name"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason for the appointment"
          />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>
        <button type="submit">Create Appointment</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 30px;
          background: linear-gradient(135deg, #f6d365, #fda085);
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        form {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        label {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-weight: 500;
        }
        input,
        textarea,
        select {
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }
        textarea {
          resize: vertical;
          min-height: 60px;
        }
        button {
          background: #0070f3;
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #005bb5;
        }
        .message {
          text-align: center;
          font-size: 18px;
          margin-bottom: 20px;
          color: #d8000c;
        }
      `}</style>
    </div>
  );
}
