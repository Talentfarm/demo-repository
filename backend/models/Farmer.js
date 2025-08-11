
const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ethereumAddress: { type: String, required: true, unique: true },
  landSize: { type: Number, required: true },
  district: String,
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
