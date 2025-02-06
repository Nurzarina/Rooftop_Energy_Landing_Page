import express from 'express';
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
const allowedOrigins = [                                        // For better security, only allow frontend requests from these two domains.
    process.env.ORIGIN_URL_DEPLOYED,
    process.env.ORIGIN_URL_LOCAL
];

// Middleware
app.use(express.json());                                        // To make backend able to parse JSON bodies.
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {   // To allow request from Postman or from allowedOrigins, else reject the request.
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        optionsSuccessStatus: 200                               // Some legacy browsers (IE11, various SmartTVs) choke on 204
    }));

// Routes
app.use('/api/callback', callbackRoutes);

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);              // To let dev knows the server is currently running.
    connectMongoDB();                                           // To connect to MongoDB database
});