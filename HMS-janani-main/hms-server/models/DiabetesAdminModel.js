const mongoose = require('mongoose');

const diabetesSchema = new mongoose.Schema({
  medical: String,
  drugs: String,
  firstComplaint: String,
  patientTreatment: String,
  familyHistory: String,
  review: String,
});

const DiabetesModel = mongoose.model('Diabetes', diabetesSchema);

module.exports = DiabetesModel;
