const mongoose = require("mongoose");

const requestmedicneSchema = new mongoose.Schema({
  medicine_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  NGO_Name: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER",
  },
});

const Request = mongoose.model("request_medicine", requestmedicneSchema); //here the first argument is the name of collection

module.exports = Request;

// const User = require("./models/userSchema"); //this how we use userSchema in other files
