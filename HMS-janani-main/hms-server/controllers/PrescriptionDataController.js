const PrescriptionData  = require('../models/PrescriptionData ');

// POST endpoint for saving complaints data
exports.savePrescriptionData = async (req, res) => {
  try {
    const {
      complaints,
      diagnosis,
      medicine,
      advice,
      dietexercise,
      testsRequested,
      testWhen,
      nextVisit,
      nextVisitType,
      nextVisitDate,
    } = req.body;

    const newPrescriptionData = new PrescriptionData ({
      complaints: complaints,
      diagnosis: diagnosis,
      medicine: medicine,
      advice: advice,
      dietexercise: dietexercise,
      testsRequested: testsRequested,
      testWhen: testWhen,
      nextVisit: nextVisit,
      nextVisitType: nextVisitType,
      nextVisitDate: nextVisitDate,
    });

    await PrescriptionData.save();

    res.status(200).json({ message: 'Complaints saved successfully' });
  } catch (error) {
    console.error('Error while saving complaints:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET endpoint for fetching complaints data
exports.getPrescriptionData  = async (req, res) => {
  try {
    const complaintsData = await PrescriptionData.find();
    console.log(complaintsData); // Add this line to log data
    res.status(200).json(complaintsData);
  } catch (error) {
    console.error('Error fetching complaints data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
