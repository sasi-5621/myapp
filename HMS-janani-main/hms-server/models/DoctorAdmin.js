const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  userId: String,
  password: String,
  designation: String,
});

const AdminDoctor = mongoose.model('AdminDoctor', adminSchema);

module.exports =AdminDoctor;
