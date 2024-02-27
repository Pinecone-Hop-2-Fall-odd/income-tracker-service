const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdOn: {type: Date, default: Date.now()},
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
