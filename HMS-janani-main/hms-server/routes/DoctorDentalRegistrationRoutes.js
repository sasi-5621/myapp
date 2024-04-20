const express = require('express');
const router = express.Router();
const DentalRegistrationController = require('../controllers/DoctorDentalRegistrationController');

// Route for creating dental registration
router.post('/dentalRegistration', DentalRegistrationController.createDentalRegistration);

module.exports = router;
