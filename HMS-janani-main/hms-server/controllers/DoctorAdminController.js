const AdminDoctor = require('../models/AdminDoctor');

// Create a new AdminDoctor
exports.createAdmin = async (req, res) => {
  try {
    const { userId, password, designation } = req.body;

    const newAdmin = new AdminDoctor({ userId, password, designation });

    await newAdmin.save();
    res.status(201).json({ message: 'AdminDoctor created successfully.', AdminDoctor: newAdmin });
  } catch (error) {
    console.error('Error creating AdminDoctor:', error);
    res.status(500).json({ error: 'Failed to create AdminDoctor.' });
  }
};

// Get a list of all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminDoctor.find({});
    res.status(200).json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Failed to fetch admins.' });
  }
};

// Other AdminDoctor-related controller actions can be added here
