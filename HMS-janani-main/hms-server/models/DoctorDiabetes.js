const mongoose = require('mongoose');

const doctordiabetesSchema = new mongoose.Schema({
  medical: String,
  drugs: String,
  firstComplaint: String,
  patientTreatment: String,
  familyHistory: String,
  review: String,
});

const DoctorDiabetes = mongoose.model('DoctorDiabetes', doctordiabetesSchema);

module.exports = DoctorDiabetes;
