const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authenticate");

// require("../middleware/authenticate");

require("../db/conn");

const User = require("../model/requestMedicineSchema");

//registring user by storing his data in mongoDB
// storing data in the database using Async-Await

router.post("/requestmedicineserver", authenticate, async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //object destructuring

  const { medicine_name, quantity, status } = req.body;

  try {
    if (!medicine_name || !quantity) {
      res.status(422).json({ error: "some of your field/fields are empty" });
    } else {
      const user = User({ medicine_name, quantity, status, user_id: req.user._id });
      //here we will hash the passwords
      const isRequestSaved = await user.save();

      if (isRequestSaved) {
        res.status(201).json({ message: "User registered successfully" });
      } else {
        return res
          .status(500)
          .json({ error: "registration failed due to server error" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
