const express = require('express');
const router = express.Router();
const diabetesController = require('../controllers/DiabeticCaseAdminController');

// Create a new diabetes record
router.post('/diabetes', diabetesController.createDiabetesRecord);

module.exports = router;
