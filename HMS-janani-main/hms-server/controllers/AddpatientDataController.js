const mongoose = require("mongoose");
const CombinedData = require("../models/AddpatientData");

// Create a new Mongoose connection to MongoDB
const db = mongoose.connection;

// Function to generate and assign a unique sequential ID
async function generateAndAssignId() {
  const sequenceName = "combinedDataId";

  // Find the sequence document for combinedDataId and update it atomically
  const sequence = await db
    .collection("sequences")
    .findOneAndUpdate(
      { _id: sequenceName },
      { $inc: { sequence_value: 1 } },
      { upsert: true, returnOriginal: false }
    );

  const formattedId = `JC${String(sequence.value.sequence_value).padStart(
    5,
    "0"
  )}`;

  return formattedId;
}

// Create a new combined data record
async function createCombinedData(req, res) {
  try {
    // Generate a new ID

    console.log(req.body);
    const newId = await generateAndAssignId();

    // Create a new document with the generated ID
    const combinedData = new CombinedData({
      patientId: newId,
      ...req.body,
    });

    await combinedData.save();
    res.status(201).json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add data" });
  }
}

// Updated GET route to accept formType as a query parameter
async function getCombinedData(req, res) {
  try {
    const { formType } = req.query;

    let query = {};

    if (formType) {
      query = { type: formType };
    }

    const data = await CombinedData.find(query);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

async function getCombinedDataById(req, res) {
  try {
    const { id } = req.params;
    // console.log("Fetching Patient Details with ID:", id);

    const combinedData = await CombinedData.findOne({ patientId: id });

    if (!combinedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function getPatientVitals(req, res) {
  try {
    const { patientId } = req.params;
    const patient = await CombinedData.findOne({ patientId: patientId });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const vitals = patient;

    res.status(200).json(vitals);
  } catch (error) {
    console.error("Error fetching patient vitals:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function updateCombinedDataByPatientId(req, res) {
  try {
    const { id } = req.params;

    // Find the existing CombinedData record by patientId
    const existingData = await CombinedData.findOne({ patientId: id });

    if (!existingData) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Update the existing record with the new data from the request body
    Object.assign(existingData, req.body);

    // Save the updated record
    await existingData.save();

    res.json(existingData);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function deleteCombinedDataByPatientId(req, res) {
  try {
    const { id } = req.params;

    // Find the existing CombinedData record by patientId
    const existingData = await CombinedData.findOne({ patientId: id });

    if (!existingData) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Delete the record
    await existingData.remove();

    res.status(204).end(); // 204 No Content (successful deletion)
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

// async function updateCombinedDataById(req, res) {
//   try {
//     const { id } = req.params;

//     // Find the existing CombinedData record by _id
//     const existingData = await CombinedData.findById(id);

//     if (!existingData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Update the existing record with the new data from the request body
//     Object.assign(existingData, req.body);

//     // Save the updated record
//     await existingData.save();

//     res.json(existingData);
//   } catch (error) {
//     console.error("Error updating data:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// }

async function updateCombinedDataById(req, res) {
  try {
    const { id } = req.params;

    // Validate the id parameter
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    // Find the existing CombinedData record by _id
    const existingData = await CombinedData.findById(id);

    if (!existingData) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Update the existing record with the new data from the request body
    Object.assign(existingData, req.body);

    // Save the updated record
    await existingData.save();

    res.json(existingData);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}


// async function deleteCombinedDataById(req, res) {
//   try {
//     const { id } = req.params;
  
//   const data = await CombinedData.findById(id);
//     if (!existingData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Delete the record using the `deleteOne` method
//     await CombinedData.deleteOne({ _id: id });

//     res.status(204).end(); // 204 No Content (successful deletion)
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// }

// async function deleteCombinedDataById(req, res) {
//   try {
//     const { id } = req.params;
  
//     const data = await CombinedData.findById(id);
    
//     if (!data) { // Change 'existingData' to 'data'
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Delete the record using the `deleteOne` method
//     await CombinedData.deleteOne({ _id: id });

//     res.status(204).end(); // 204 No Content (successful deletion)
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// }
async function deleteCombinedDataById(req, res) {
  try {
    const { id } = req.params;

    // Delete the record using the `deleteOne` method
    await CombinedData.deleteOne({ _id: id });

    res.status(204).end(); // 204 No Content (successful deletion)
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}






module.exports = {
  createCombinedData,
  getCombinedData,
  getCombinedDataById,
  getPatientVitals,
  updateCombinedDataById,
  deleteCombinedDataById,
  updateCombinedDataByPatientId,
  deleteCombinedDataByPatientId,
};
