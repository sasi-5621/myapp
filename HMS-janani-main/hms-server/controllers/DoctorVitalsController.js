const DoctorVital = require('../models/DoctorVitals');

// Create a new Vitals record
exports.createVitals = async (req, res) => {
  try {
    const propertyData = req.body;

    const newProperty = new DoctorVital(propertyData);

    await newProperty.save();

    res.status(201).json({ message: 'DoctorVital created successfully.' });
  } catch (error) {
    console.error('Error creating DoctorVital:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Get all Vitals records
exports.getAllVitals = async (req, res) => {
  try {
    console.log('Fetching vitals data...');
    const properties = await DoctorVital.find();
    console.log('Fetched data:', properties);
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
