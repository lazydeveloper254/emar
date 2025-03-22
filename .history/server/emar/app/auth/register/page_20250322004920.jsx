// "use client"
// // pages/auth/register.js
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       const data = await res.json();
//       if (data.success) {
//         // Redirect to login page on successful registration
//         router.push("/auth/signin");
//       } else {
//         setError(data.message || "Registration failed");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Register</h1>
//       {error && <p style={styles.error}>{error}</p>}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Register</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "20px",
//     textAlign: "center"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px"
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px"
//   },
//   button: {
//     padding: "10px",
//     fontSize: "16px",
//     background: "#0070f3",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer"
//   },
//   error: {
//     color: "red"
//   }
// };
