const DoctorComplaints = require('../models/DoctorComplaints');

// Create a new DoctorComplaints record
exports.createComplaints = async (req, res) => {
  try {
    const {
      docId,
      patientId,
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

    // console.log("req: " + req.body)


    const newComplaints = new DoctorComplaints({
      docId:docId,
      patientId: patientId,
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

    // console.log("data : "+newComplaints)
    await newComplaints.save();

    res.status(201).json({ message: 'DoctorComplaints saved successfully' });
  } catch (error) {
    console.error('Error while saving DoctorComplaints:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get all DoctorComplaints records
exports.getAllComplaints = async (req, res) => {
  try {
    const DoctorComplaints = await DoctorComplaints.find();
    res.status(200).json(DoctorComplaints);
  } catch (error) {
    console.error('Error fetching DoctorComplaints:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Get DoctorComplaints records with non-empty testsRequested array
exports.getAllTests = async (req, res) => {
  try {
    const DoctorComplaints = await DoctorComplaints.find({
      testsRequested: { $elemMatch: { $exists: true, $ne: [] } }
    });
    res.status(200).json(DoctorComplaints);
  } catch (error) {
    console.error('Error fetching DoctorComplaints:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getComplaintsByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params; // Extract patientId from the URL parameter

    // Query the DoctorComplaints collection by patientId
    const complaints = await DoctorComplaints.findOne({ patientId : patientId });

    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching DoctorComplaints:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};