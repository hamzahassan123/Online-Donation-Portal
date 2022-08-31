const mongoose = require("mongoose");

const medicineDonationSchema = new mongoose.Schema({
  medicine_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER",
  },
});

const Donation = mongoose.model("donated_medicine", medicineDonationSchema); //here the first argument is the name of collection

module.exports = Donation;
