var jwt = require("jsonwebtoken");

var secret = "secret!@&#*76328432409843*&@$^#*)&^#@";

module.exports = function (req, res, next) {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];
    try {
      var decoded = jwt.verify(token, secret);
      if (decoded.role == 1) {
        next();
      } else {
        res.status(403);
        res.json({ status: 403, msg: "Você não tem permissão para isso!" });
      }
    } catch (err) {
      console.log(err);
      res.status(403);
      res.json({ status: 403, msg: "Você não tem permissão para isso!" });
      return;
    }
  } else {
    res.status(403);
    res.json({ status: 403, msg: "Você não tem permissão para isso!" });
    return;
  }
};
