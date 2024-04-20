const FileDetails = require('../models/FileDetailsAdmin');

// Create a new file details record
exports.createFileDetailsRecord = async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    const file = new FileDetails({ originalname, filename });
    await file.save();
    res.json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Fetch all file details records
exports.getAllFileDetailsRecords = async (req, res) => {
  try {
    const files = await FileDetails.find({}, '-_id originalname filename uploadedAt');
    res.json({ status: 'ok', data: files });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
