import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import callbackRoutes from "./routes/callbackRoutes.js";
import connectMongoDB from './database/connectMongoDB.js';

dotenv.config();

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Middleware
app.use(express.json());                // To make backend able to parse JSON bodies.
app.use(cors());                        // To allow frontend from different localhost to make API requests.

// Routes
app.use('/api/callback', callbackRoutes);

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
});