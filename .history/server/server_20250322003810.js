const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
import path from'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

//resloving dirname for ESmodule
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)

const app = express();

// // Middleware
// app.use(cors());
// Configure CORS to allow requests from Next.js running on localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());
// app.use(express.json()); // Parse JSON bodies

// Route registration
app.use('/api/auth', require('./routes/auth'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/appointments', require('./routes/appointments'));


// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('Emar system API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
