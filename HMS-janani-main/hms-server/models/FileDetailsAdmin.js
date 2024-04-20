const mongoose = require('mongoose');

const fileDetailsSchema = new mongoose.Schema(
  {
    originalname: String,
    filename: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'filedetails',
  }
);

const FileDetails = mongoose.model('filedetails', fileDetailsSchema);

module.exports = FileDetails;
