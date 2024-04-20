const express = require('express');
const router = express.Router();
const diabetesController = require('../controllers/DoctorDiabetesController');

// Define the route to create a new Diabetes case record
router.post('/Diabeticcase', diabetesController.createDiabetesCase);

module.exports = router;
