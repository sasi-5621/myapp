// routes/billRoutes.js

const express = require('express');
const router = express.Router();
const billController = require('../controllers/BillController');

// Define route to save a bill
router.post('/save-bill', billController.saveBill);
router.get('/get-billById/:id', billController.getBillById);
router.get('/get-billBypId/:patientId', billController.getBillsByPatientId);
router.get('/get-allBill', billController.getAllBills);
router.get('/get-countservice', billController.getTotalServiceNameCount);
router.get('/get-totalbalanceamount', billController.getTotalTotalBalanceAmount);

module.exports = router;
