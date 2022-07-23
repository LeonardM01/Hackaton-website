const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");


router.post("/createPost", postController.createPost);
router.delete("/deletePost", postController.deletePost);
router.get("/getPost", postController.getPost);

module.exports = router;
