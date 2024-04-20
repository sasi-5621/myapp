const express = require('express');
const router = express.Router();
const ExistingPatientController = require('../controllers/ExistingPatientController');

router.post('/v1/existingpatients-data', ExistingPatientController.addExistingPatient);
router.get('/v1/existingpatients-data', ExistingPatientController.fetchCombinedData);
router.get('/v1/existingpatients-data/:patientId', ExistingPatientController.fetchCombinedDataByPatientId);
router.get('/v1/allexistingpatients-data/:patientId', ExistingPatientController.fetchallCombinedDataByPatientId);

module.exports = router;
