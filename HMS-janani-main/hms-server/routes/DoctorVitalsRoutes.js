const express = require('express');
const router = express.Router();
const vitalsController = require('../controllers/DoctorVitalsController');

// Define the route to create a new Vitals record
router.post('/Vitals', vitalsController.createVitals);

// Define the route to get all Vitals records
router.get('/Vitals', vitalsController.getAllVitals);

module.exports = router;
