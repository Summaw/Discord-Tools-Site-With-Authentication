const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: null },
  password: { type: String },
  token: { type: String }
});

module.exports = mongoose.model("user", userSchema);