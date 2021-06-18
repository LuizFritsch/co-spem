//Imports
var mongoose = require("mongoose");
var express = require("express");
var router = require("./routes/routes");
var cors = require("cors");
//Constants
const config = require('./config');
const app = express();


mongoose.connect(`mongodb://${config.db_host}:${config.db_port}/${config.db_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


/**
 * Server config
 */
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(config.port,()  =>  {
  console.log(`Server is running on ${config.port}...`);
});

module.exports = app;
