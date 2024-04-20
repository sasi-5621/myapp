const express = require('express');
const router = express.Router();
const medicalController = require('../controllers/DoctorMedicalController');

// Define the route to create a new Medical case record
router.post('/Mc', medicalController.createMedicalCase);

// Define the route to get all Medical case records
router.get('/Mc', medicalController.getAllMedicalCases);

// Define the route to update an existing Medical case record
router.put('/Mc/:id', medicalController.updateMedicalCase);

router.get('/doctor-medical-cases', medicalController.getAllMedicalCasesByPatientId);

module.exports = router;
