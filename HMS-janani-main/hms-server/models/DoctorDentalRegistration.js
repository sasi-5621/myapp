const mongoose = require('mongoose');

const dentalRegistrationSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dateOfBirth: String,
  age: Number,
  occupation: String,
  address: String,
  email: String,
  phoneNumber: String,
  medicalAlert: String,
  covidHistory: String,
  vaccinationHistory: [Number],
  outpatientNumber: String,
});

const DentalRegistration = mongoose.model('DentalRegistration', dentalRegistrationSchema);

module.exports = DentalRegistration;
