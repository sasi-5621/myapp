const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: String,
  price: String,
  discount: String,
});

const combinedSchema = new mongoose.Schema({
  patientId: String ,
  name: String,
  gender: String,
  age: Number,
  mobile: String,
  bloodGroup: String,
  email: String,
  address: String,
  items: [itemSchema],
  doctor: String,
  date: String,
  duration: String,
  hour: String,
  minute: String,
  timeOfDay: String,
  totalAmount: Number,
  paymentMode: String,
  AmountStatus: String,
  staffid:String,
});

module.exports = mongoose.model('existingPatient', combinedSchema);
