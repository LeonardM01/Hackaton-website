const User = require("../models/User.js");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(5);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
