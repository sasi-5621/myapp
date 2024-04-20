const mongoose = require('mongoose');

const doctorappointmentSchema = new mongoose.Schema({
  id: String,
  name: String,
  recentVisit: Date,
  vitals: String,
  time: String,
  wait: String,
  status: String,
  purpose: String,
}, { collection: 'appointments' });

const DoctorAppointment = mongoose.model('DoctorAppointment', doctorappointmentSchema);

module.exports = DoctorAppointment;
