const express = require("express");
const router = express.Router();
const trashcanController = require("../controllers/trashcanController.js");

router.post("/createTrashcan", trashcanController.createTrashcan);
router.get("/getTrashcan/:id", trashcanController.getTrashcan);
router.get("/getTrashcans", trashcanController.getTrashcans);
router.delete("/deleteTrashcan/:id", trashcanController.deleteTrashcan)

module.exports = router;
