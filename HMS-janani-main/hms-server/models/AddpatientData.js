// models/CombinedData.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: String,
  price: String,
  discount: String,
});

const addPatientSchema = new mongoose.Schema({
  patientId: { type: String, unique: true },
  name: String,
  gender: String,
  age: Number,
  mobile: String,
  bloodGroup: String,
  email: String,
  address: String,
  referredBy: String,
  pincode: String,
  items: [itemSchema],
  doctor: String,
  date: String,
  duration: String,
  hour: String,
  minute: String,
  timeOfDay: String,
  totalAmount: Number,
  paymentMode: String,
  AmountStatus:String,
  staffid: String,
});

module.exports = mongoose.model('addPatientData', addPatientSchema);
