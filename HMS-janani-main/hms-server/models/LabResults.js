const mongoose = require('mongoose');

const labResultsSchema = new mongoose.Schema(
  {
    patientId: String,
    originalname: String,
    filename: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'labResults',
  }
);

const LabResults = mongoose.model('LabResults', labResultsSchema);

module.exports = LabResults;