const express = require('express');
const router = express.Router();
const DataController = require('../controllers/DoctorDataController');

// Route for getting all data
router.get('/consultation/Data', DataController.getAllData);

module.exports = router;
