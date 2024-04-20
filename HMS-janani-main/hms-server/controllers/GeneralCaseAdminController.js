const General = require('../models/GeneralAdmin');

// Create a new general record
exports.createGeneralRecord = async (req, res) => {
  try {
    const newGeneral = new General(req.body);
    await newGeneral.save();
    res.status(200).json({ message: 'General record created successfully.' });
  } catch (error) {
    console.error('Error creating general record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Fetch all general records
exports.getAllGeneralRecords = async (req, res) => {
  try {
    const generalRecords = await General.find();
    res.status(200).json(generalRecords);
  } catch (error) {
    console.error('Error fetching general records:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
