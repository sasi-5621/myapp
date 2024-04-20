const DentalRegistration = require('../models/DoctorDentalRegistration');

// Create a new dental registration
exports.createDentalRegistration = async (req, res) => {
  const formData = req.body;

  try {
    const newDentalRegistration = new DentalRegistration(formData);
    await newDentalRegistration.save();
    res.status(200).json({ message: 'Data saved successfully.' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
