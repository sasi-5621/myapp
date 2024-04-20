const express = require('express');
const router = express.Router();
const generalController = require('../controllers/DoctorGeneralController');

// Define the route to create a new General case record
router.post('/Generalcase', generalController.createGeneralCase);

// Define the route to get all General case records
router.get('/Generalcase', generalController.getAllGeneralCases);

module.exports = router;
