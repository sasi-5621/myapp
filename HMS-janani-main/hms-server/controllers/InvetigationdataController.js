const Data = require("../models/InvestigationdataModel");

// POST /datas - Create a new document
exports.createData = async (req, res) => {
  try {
    // console.log("Received POST request at /datas");
    const newData = req.body;

    // Create a new document with a unique identifier (e.g., a timestamp)
    newData.createdAt = new Date(); // Add a timestamp to make each document unique

    const savedData = await Data.create(newData);
    res.json(savedData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET /datas - Retrieve data
exports.getData = async (req, res) => {
  try {
    const data = await Data.findOne();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
