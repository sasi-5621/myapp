const DiabetesModel = require('../models/DiabetesAdminModel');

// Create a new diabetes record
exports.createDiabetesRecord = async (req, res) => {
  try {
    const newDiabetesData = new DiabetesModel(req.body);
    await newDiabetesData.save();
    res.status(200).json({ message: 'Diabetes record saved successfully.' });
  } catch (error) {
    console.error('Error saving diabetes record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
