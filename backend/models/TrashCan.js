const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrashCanSchema = new Schema({
    type: { type: String, required: true },
    coordinates: { 
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true } 
    },
    percentFilled: { type: [Number], required: false }
});


module.exports = mongoose.model("TrashCan", TrashCanSchema);

TrashCanSchema.virtual("averageFilled").get(function () {
    return this.percentFilled.reduce((a, b) => a + b, 0) / this.percentFilled.length;
  });