const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/VitalsAdminController');

// Create a new property entry
router.post('/vitalAdmin', propertyController.createVitalAdmin);

// Fetch all property entries
router.get('/vitalAdmin', propertyController.getAllVitalAdmin);

module.exports = router;
