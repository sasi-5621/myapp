const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/DoctorAdminController');

// Create a new admin
router.post('/create', AdminController.createAdmin);

// Get a list of all admins
router.get('/getAll', AdminController.getAllAdmins);

// Other admin-related routes can be added here

module.exports = router;
