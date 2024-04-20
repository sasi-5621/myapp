const DentistDoctor = require('../models/DoctorDentist');

// Create a new DentistDoctor form entry
exports.createDentistForm = async (req, res) => {
  const dentistData = req.body;

  try {
    const newDentistForm = new DentistDoctor(dentistData);
    await newDentistForm.save();
    res.status(200).json({ message: 'DentistDoctor form entry created successfully.' });
  } catch (error) {
    console.error('Error creating DentistDoctor form entry:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
