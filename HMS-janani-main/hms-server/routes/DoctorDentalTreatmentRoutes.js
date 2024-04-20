const express = require('express');
const router = express.Router();
const dentalTreatmentController = require('../controllers/DoctorDentalTreatmentController');

// Define the route to create a new dental treatment record
router.post('/dentalTreatment', dentalTreatmentController.createDentalTreatment);

module.exports = router;
