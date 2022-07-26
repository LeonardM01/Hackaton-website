const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(5);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { email, confirmPassword, password, firstName, lastName, username } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists!" });
    console.log(password, confirmPassword);
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });
      
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign(
      {
        email: result.email,
        _id: result._id,
        role: result.role,
      },
      "test",
      { expiresIn: "1h" }
    );
    result.password = null;

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        _id: existingUser._id,
        role: existingUser.role,
      },
      "test",
      { expiresIn: "1h" }
    );
    existingUser.password = null;
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.changeRole = async (req, res) => { 
  const { 
    id,
    newRole } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const user = await User.findById(id);
  user.role = newRole;
  await user.save();
  res.json(user);
}