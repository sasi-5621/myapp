const DentalTreatmentModel = require('../models/DoctorDentalTreatment');

// Create a new dental treatment record
exports.createDentalTreatment = async (req, res) => {
  const formData = req.body;

  try {
    const newDentalTreatment = new DentalTreatmentModel(formData);
    await newDentalTreatment.save();
    res.status(201).json({ message: 'Dental treatment record created successfully.' });
  } catch (error) {
    console.error('Error creating dental treatment record:', error);
    res.status(500).json({ error: 'Failed to create dental treatment record.' });
  }
};
