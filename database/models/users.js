var mongoose = require("mongoose");
const users = new mongoose.Schema({
  full_name: String,
  phone: String,
  email: String,
  password: String,
  role: Number,
  date_signup: {
    type: Date,
    default: Date.now,
  },
  is_confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = users;
