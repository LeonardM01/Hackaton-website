const express = require("express");
const router = express.Router();
const trashcanController = require("../controllers/trashcanController.js");


router.post("/createTrashcan", trashcanController.createTrashcan);
router.get("/getOneTrashcan", trashcanController.getOneTrashcan);
router.patch("/getAllTrashcans", trashcanController.getAllTrashcans);

module.exports = router;
