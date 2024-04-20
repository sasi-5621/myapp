const Consultation = require('../models/ConsultationAdmin');

// Fetch all Consultation records
exports.getAllConsultationRecords = async (req, res) => {
  try {
    const ConsultationRecords = await Consultation.find();
    res.status(200).json(ConsultationRecords);
  } catch (error) {
    console.error('Error fetching Consultation records:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
