const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/AppointmentsAdminController');

// Create a new appointment
router.post('/appointments', appointmentController.createAppointment);

// Fetch all appointments
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments:id', appointmentController.getAppointmentById);
router.put('/appointments:id', appointmentController.updateAppointmentById);
router.delete('/appointments:id', appointmentController.deleteAppointmentById);

module.exports = router;
