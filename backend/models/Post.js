const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TruckSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  personId: { type: String, required: true }
});


module.exports = mongoose.model("Post", PostSchema);
