import express from 'express';
import CallbackRequest from "../models/CallbackRequest.model.js";

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const { name, contact, systemSize, totalCost, monthlyInstallment } = req.body;

        // To return error status 400 if the form data from frontend does not have either of these five data.
        if (!name || !contact || !systemSize || !totalCost || !monthlyInstallment) {
            return res.status(400).json({ error: "All fields are required" })
        }

        // To save form data to MongoDB.
        const callbackRequest = new CallbackRequest({ name, contact, systemSize, totalCost, monthlyInstallment });
        await callbackRequest.save();

        res.status(201).json({ message: "Callback request submitted successfully" });
    } catch (error) {
        console.error("Error saving callback requeset:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;

