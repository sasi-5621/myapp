// models/bill.js

const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({

  billNo: {
    type: String,
    unique: true, // Ensure bill numbers are unique
    required: true, // Make it required
  },
    services: [{
      name: String,
      price: Number,
      discount: Number,
      discountedPrice:Number,
    }],
    patientId: String,
    consultationFee: Number,
    totalBalance: Number,
    paymentMode: String,
    email: String,
    labreferal:String,
    date: {
      type: Date,
      default: Date.now,
    },
    billCounter: {
      type: Number,
      default: 1,
    },
  });

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
