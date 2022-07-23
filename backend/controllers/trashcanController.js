const TrashCan = require("../models/TrashCan.js");

exports.createTrashcan = async (req, res) => {
  // ! TODO ! //
  const { type, coordinates } = req.body;

  try {
    const result = await TrashCan.create({
      type,
      coordinates: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
    });

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.getTrashcans = async (req, res) => {
  try {
    const trashcans = await TrashCan.find();
    if (!trashcans) return res.status(404).json({ message: "There are no trashcans." });
    res.status(200).json(trashcans);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.getTrashcan = async (req, res) => {
  const { id } = req.params;

  try {
    const trashcan = await TrashCan.findOne({ id });
    if (!trashcan) return res.status(400).json({ message: "The trashcan doesn't exist" });
    res.status(200).json(trashcan);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.deleteTrashcan = async (req, res) => {
  const { id } = req.params;
  try {
    await TrashCan.deleteOne({ id });
    res.status(200).json({ _id: id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
