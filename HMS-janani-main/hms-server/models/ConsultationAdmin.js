const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mobilenumber: String,
  last_visit: String,
});

const Data = mongoose.model('Consultation', consultationSchema);

module.exports = Data;
