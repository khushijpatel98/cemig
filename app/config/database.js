const mongoose = require("mongoose");
const db = require("../models");

exports.connect = () => {
  // Connecting to the database
  console.log("URL", db.url)
  mongoose
    .connect(db.url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
