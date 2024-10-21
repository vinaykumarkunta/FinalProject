const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

// Initialize Express
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // to parse incoming JSON requests

// API Routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
