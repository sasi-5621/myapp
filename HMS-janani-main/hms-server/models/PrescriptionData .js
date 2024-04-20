const mongoose = require('mongoose');

const prescriptionDataSchema = new mongoose.Schema({
  complaints: [String],
  diagnosis: [String],
  medicine: [{
    sno: Number,
    name: String,
    dose: String,
    when: String,
    frequency: String,
    duration: String,
    notes: String,
  }],
  advice: String,
  dietexercise: String,
  testsRequested: [String],
  testWhen: String,
  nextVisit: String,
  nextVisitType: String,
  nextVisitDate: String,
});

module.exports = mongoose.model('prescriptionData', prescriptionDataSchema);
