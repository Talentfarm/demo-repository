
const PolicyAcceptanceSchema = new mongoose.Schema({
  policyNumber: { type: String, ref: 'Policy', required: true },
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  acceptanceDate: { type: Date, default: Date.now },
  ipAddress: String,
  deviceInfo: String,
  digitalSignature: String,
  status: { type: String, default: 'accepted', enum: ['accepted', 'rejected'] }
});

module.exports = mongoose.model('PolicyAcceptance', PolicyAcceptanceSchema);