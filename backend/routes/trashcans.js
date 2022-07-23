const express = require("express");
const router = express.Router();
// const trashcanController = require("../controllers/trashcanController.js");


<<<<<<< HEAD
// router.post("/createTrashcan", trashcanController.createTrashcan);
// router.get("/getOneTrashcan", trashcanController.getOneTrashcan);
// router.patch("/getAllTrashcans", trashcanController.getAllTrashcans);
=======
router.post("/createTrashcan", trashcanController.createTrashcan);
router.get("/getTrashcan/:id", trashcanController.getTrashcan);
router.get("/getTrashcans", trashcanController.getTrashcans);
router.delete("/deleteTrashcan/:id", trashcanController.deleteTrashcan)
>>>>>>> deebc24abde097482ce8f8aa736e9cbc909f21ac

module.exports = router;
