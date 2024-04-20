const express = require('express');
const router = express.Router();
const multer = require('multer');
const FileDetailsController = require('../controllers/DoctorFileDetailsController');
const path = require('path');


// Define the storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Provide an absolute path to the desired directory
    const uploadDir = path.join(__dirname, '..', 'uploads'); // '..' moves up one directory from 'routes'
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});


const upload = multer({ storage: storage });

// Route for handling file uploads
router.post('/uploads', upload.single('file'), FileDetailsController.uploadFile);

// Route for getting all files
router.get('/get-files', FileDetailsController.getAllFiles);
router.get('/get-filesByPatientId/:patientId', FileDetailsController.getAllFilesByPatientId);

module.exports = router;