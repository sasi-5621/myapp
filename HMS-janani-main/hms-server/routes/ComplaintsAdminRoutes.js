const express = require('express');
const router = express.Router();
const complaintsController = require('../controllers/ComplaintsAdminController');

// Create a new complaint
router.post('/complaintqs', complaintsController.createComplaint);

// Fetch all complaints
router.get('/complaintqs', complaintsController.getAllComplaints);

module.exports = router;
