import mongoose, { mongo } from 'mongoose';

const CallbackRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    systemSize: { type: String, required: true },
    totalCost: { type: String, required: true },
    monthlyInstallment: { type: String, required: true },
    createdAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model("CallbackRequest", CallbackRequestSchema);