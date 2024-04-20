const DoctorDiabetes = require('../models/DoctorDiabetes');

// Create a new Diabetes case record
exports.createDiabetesCase = async (req, res) => {
  const formData = req.body;

  try {
    const newDiabetesData = new DoctorDiabetes(formData);
    await newDiabetesData.save();
    res.status(201).json({ message: 'Diabetes case record created successfully.' });
  } catch (error) {
    console.error('Error creating diabetes case record:', error);
    res.status(500).json({ error: 'Failed to create diabetes case record.' });
  }
};
