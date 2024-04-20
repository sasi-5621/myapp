const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  id: String,
  name: String,
  recentVisit: Date,
  vitals: String,
  time: String,
  wait: String,
  status: String,
  purpose: String,
}, { collection: 'appointments' });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
