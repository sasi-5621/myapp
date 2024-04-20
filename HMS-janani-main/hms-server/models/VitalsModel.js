const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: String,
  bp: String,
  sugar: String,
  weight: String,
  height: String,
  temperature: String,
  spo2: String,
  pallor: String,
  edema: String,
  lcterus: String,
  lymphadenopathy: String,
  ciubbing: String,
  cyanosis: String,
  jvp: String,
});

module.exports = mongoose.model('Vitals', vitalsSchema);
