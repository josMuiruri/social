const mongoose = require("mongoose");
const validate = require("validate");
userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validate.isEmail, "Please provide a valid"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
    select: false,
  },
  passwordConfrim: {
    type: String,
    required: [true, "Please confirm your password"],
    minlength: 8,
  },
  photo: {
    type: String,
  },
});
