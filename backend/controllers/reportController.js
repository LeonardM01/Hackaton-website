const Report = require("../models/Report.js");
const mongoose = require("mongoose");

exports.createReport = async (req, res) => {
    // ! TODO ! //
  const { title, body, date, personId, location, isResolved } = req.body;

  try {

    const result = await Report.create({
      title,
      body,
      personId,
      location,
      isResolved
    });


    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};


exports.getReport = async (req, res) => { 
  const numSkip = req.query.numSkip || 0;

  try {
      const report = await Report.find().sort({date: -1}).skip(numSkip).limit(3);
      
      res.status(200).json(report);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

exports.resolveReport = async (req, res) => { 
    const { 
        _id,
        title,
        body,
        personId,
        location,
        isResolved } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const updatedPost = { 
        _id,
        title,
        body,
        personId,
        location,
        isResolved: true };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost._id);
  }
