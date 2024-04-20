const express = require('express');
const router = express.Router();

const adminTableController = require('../controllers/AdminTableController');

// Create a new admin table entry
router.post('/', adminTableController.createAdminEntry);

// Get all admin table entries
router.get('/', adminTableController.getAllAdminEntries);

// Other routes for updating, deleting, etc. can be added here as needed.

module.exports = router;
