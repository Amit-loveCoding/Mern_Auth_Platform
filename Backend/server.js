// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes
import authRouter from './src/routes/authRoutes.js';
import adminRouter from './src/routes/adminRoutes.js';

const url = process.env.MONGO_URI;

// Initialize the app
const app = express();

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
