// routes/policyAcceptance.js 
const express = require('express');
const router = express.Router();
const PolicyAcceptance = require('../models/PolicyAcceptance');
const Policy = require('../models/Policy');


router.post('/accept-with-policy', async (req, res) => {
  try {
    const { policyNumber, farmerId } = req.body;
    
    // 1. Verify policy exists
    const policy = await Policy.findOne({ policyNumber });
    if (!policy) {
      return res.status(404).json({ error: 'Policy not found' });
    }

    // 2. Create acceptance record 
    const acceptance = new PolicyAcceptance({
      policyNumber,
      farmerId,
      status: 'accepted',
      ...req.body
    });

    await acceptance.save();
    
    res.status(201).json(acceptance);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;