const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");


router.get("/", userController.getAllUsers);

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);

module.exports = router;
