const mongoose = require('mongoose');
const enumerator = require('../middleware/enumerator')
const { Schema } = mongoose;

const offerSchema = new Schema({
  photo: { type: String, unique: true, required: true },
  status: { type: String, enum: enumerator.status, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  labels: { type: Array },
});

module.exports = mongoose.model('Offer', offerSchema);
