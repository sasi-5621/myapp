const Vitals = require('../models/VitalsModel');

exports.getPatientVitals = async (req, res) => {
  const { id } = req.params; // Extract the patientId from the URL parameter

  try {
    
    const patient = await Vitals.findOne({ patientId: id });

    if (!patient) {
      return res.status(404).json({ error: 'Patient vitals not found' });
    }

    // Extract the vitals data from the patient object
    const vitals = {
      bp: patient.bp,
      sugar: patient.sugar,
      height: patient.height,
      weight: patient.weight,
      temperature: patient.temperature,
      spo2: patient.spo2,
      pallor: patient.pallor,
      edema: patient.edema,
      lcterus: patient.lcterus,
      lymphadenopathy: patient.lymphadenopathy,
      ciubbing: patient.ciubbing,
      cyanosis: patient.cyanosis,
      jvp: patient.jvp,
      patientId: patient.patientId,
    };

    res.status(200).json(vitals);
  } catch (error) {
    console.error('Error fetching patient vitals:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


// POST endpoint for saving patient vitals
exports.savePatientVitals = async (req, res) => {
  try {
    const { id } = req.params; // Extract the patientId from the URL parameter
    const vitalsData = req.body;

    // Create a new Vitals document and save it to MongoDB
    const newVitals = new Vitals({ patientId: id, ...vitalsData });
    await newVitals.save();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving vitals:', error);
    res.status(500).json({ error: 'Failed to save data', details: error.message });
  }
};

// GET endpoint for fetching all patient vitals
exports.getAllPatientVitals = async (req, res) => {
  try {
    const allVitals = await Vitals.find();

    res.status(200).json(allVitals);
  } catch (error) {
    console.error('Error fetching all patient vitals:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.updateVitals = async (req, res) => {
  const { patientId } = req.params;
  const updatedVitalsData = req.body;

  try {
    // Find and update the vitals data by patientId
    const updatedVitals = await Vitals.findOneAndUpdate(
      { patientId: patientId.toUpperCase() }, // Use the appropriate condition
      { $set: updatedVitalsData },
      { new: true }
    );

    if (!updatedVitals) {
      return res.status(404).json({ error: 'Vitals not found' });
    }

    res.status(200).json(updatedVitals);
  } catch (error) {
    console.error('Error updating vitals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
