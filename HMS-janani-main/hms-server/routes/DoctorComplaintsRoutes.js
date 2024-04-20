const express = require('express');
const router = express.Router();
const complaintsController = require('../controllers/DoctorComplaintsController');

// Define the route to create a new Complaints record
router.post('/Complaints', complaintsController.createComplaints);

// Define the route to get all Complaints records
router.get('/Complaints', complaintsController.getAllComplaints);

router.get('/getAllTests', complaintsController.getAllComplaints);
router.get('/complaints/:patientId', complaintsController.getComplaintsByPatientId);

module.exports = router;
