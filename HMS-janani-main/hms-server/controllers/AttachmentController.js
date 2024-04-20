// controllers/fileController.js
const File = require('../models/Attachment');

// Controller functions
exports.uploadFile = async (req, res) => {
  try {
    const { patientId } = req.body;
    console.log('File uploaded:', req.file);

    const newFile = new File({
      filename: req.file.filename,
      patientId: patientId,
    });

    const savedFile = await newFile.save();

    res.status(200).json({ message: 'File uploaded and information saved successfully.', file: savedFile });

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file.' });
  }
};

exports.saveFile = async (req, res) => {
  try {
    const { index, filename, patientId } = req.body;
    console.log(`Save file ${index}`);

    // Update the patient information directly in the Attachment model
    await File.updateOne({ patientId: patientId }, { filename: filename });

    res.status(200).json({ message: 'File information saved successfully.' });
  } catch (error) {
    console.error('Error saving file information:', error);
    res.status(500).json({ message: 'Error saving file information.' });
  }
};