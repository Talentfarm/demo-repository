// routes/policies.js 
const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');
const { processPolicyCSV } = require('../middleware/csvProcessor');

// CSV Import Endpoint
router.post('/import-csv', async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No CSV file uploaded' });
    }
    
    const policies = await processPolicyCSV(req.file.path);
    
    // Insert policies
    const result = await Policy.insertMany(policies);
    
    res.status(201).json({
      message: `${result.length} policies imported successfully`,
      data: result
    });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;