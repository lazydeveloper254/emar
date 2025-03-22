"use client";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

const View_Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/appointments");
        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await res.json();
        setAppointments(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul style={styles.list}>
          {appointments.map((appointment: any) => (
            <li key={appointment._id} style={styles.listItem}>
              <p>
                <strong>Patient:</strong> {appointment.patient}
              </p>
              <p>
                <strong>Doctor:</strong> {appointment.doctor}
              </p>
              <p>
                <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Reason:</strong> {appointment.reason}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: 30, // Changed from string to number
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    background: "#f9f9f9",
    marginBottom: 15, // Changed from string to number
    padding: 15, // Changed from string to number
    borderRadius: 8, // Changed from string to number
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default View_Appointments;
