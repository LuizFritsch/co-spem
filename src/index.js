//Imports
var mongoose = require("mongoose");
var express = require("express");
var router = require("./routes/routes");
var cors = require("cors");
//Constants
const db_host = "localhost";
const db_port = "27017";
const db_db = "cospem";
const port = 80;
const app = express();


mongoose.connect(`mongodb://${db_host}:${db_port}/${db_db}`, {
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

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
