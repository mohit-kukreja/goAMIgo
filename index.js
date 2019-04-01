const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
var config = require("./config/database.js");
const path = require("path");
const authentication = require("./routes/authentication")(router);
const bodyParser = require("body-parser");
const userTripsRoute = require("./routes/userTripsRoute")(router);
const tripRoute = require("./routes/tripRoute")(router);
const transactionRoute = require("./routes/transactionRoute")(router);
const chatRoute = require("./routes/groupchatRoute")(router);
//const ImageRoute = require('./routes/imagesRoute')(router);
const imgRoute = require("./routes/imagesRoute");
mongoose.connect(config.uri, err => {
  if (err) {
    console.log("could not connect");
  } else {
    console.log("connect ho gaya bhai");
  }
});
mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
  var allowedOrigins = [
    "http://localhost:4200",
    "https://goamigo-mohit.herokuapp.com/"
  ];

  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + "/cliend/dist/")));

app.use("/authentication", authentication);
app.use("/trips", userTripsRoute);
app.use("/mytrip", tripRoute);
app.use("/transaction", transactionRoute);
app.use("/files", imgRoute);
app.use("/chat", chatRoute);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/cliend/dist/index.html"));
});

app.listen(port, function() {
  console.log("it works");
});

module.exports = router;
