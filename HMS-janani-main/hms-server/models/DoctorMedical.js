const mongoose = require('mongoose');

const doctormedicalSchema = new mongoose.Schema({
  docId: String,
  patientId: String,
  patientName14: String,
  treatmentFrom14: String,
  treatmentTo14: String,
  treatmentFor14: String,
  resumeDutyFrom14: String,
});

const DoctorMedical = mongoose.model('DoctorMedical', doctormedicalSchema);

module.exports = DoctorMedical;
