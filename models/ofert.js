const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  photo: { type: String, unique: true, required: true },
  status: { type: String, enum: enumerator.status, required: true },
  description: { type: String, required: true },
  localization: { type: String, required: true },
  labels: { type: String },
});

module.exports = mongoose.model('User', userSchema);
