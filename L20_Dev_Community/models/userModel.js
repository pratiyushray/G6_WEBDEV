const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  firstName: String,
  lastName: String,
  emailId: { type: String, required: true, unique: true },
  password: String,
});

module.exports = mongoose.model("User", User);
