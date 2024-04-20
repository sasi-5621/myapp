const mongoose = require('mongoose');

const adminTableSchema = new mongoose.Schema({
  userId: String,
  password: String,
  designation: String,
});

const AdminTable = mongoose.model('AdminTable', adminTableSchema);

module.exports = AdminTable;
