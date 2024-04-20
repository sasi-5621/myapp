const Complaints = require('../models/ComplaintsAdmin');

// Create a new complaint
exports.createComplaint = async (req, res) => {
  try {
    const newComplaint = new Complaints(req.body);
    await newComplaint.save();
    res.status(200).json({ message: 'Complaint created successfully.' });
  } catch (error) {
    console.error('Error creating complaint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch all complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaints.find();
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
