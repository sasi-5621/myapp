const mongoose = require('mongoose');

const doctorfileDetailsSchema = new mongoose.Schema(
  {
    docId:String,
    patientId:String,
    originalname: String,
    filename: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'doctorfiledetails',
  }
);

const DoctorFileDetails = mongoose.model('doctorfiledetails', doctorfileDetailsSchema);

module.exports = DoctorFileDetails;