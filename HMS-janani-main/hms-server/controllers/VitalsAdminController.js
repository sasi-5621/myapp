const VitalAdmin = require('../models/VitalsAdmin');

// Create a new VitalAdmin entry
exports.createVitalAdmin = async (req, res) => {
  try {
    const newVitalAdmin = new VitalAdmin(req.body);
    await newVitalAdmin.save();
    res.status(200).json({ message: 'VitalAdmin created successfully.' });
  } catch (error) {
    console.error('Error creating VitalAdmin:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Fetch all VitalAdmin entries
exports.getAllVitalAdmin = async (req, res) => {
  try {
    const VitalAdmin = await VitalAdmin.find();
    res.status(200).json(VitalAdmin);
  } catch (error) {
    console.error('Error fetching VitalAdmin:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
