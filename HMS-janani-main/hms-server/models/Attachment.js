// models/File.js
const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
  filename: String,
  patientId: String,
});

module.exports = mongoose.model('Attachment', attachmentSchema);
