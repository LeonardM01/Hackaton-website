const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coordinatesSchema = mongoose.Schema({
    latitude: Number,
    longitude: Number
})

const ReportSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    personId: { type: String, required: true },
    coordinates: { type: coordinatesSchema, required: false },
    isResolved: {type: Boolean, required: true, default: false}
    }
);


module.exports = mongoose.model("Report", ReportSchema);
