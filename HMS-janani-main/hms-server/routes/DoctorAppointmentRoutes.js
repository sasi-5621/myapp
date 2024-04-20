const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/DoctorAppointmentController');

// Create a new appointment
router.post('/create', AppointmentController.createAppointment);

// Get a list of all appointments
router.get('/all', AppointmentController.getAllAppointments);

module.exports = router;
