const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            console.error('MONGO_URI is not defined in the .env file!');
            process.exit(1);
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = { connectDB }; 