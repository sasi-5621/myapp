// routes/addPatientDataRoutes.js
const express = require('express');
const router = express.Router();
const addPatientDataController = require('../controllers/AddpatientDataController');

// POST route to create a new combined data record
router.post('/v1/combined-data', addPatientDataController.createCombinedData);

// GET route to retrieve combined data records
router.get('/v1/combined-data', addPatientDataController.getCombinedData);

// GET route to retrieve a combined data record by ID
router.get('/v1/combined-data/:id', addPatientDataController.getCombinedDataById);

router.get('/v1/vitals/:id', addPatientDataController.getPatientVitals);
router.put('/v1/combined-dataUpdate/:id', addPatientDataController.updateCombinedDataById);
router.put('/v1/combined-dataUpdatepid/:id', addPatientDataController.updateCombinedDataByPatientId);
router.delete('/v1/combined-dataDelete/:id', addPatientDataController.deleteCombinedDataById);
router.delete('/v1/combined-dataDeletepid/:id', addPatientDataController.deleteCombinedDataByPatientId);

module.exports = router;
