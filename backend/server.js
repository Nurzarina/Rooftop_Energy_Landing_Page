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
app.use(express.json());                                        // To make backend able to parse JSON bodies.
app.use(cors({ 
    origin: 'https://resolarcalculator.netlify.app',            // For better security, only receive frontend request from this domain.
    optionsSuccessStatus: 200                                   // Some legacy browsers (IE11, various SmartTVs) choke on 204
    }));

// Routes
app.use('/api/callback', callbackRoutes);

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);              // To let dev knows the server is currently running.
    connectMongoDB();                                           // To connect to MongoDB database
});