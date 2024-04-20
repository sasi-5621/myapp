const mongoose = require('mongoose');

const vitalAdminSchema = new mongoose.Schema({
  bpn: String,
  bpd: String,
  sugar: String,
  height: String,
  weight: String,
  temperature: String,
  spo2: String,
  pallor: String,
  edema: String,
  lcterus: String,
  lymphadenopathy: String,
  ciubbing: String,
  cyanosis: String,
  jvp: String,
  medicinename: String,
  remainingunits: String,
});

const Property = mongoose.model('VitalAdmin', vitalAdminSchema);

module.exports = Property;
