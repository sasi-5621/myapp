const mongoose = require('mongoose');

const generalSchema = new mongoose.Schema({
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

const General = mongoose.model('General', generalSchema);

module.exports = General;
