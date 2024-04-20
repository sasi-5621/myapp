const mongoose = require('mongoose');

const doctorVitalSchema = new mongoose.Schema({
  bpn: String,
  bpd: String,
  sugar: String,
  height: String,
  weight: String,
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

const DoctorVital = mongoose.model('DoctorVital', doctorVitalSchema);

module.exports = DoctorVital;
