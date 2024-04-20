const DoctorMedical = require('../models/DoctorMedical');

// Create a new DoctorMedical case record
exports.createMedicalCase = async (req, res) => {
  const medicalData = req.body;

  try {
    const newMedical = new DoctorMedical(medicalData);
    await newMedical.save();
    res.status(201).json({ message: 'DoctorMedical case record created successfully.' });
  } catch (error) {
    console.error('Error creating DoctorMedical case record:', error);
    res.status(500).json({ error: 'Failed to create DoctorMedical case record.' });
  }
};

// Get all DoctorMedical case records
exports.getAllMedicalCases = async (req, res) => {
  try {
    const medicalCases = await DoctorMedical.find();
    res.status(200).json(medicalCases);
  } catch (error) {
    console.error('Error fetching DoctorMedical cases:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Update an existing DoctorMedical case record by ID
exports.updateMedicalCase = async (req, res) => {
  const medicalId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedMedical = await DoctorMedical.findByIdAndUpdate(
      medicalId,
      updatedData,
      { new: true }
    );

    if (!updatedMedical) {
      return res.status(404).json({ error: 'DoctorMedical case not found.' });
    }

    res.status(200).json({ message: 'DoctorMedical case record updated successfully.' });
  } catch (error) {
    console.error('Error updating DoctorMedical case record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Get all DoctorMedical case records for a specific patientId
exports.getAllMedicalCasesByPatientId = async (req, res) => {
  const { patientId } = req.query; // Get the patientId from the query parameters

  try {
    // Use the find method with a filter to get records for the specific patientId
    const medicalCases = await DoctorMedical.find({ patientId });

    if (medicalCases.length === 0) {
      return res.status(404).json({ error: 'No DoctorMedical cases found for the specified patientId.' });
    }

    res.status(200).json(medicalCases);
  } catch (error) {
    console.error('Error fetching DoctorMedical cases:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
