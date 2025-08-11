const express = require('express');
const router = express.Router();
const { ethers } = require('ethers');
const { protect, authorize } = require('../middleware/authMiddleware');
const { Farmer, Policy } = require('../models');
const { registerPolicyOnBlockchain, triggerPayoutOnBlockchain } = require('../services/blockchainService');

router.post('/create-policy', protect, authorize('admin'), async (req, res) => {
    try {
        const { farmerName, ethereumAddress, landSize, cropType, premiumAmount, payoutAmount, insuranceType, location } = req.body;


        const cleanAddress = ethereumAddress.trim().toLowerCase();

        const farmer = await Farmer.findOne({ ethereumAddress: cleanAddress });
        if (!farmer) {
            return res.status(404).json({ message: `No farmer has registered with the address ${ethereumAddress}. Please ask the farmer to register first.` });
        }
        
        const policyId = await registerPolicyOnBlockchain(cleanAddress, farmerName, parseFloat(landSize), cropType, premiumAmount, payoutAmount, insuranceType, location);

        const policy = new Policy({
            policyId: policyId,
            policyNumber: policyId,
            cropType: cropType,
            issueDate: new Date(),
            premiumAmount: ethers.parseEther(premiumAmount.toString()),
            payoutAmount: ethers.parseEther(payoutAmount.toString()),
            insuranceType: insuranceType,
            farmer: farmer._id,
        });
        await policy.save();

        res.status(201).json({ message: 'Policy created and linked successfully!', policyId });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error creating policy' });
    }
});

router.get('/policies', protect, authorize('admin'), async (req, res) => {
    try {
        const policies = await Policy.find().populate('farmer', 'name ethereumAddress');
        res.json(policies);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/trigger-payout/:policyId', protect, authorize('admin'), async (req, res) => {
    try {
        const { policyId } = req.params;
        const policy = await Policy.findOne({ policyId: policyId });
        if (!policy) return res.status(404).json({ message: 'Policy not found.' });
        if (policy.isPaid) return res.status(400).json({ message: 'Policy already paid.' });
        if (!policy.isAccepted) return res.status(400).json({ message: 'Policy not accepted by farmer.' });

        const payoutResult = await triggerPayoutOnBlockchain(policyId);
        
        policy.isPaid = true;
        policy.payoutDate = new Date();
        policy.transactionHash = payoutResult.transactionHash;
        await policy.save();

        res.json({ message: 'Payout successful!', transactionHash: payoutResult.transactionHash });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Error triggering payout.' });
    }
});
const { fundContract } = require('../services/blockchainService');

router.post('/fund-contract', protect, authorize('admin'), async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount || isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: 'A valid amount in ETH is required.' });
        }

        const result = await fundContract(amount);
        
        res.json({
            success: true,
            message: `Contract funded successfully with ${amount} ETH.`,
            ...result
        });

    } catch (error) {
        console.error('Error in /fund-contract route:', error);
        res.status(500).json({ message: error.message || 'Error funding contract.' });
    }
});
module.exports = router;