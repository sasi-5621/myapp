// models/medicineModel.js
const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
//    stockListName: String,
  date: String,

});

module.exports = mongoose.model('Medicine', medicineSchema);
