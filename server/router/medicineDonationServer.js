const express = require("express");
// import express from "express";

const router = express.Router();

require("../db/conn");

const User = require("../model/medcineDonationSchema");

router.post("/usermedicinedonation", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //object destructuring

  const { medicine_name, quantity, date, approval_status } = req.body;

  if (!medicine_name || !quantity || !date) {
    res.status(422).json({ error: "some of your fields/field are empty" });
  }

  try {
    // One day Time in ms (milliseconds)
    var one_day = 1000 * 60 * 60 * 24;

    // To set present_dates to two variables
    var present_date = new Date();

    console.log(present_date, date);

    // To Calculate the result in milliseconds and then converting into days
    var Result = Math.round("2022-08-24" - "2022-07-24") / one_day;

    // To remove the decimals from the (Result) resulting days value
    var Final_Result = Result.toFixed(0);
    console.log("time difference is :", Final_Result);

    if (Final_Result < 90) {
      return res
        .status(422)
        .json({ error: "Expiry date atleast have a differece of 3 months" });
    } else {
      const user = User({ medicine_name, quantity, date, approval_status });

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
