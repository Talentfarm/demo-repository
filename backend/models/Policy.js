
const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policyId: { type: String, required: true, unique: true },
    policyNumber: { type: String, required: true, unique: true },
    cropType: { type: String, required: true },
    issueDate: { type: Date, required: true },
    premiumAmount: { type: String, required: true }, // Stored as Wei string
    payoutAmount: { type: String, required: true }, // Stored as Wei string
    insuranceType: { type: String, enum: ['Weather-Based', 'Yield-Based', 'PMFBY'], required: true },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true
    },
    isAccepted: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
    payoutDate: { type: Date },
    transactionHash: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Policy', policySchema);