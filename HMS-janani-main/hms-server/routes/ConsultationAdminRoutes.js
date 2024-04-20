const express = require('express');
const router = express.Router();
const dataController = require('../controllers/ConsultationAdminController');

// Fetch all data records
router.get('/data', dataController.getAllConsultationRecords);

module.exports = router;
