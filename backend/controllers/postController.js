const Post = require("../models/Post.js");
const mongoose = require("mongoose");

exports.createPost = async (req, res) => {
    // ! TODO ! //
  const { title, body, date, personId } = req.body;

  try {

    const result = await Post.create({
      title,
      body,
      personId
    });


    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.deletePost = async (req, res) => {
    const { _id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    await Post.deleteOne( { "_id": _id } );

    res.json({ message: "Post deleted successfully." });
  };


exports.getPost = async (req, res) => { 
  const numSkip = req.query.numSkip || 0;

  try {
      const post = await Post.find().sort({date: -1}).skip(numSkip).limit(3);
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}