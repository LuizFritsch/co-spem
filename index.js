//Constants
const db_host = "localhost";
const db_port = "27017";
const db_db = "cospem";
const port = 80;


//Imports
const userService = require('./database/services/user_service');
var mongoose = require('mongoose');
var express = require("express");
const app = express();

mongoose.connect(`mongodb://${db_host}:${db_port}/${db_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => console.log(`Example app listening on port port!`));

//Code
app.get("/", (req, res) => res.send("Initial page"));

app.post("/user", async (req, res) => {
  //console.log(req.body);
  var status = await userService.Inserir(req.body);
  status ? res.redirect('/') : res.send('error');
});


