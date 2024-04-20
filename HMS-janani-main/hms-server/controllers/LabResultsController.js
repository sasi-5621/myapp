const LabResults = require("../models/LabResults");

// Upload a file
exports.uploadFile = async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    const { patientId } = req.body;

    const file = new LabResults({
      patientId,
      originalname,
      filename,
    });
    console.log(file)
    await file.save();

    res.json({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Get all uploaded files
exports.getAllFiles = async (req, res) => {
  try {
    const files = await LabResults.find(
      {},
      "-_id originalname filename uploadedAt"
    ); // Exclude _id field
    res.json({ status: "ok", data: files });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Get uploaded files by patientId
exports.getFilesByPatientId = async (req, res) => {
    try {
      const { patientId } = req.query; // Get patientId from query parameter
  
      // Query LabResults collection to find files with the given patientId
      const files = await LabResults.find(
        { patientId },
        "-_id originalname filename uploadedAt"
      ); // Exclude _id field
  
      res.json({ status: "ok", data: files });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };
