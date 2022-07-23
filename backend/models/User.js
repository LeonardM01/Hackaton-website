const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  userPosts: { type: [ mongoose.objectId ], required: false },
  numUnseenPosts: { type: Number, required: true, default: 0 }
});

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
