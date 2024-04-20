const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema({
  patientName14: String,
  treatmentFrom14: String,
  treatmentTo14: String,
  treatmentFor14: String,
  resumeDutyFrom14: String,
});

const Medical = mongoose.model('Medical', medicalSchema);

module.exports = Medical;
