
var user = require("../models/users");
var mongoose = require("mongoose");
const User = mongoose.model("User", user);
class UserService {
  async Inserir({ full_name, phone, email, password, role }) {
    try {
      user = new User({ full_name, phone, email, password, role });
      const response = await user.save();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
module.exports = new UserService();