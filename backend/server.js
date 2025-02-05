import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import callbackRoutes from "./routes/callbackRoutes"

dotenv.config();

// Middleware
app.use(express.json());                // To make backend able to parse JSON bodies.
app.use(cors());                        // To allow frontend from different localhost to make API requests.

// MongoDB COnnection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(() => err => console.error("MongoDB Connection Error", err));

// Routes
app.use('/', callbackRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));