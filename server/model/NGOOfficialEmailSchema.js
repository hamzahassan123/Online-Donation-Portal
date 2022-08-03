const mongoose = require("mongoose");

const NGOOfficialEmailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  NGO_email: {
    type: String,
    required: true,
  },
});

const NGOEmail = mongoose.model("NGO_official_email", NGOOfficialEmailSchema);

module.exports = NGOEmail;
