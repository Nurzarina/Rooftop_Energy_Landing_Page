import mongoose from 'mongoose';

const CallbackRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    systemSize: { type: String, required: true },
    totalCost: { type: String, required: true },
    monthlyInstallment: { type: String, required: true },
    createdAt: {type: Date, default: Date.now },
}, { collection: "callbackrequests" });                         // The data was not saved into MongoDB without explicitly setting the collection name here.

const CallbackRequest = mongoose.model("CallbackRequest", CallbackRequestSchema);

export default CallbackRequest;