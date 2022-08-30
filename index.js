const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const startApp = (mongoConnectionString, mongoose) => {
  //creating an express application :
  const app = express();
  console.log("Created an instance of Express Successfully!");
  console.log("-------\n-------");

  //initialsing body to handle JSON Type Data
  app.use(bodyParser.json({ limit: "2mb" }));
  console.log(
    "Body Parsing available now. View req.body to see incoming data in requests"
  );
  console.log("-------\n-------");
  //using Cross Origin Resource Sharing so that, our front end at localhost:3000 can communicate with backend at local host:8000
  app.use(cors());
  console.log("CORS Enabled");
  console.log("-------\n-------");
  //Using Morgan to display requests :

  app.use(morgan("dev"));
  console.log("Morgan Enabled for Debugging");
  console.log("-------\n-------");
  //Connect to Database
  mongoose
    .connect(mongoConnectionString)
    .then((res) => {
      console.log("Database is Connected! 🎉");
      console.log("-------\n-------");
    })
    .catch((err) => {
      console.log("Database Not Connected! 💥", err);
      console.log("-------\n-------");
    });

  return app;
};

module.exports = startApp;
