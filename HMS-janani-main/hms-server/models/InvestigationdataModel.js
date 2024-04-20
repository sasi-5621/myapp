const mongoose = require("mongoose");

// Define a schema for trimester names
const trimesterNameSchema = new mongoose.Schema({
  id: Number,
  value: String,
  name: String,
});

// Define a schema for trimesters
const trimesterSchema = new mongoose.Schema({
  trimester: Number,
  names: [trimesterNameSchema],
});

// Define a schema for the "table-container" section
const tableContainerSchema = new mongoose.Schema({
  datingScan: {
    gAge: String,
    edd: String,
    value1: String,
    value3: String,
    value4: String,
    value6: String,
  },
  ntNbScan: {
    nt: String,
    nb: String,
    efw2: String,
    edd2: String,
    placenta: String,
    utAPI: String,
    cervicalLength: String,
    value5: String,
    placenta2: String,
    fecho: String,
    placenta3: String,
  },
  intervalGrowthScan: {
    efw: String,
    afi: String,
    bpp2: String,
    cervicalLength2: String,
    value7: String,
    value8: String,
    value9: String,
  },
});

// Define the main schema for data
const dataSchema = new mongoose.Schema(
  {
    trimesters: [trimesterSchema],
    comments: String,
    tableData: tableContainerSchema, // Include the "table-container" section data
  },
  {
    _id: true, // Disable the generation of the _id field
  }
);

module.exports = mongoose.model("Data", dataSchema);

