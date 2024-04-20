const DoctorAppointment = require('../models/DoctorAppointment');

// Create a new DoctorAppointment
exports.createAppointment = async (req, res) => {
  try {
    const { id, name, recentVisit, vitals, time, wait, status, purpose } = req.body;
    const newAppointment = new DoctorAppointment({
      id, name, recentVisit, vitals, time, wait, status, purpose,
    });
    await newAppointment.save();
    res.status(201).json({ message: 'DoctorAppointment created successfully' });
  } catch (error) {
    console.error('Error creating DoctorAppointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a list of all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await DoctorAppointment.find();
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
