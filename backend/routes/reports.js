const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController.js");


router.post("/createReport", reportController.createReport);
router.get("/getReport", reportController.getReport);
router.patch("/resolveReport", reportController.resolveReport);
module.exports = router;
