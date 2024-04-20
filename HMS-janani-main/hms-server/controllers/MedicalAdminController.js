const Medical = require('../models/MedicalAdmin');

// Create a new medical record
exports.createMedicalRecord = async (req, res) => {
  try {
    const newMedical = new Medical(req.body);
    await newMedical.save();
    res.status(200).json({ message: 'Medical record created successfully.' });
  } catch (error) {
    console.error('Error creating medical record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Fetch all medical records
exports.getAllMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await Medical.find();
    res.status(200).json(medicalRecords);
  } catch (error) {
    console.error('Error fetching medical records:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Update a medical record
exports.updateMedicalRecord = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedMedicalRecord = await Medical.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    if (!updatedMedicalRecord) {
      return res.status(404).json({ error: 'Medical record not found.' });
    }
    res.status(200).json({ message: 'Medical record updated successfully.' });
  } catch (error) {
    console.error('Error updating medical record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
