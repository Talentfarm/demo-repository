
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { User, Policy } = require('../models');
const { acceptPolicyOnBehalfOfFarmer } = require('../services/blockchainService');

router.get('/my-policies', protect, authorize('farmer'), async (req, res) => {
    try {
       
        const user = req.user;

        if (!user || !user.farmer) {
            // This error is thrown if the link is missing
            return res.status(404).json({ message: 'Farmer profile not associated with this user.' });
        }
        
        const policies = await Policy.find({ farmer: user.farmer }).populate('farmer', 'name ethereumAddress');
        res.json(policies);

    } catch (error) {
        console.error('Error fetching farmer policies:', error);
        res.status(500).json({ message: 'Server error while fetching policies.' });
    }
});

router.post('/accept-policy/:policyId', protect, authorize('farmer'), async (req, res) => {
    try {
        const { policyId } = req.params;
        const policy = await Policy.findOne({ policyId: policyId });

        if (!policy) return res.status(404).json({ message: 'Policy not found.' });
        if (policy.isAccepted) return res.status(400).json({ message: 'Policy already accepted.' });

        // The call no longer passes the premium amount
        const result = await acceptPolicyOnBehalfOfFarmer(policy.policyId);

        policy.isAccepted = true;
        await policy.save();

        res.json({ message: 'Policy accepted successfully!', transactionHash: result.transactionHash });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Failed to accept policy.' });
    }
});


module.exports = router;
