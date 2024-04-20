const mongoose = require("mongoose");

const doctorcomplaintsSchema = new mongoose.Schema({
  docId: String,
  patientId: String,
  complaints: [String],
  diagnosis: [String],
  medicine: [
    {
      sno: Number,
      medicine: String,
      dose: String,
      when: String,
      frequency: String,
      duration: String,
      notes: String,
    },
  ],
  advice: String,
  dietexercise: String,
  testsRequested: [String],
  testWhen: String,
});

const DoctorComplaints = mongoose.model(
  "DoctorComplaints",
  doctorcomplaintsSchema
);

module.exports = DoctorComplaints;
