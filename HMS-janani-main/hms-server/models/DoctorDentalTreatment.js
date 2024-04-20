const mongoose = require('mongoose');

const dentalTreatmentSchema = new mongoose.Schema({
  date: String,
  treatment: String,
  patientSignature: String,
});

const DentalTreatmentModel = mongoose.model('DentalTreatment', dentalTreatmentSchema);

module.exports = DentalTreatmentModel;
