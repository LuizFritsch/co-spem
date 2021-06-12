var user = require("../models/users");
var mongoose = require("mongoose");
const User = mongoose.model("User", user);
var jwt = require("jsonwebtoken");
class UserService {
  /**
   * Insert a user in the database
   * @param {json} user - {full_name, email, role, phone, password} 
   */
  async new(user) {
    try {
      user = new User(user);
      await user.save();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method to find if an email already exists on database
   * @param {string} email 
   * @returns {boolean} true if email exists already
   */
  async findEmail(email) {
    try {
      return await User.find({'email':email}).exec().length > 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
module.exports = new UserService();
