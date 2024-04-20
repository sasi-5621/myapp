const DoctorData = require('../models/DoctorData');

// Get all DoctorData
exports.getAllData = async (req, res) => {
  try {
    const DoctorData = await DoctorData.find({});
    res.json(DoctorData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
