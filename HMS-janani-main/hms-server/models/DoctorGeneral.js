const mongoose = require('mongoose');

const doctorgeneralSchema = new mongoose.Schema({
  diabetes: {
    state: String,
    details: String,
  },
  hypertension: {
    state: String,
    details: String,
  },
  typhoid: {
    state: String,
    details: String,
  },
  arthritis: {
    state: String,
    details: String,
  },
  cmr: {
    state: String,
    details: String,
  },
});

const DoctorGeneral = mongoose.model('DoctorGeneral', doctorgeneralSchema);

module.exports = DoctorGeneral;
