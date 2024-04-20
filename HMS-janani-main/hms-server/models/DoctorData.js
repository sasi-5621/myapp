const mongoose = require('mongoose');

const doctordataSchema = new mongoose.Schema({
  id: String,
  name: String,
  mobilenumber: String,
  last_visit: String,
});

const DoctorData = mongoose.model('DoctorData ',doctordataSchema);

module.exports = DoctorData ;
