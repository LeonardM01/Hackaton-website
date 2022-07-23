const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TruckSchema = new Schema({
  registrationPlate: { type: String, required: true },
  type: { type: String, required: true }
});


module.exports = mongoose.model("Truck", TruckSchema);
