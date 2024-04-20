const express = require("express");
const router = express.Router();
const dataController = require("../controllers/InvetigationdataController");

// Define routes
router.post("/datas", dataController.createData);
router.get("/datas", dataController.getData);

module.exports = router;
