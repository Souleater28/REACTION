const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const login = require("./modules/login/routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/login", login);

mongoose
  .connect(
    "mongodb+srv://Griz:fuck1ng_asshol6@firstproject-dljrj.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECTED"));

const server = app.listen(3000, function () {
  console.log("Node server is running on port 3000");
});
