const express = require('express');
const multer = require('multer');
const router = express.Router();
const fileController = require('../controllers/AttachmentController');
const path = require('path');

// Define Multer storage configuration here
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Routes for file-related actions
router.post('/upload', upload.single('file'), fileController.uploadFile);
router.post('/save', fileController.saveFile);

module.exports = router;
