
const mongoose = require('mongoose');

const gynicSchema = new mongoose.Schema({
  tableData: [
    {
      pregnancy: String,
      delivery: String,
      baby: String,
      birthWeight: String,
      puerperium: String,
    },
  ],
  tableData1: [
    {
      date: String,
      complaints: String,
      weight: String,
      bloodPressure: String,
      edema: String,
      cvsr: String,
      pog: String,
    },
  ],
  fromData:[{
  DRUGALLERGY: String,
  EDDbyscan: String,
  Height: String,
  Breasts: String,
  BMI: String,
  TdVac: String,
  Name1: String,
  BloodGroupRh: String,
  CVS: String,
  Rs: String,
  Weight: String,
  TetVac: String,
  Boosterix: String,
  Wo: String,
  HusbandsBloodGroupRh: String,
  InfluenzaVaccine: String,
  ML: String,
  MH: String,
  MEDICALHISTORY: String,
  Age1: String,
  RUBELLASTATUS: String,
  DOB: String,
  HT: String,
  DM: String,
  Tel: String,
  CongAnomalies: String,
  LMP: String,
  ThyroidDisorder: String,
  EDD: String,
  Twins: String,
  PA: String,
  }]
});

module.exports = mongoose.model('Gynic', gynicSchema);
