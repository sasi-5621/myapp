const express = require('express');
const router = express.Router();
const generalController = require('../controllers/GeneralCaseAdminController');

// Create a new general record
router.post('/general', generalController.createGeneralRecord);

// Fetch all general records
router.get('/general', generalController.getAllGeneralRecords);

module.exports = router;
