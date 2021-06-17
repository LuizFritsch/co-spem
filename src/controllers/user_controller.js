var utils = require("../utils/utils");
var User = require("../database/services/user_service");
var userFactory = require("../database/factories/user_factory");

var bcrypt = require("bcrypt");
const saltRounds = 10;

class UserController {
  /**
   * List all
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    try {
      var users = await User.findAll();
      var usrs = [];
      users.forEach((user) => {
        usrs.push(userFactory.Build(user));
      });
      res.json(usrs);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res) {
    var { email, full_name, password, role, phone } = req.body;
    if (utils.isTextFieldValueNull(email)) {
      res.status(400);
      res.json({ msg: "invalid email..." });
      return;
    }
    if (utils.isTextFieldValueNull(full_name)) {
      res.status(400);
      res.json({ msg: "invalid name..." });
      return;
    }
    if (utils.isTextFieldValueNull(password)) {
      res.status(400);
      res.json({ msg: "invalid password..." });
      return;
    }
    if (role == undefined) {
      role = 0;
    }

    var emailExists = await User.findEmail(email);

    if (emailExists) {
      res.status(406);
      res.json({ msg: "email already exists..." });
      return;
    }

    password = await bcrypt.hash(password, saltRounds);

    try {
      var user = {
        email,
        password,
        role,
        full_name,
        phone,
      };
      await User.insert(user);
      res.status(200);
      res.json({ msg: "success" });
    } catch (error) {
      res.status(403);
      res.json({ msg: "error inserting user on db..." });
    }
  }
}

module.exports = new UserController();
