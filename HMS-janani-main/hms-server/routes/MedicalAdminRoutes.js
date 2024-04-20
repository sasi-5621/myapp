const express = require('express');
const router = express.Router();
const medicalController = require('../controllers/MedicalAdminController');

// Create a new medical record
router.post('/medical', medicalController.createMedicalRecord);

// Fetch all medical records
router.get('/medical', medicalController.getAllMedicalRecords);

// Update a medical record
router.put('/medical/:id', medicalController.updateMedicalRecord);

module.exports = router;
