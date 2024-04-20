const express = require('express');
const router = express.Router();
const DentistController = require('../controllers/DoctorDentistController');

// Route for creating a dentist form entry
router.post('/DentistForm', DentistController.createDentistForm);

module.exports = router;
