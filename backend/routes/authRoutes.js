
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Farmer = require('../models/Farmer');

const generateToken = (user) => {
    return jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, ethereumAddress } = req.body;

        if (!username || !email || !password || !ethereumAddress) {
            return res.status(400).json({ message: 'All fields, including Ethereum Address, are required.' });
        }
        if (!/^0x[a-fA-F0-9]{40}$/.test(ethereumAddress.trim())) {
            return res.status(400).json({ message: 'Invalid Ethereum Address format.' });
        }

        const cleanAddress = ethereumAddress.trim().toLowerCase();
        const existingUser = await User.findOne({ $or: [{ email }, { ethereumAddress: cleanAddress }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or Ethereum Address is already registered.' });
        }

        // 1. Create the Farmer data profile first.
        const newFarmer = new Farmer({
            name: username,
            ethereumAddress: cleanAddress,
            landSize: 0, 
            district: 'N/A',
            location: { lat: 0, lon: 0 }
        });
        await newFarmer.save();

        // 2. Create the User login account and link it to the Farmer profile.
        const user = new User({
            username,
            email,
            password,
            ethereumAddress: cleanAddress,
            role: 'farmer',
            farmer: newFarmer._id 
        });
        await user.save();
        
        const token = generateToken(user);
        res.status(201).json({
            token,
            user: { id: user._id, username: user.username, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });

        if (user && (await user.comparePassword(password))) {
            const token = generateToken(user);
            res.json({
                token,
                user: { id: user._id, username: user.username, email: user.email, role: user.role }
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password.' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

module.exports = router;