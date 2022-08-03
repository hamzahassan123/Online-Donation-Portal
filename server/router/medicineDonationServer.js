const express = require("express");
const authenticate = require("../middleware/authenticate");
// import express from "express";

const router = express.Router();

require("../db/conn");

const User = require("../model/medcineDonationSchema");

router.post("/usermedicinedonation", authenticate, async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //object destructuring

  const { medicine_name, quantity, date, approval_status } = req.body;

  if (!medicine_name || !quantity || !date) {
    res.status(422).json({ error: "some of your fields/field are empty" });
  }

  try {
    const minexpiryDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);
    const expiryDate = new Date(date);

    if (expiryDate < minexpiryDate) {
      return res
        .status(422)
        .json({ error: "Expiry date atleast have a differece of 3 months" });
    } else {
      const user = User({ medicine_name, quantity, date, approval_status, user_id: req.user._id });

      const isRecSaved = await user.save();

      if (isRecSaved) {
        return res.status(201).json({
          message:
            "User donated medicines record updated successfully successfully",
        });
      } else {
        return res
          .status(500)
          .json({ error: "Donation failed due to server error" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
