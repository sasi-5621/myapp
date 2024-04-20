const express = require('express');
const gynicController = require('../controllers/DoctorGynicController');

const router = express.Router();


router.post('/saveData', gynicController.saveData);

module.exports = router;