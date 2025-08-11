const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { Policy } = require('../models');
const { cropInsuranceContract, adminWallet } = require('../config/blockchain');
const { ethers } = require('ethers');

// @route POST /api/policies/accept
// @desc Farmer accepts a policy and pays the premium
// @access Private (Farmer)
router.post('/accept', protect, authorize('farmer'), async (req, res) => {
    const { policyNumber } = req.body;
    const user = req.user; 
    
    try {
        const policy = await Policy.findOne({ policyNumber, farmer: user.farmer });
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found or does not belong to this farmer.' });
        }
        
        if (policy.status !== 'pending_acceptance') {
            return res.status(400).json({ message: 'Policy cannot be accepted at this time.' });
        }
        
        const premiumWei = ethers.parseEther(policy.premium.toString());

        const tx = await cropInsuranceContract.acceptInsurance(policyNumber, { value: premiumWei });
        await tx.wait(); 

        policy.status = 'accepted';
        policy.accepted = true;
        policy.acceptanceDate = new Date();
        policy.transactionHash = tx.hash; 
        await policy.save();

        res.status(200).json({ message: 'Policy accepted and premium paid successfully.', transactionHash: tx.hash });

    } catch (error) {
        console.error('Error accepting policy:', error);
        res.status(500).json({ message: 'Failed to accept policy.', error: error.message });
    }
});

module.exports = router;