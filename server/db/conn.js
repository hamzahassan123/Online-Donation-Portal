const mongoose = require("mongoose");

const DB = process.env.REGISTRATION_DB;

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((e) => {
    console.log(e);
  });
