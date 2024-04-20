const AdminTable = require('../models/AdminTableModel');

// Create a new admin table entry
exports.createAdminEntry = async (req, res) => {
  try {
    const newAdminEntry = new AdminTable(req.body);
    await newAdminEntry.save();
    res.status(201).json({ message: 'Admin entry created successfully' });
  } catch (error) {
    console.error('Error creating admin entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all admin table entries
exports.getAllAdminEntries = async (req, res) => {
  try {
    const adminEntries = await AdminTable.find();
    res.json(adminEntries);
  } catch (error) {
    console.error('Error fetching admin entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other controller functions for updating, deleting, etc. can be added here as needed.
