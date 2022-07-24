const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  personId: { type: String, required: true }
});


module.exports = mongoose.model("Post", PostSchema);

PostSchema.virtual("dateFormat").get(function () {
  const date = DateTime.fromISO(this.date);
  const formattedDate = date.toLocaleString(DateTime.DATE_SHORT);
  return formattedDate;
});