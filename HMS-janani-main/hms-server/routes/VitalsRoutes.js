const express = require('express');
const vitalsController = require('../controllers/VitalsController');

const router = express.Router();

// Define routes for patient vitals
router.get('/patient/Vitals/:id', vitalsController.getPatientVitals);

router.post('/patient/Vitals/:id', vitalsController.savePatientVitals);
router.post('/Vitals', vitalsController.getAllPatientVitals);
router.put('/patient/Vitals/:patientId', vitalsController.updateVitals);

module.exports = router;
