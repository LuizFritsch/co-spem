var user = require("../models/users");
var mongoose = require("mongoose");
const User = mongoose.model("User", user);
class UserService {
  /**
   * find all users on database
   * @returns {array} all user
   */
  async findAll() {
    try {
      var result = await this.find({});
      return result ? result : [{}];
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Insert a user in the database
   * @param {json} user - {full_name, email, role, phone, password}
   */
  async insert(user) {
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
      var result = await this.find({ email: email });
      //TODO esse email precisa ser >= 1 pq se n aceita 2 email igual
      return result.length >= 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Method to find user
   * If filter = {} return all
   * If filter type != {} return [{}]
   * @param {object} filter array of filter (empty list all) 
   * @returns 
   */
  async find(filter) {
    try {
      if (typeof {} != typeof filter) return [{}];
      return await User.find(filter).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserService();
