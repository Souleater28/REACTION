const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const login = require("./modules/login/routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/login", login);

var server = app.listen(3000, function() {
  console.log("Node server is running on port 3000");
});
