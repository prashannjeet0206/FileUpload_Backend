const mongoose = require("mongoose");

require("dotenv").config();

const DB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connection to database is successful");
    })
    .catch((err) => {
      console.log("Connection to database failed");
      console.error(err);
      process.exit(1);
    });
};

module.exports = DB;
