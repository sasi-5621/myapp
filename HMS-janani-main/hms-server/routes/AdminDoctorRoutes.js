const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/AdminDoctorController');

// Route to get the count of registered doctors
router.get('/doctors/count', doctorController.getDoctorCount);

// Route to register a new doctor
router.post('/doctorregister', doctorController.registerDoctor);

// Route to get the largest doctor ID
router.get('/doctors/largest-id', doctorController.getLargestDoctorId);

// Route to get all doctors
router.get('/doctors', doctorController.getAllDoctors);

// Route to delete a doctor by ID
router.delete('/doctors/:id', doctorController.deleteDoctor);

// Route for doctor login
router.post('/login', doctorController.doctorLogin);

module.exports = router;
