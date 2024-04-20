const DoctorGeneral = require('../models/DoctorGeneral');

// Create a new DoctorGeneral case record
exports.createGeneralCase = async (req, res) => {
  const generalData = req.body;

  try {
    const newGeneral = new DoctorGeneral(generalData);
    await newGeneral.save();
    res.status(201).json({ message: 'DoctorGeneral case record created successfully.' });
  } catch (error) {
    console.error('Error creating DoctorGeneral case record:', error);
    res.status(500).json({ error: 'Failed to create DoctorGeneral case record.' });
  }
};

// Get all DoctorGeneral case records
exports.getAllGeneralCases = async (req, res) => {
  try {
    const generalCases = await DoctorGeneral.find();
    res.status(200).json(generalCases);
  } catch (error) {
    console.error('Error fetching DoctorGeneral cases:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
