const express = require('express');
const router = express.Router();
const fileDetailsController = require('../controllers/fileUploadAdminController');
const multer = require('multer');

// Define the storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create a new file details record
router.post('/filedetails', upload.single('file'), fileDetailsController.createFileDetailsRecord);

// Fetch all file details records
router.get('/filedetails', fileDetailsController.getAllFileDetailsRecords);

module.exports = router;
