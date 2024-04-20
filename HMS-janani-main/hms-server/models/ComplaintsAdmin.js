const mongoose = require("mongoose");

const complaintsSchema = new mongoose.Schema({
  complaints: [String],
  diagnosis: [String],
  medicine: [String],
  advice: String,
  dietexercise: String,
  testsRequested: [String],
  testWhen: String,
  nextVisit: String,
  nextVisitType: String,
  nextVisitDate: String,
});

const Complaints = mongoose.model("Complaints", complaintsSchema);

module.exports = Complaints;
