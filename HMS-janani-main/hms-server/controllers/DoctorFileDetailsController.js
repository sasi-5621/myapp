const DoctorFileDetails = require('../models/DoctorFileDetails');

// Upload a file
exports.uploadFile = async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    const { docId,patientId } = req.body;

    const file = new DoctorFileDetails({
      patientId,
      docId,
      originalname,
      filename,
    });

    await file.save();

    res.json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get all uploaded files
exports.getAllFiles = async (req, res) => {
  try {
    const files = await DoctorFileDetails.find({}, '-_id originalname filename uploadedAt'); // Exclude _id field
    res.json({ status: 'ok', data: files });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get all uploaded files for a specific patient
exports.getAllFilesByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const files = await DoctorFileDetails.find({ patientId }, '-_id originalname filename uploadedAt');
    res.json({ status: 'ok', data: files });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};