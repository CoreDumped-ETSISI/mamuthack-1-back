const mongoose = require('mongoose');
const enumerator = require('../middleware/enumerator')
const { Schema } = mongoose;

const offerSchema = new Schema({
  photo: { type: String, required: true },
  status: { type: String, enum: enumerator.status, required: true, default: enumerator.status[0] },
  description: { type: String, required: true },
  coordinates: { type: Array, required: true },
  contains: { type: Array },
  labels: { type: Array },
  title: { type: String, required: true},
  servings: { type: Number, required: true },
  publisher: { type: String },
  claimant: { type: String }
});

module.exports = mongoose.model('Offer', offerSchema);
