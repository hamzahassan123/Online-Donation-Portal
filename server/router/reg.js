const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const {
  sendConfirmationEmail,
  resetPasswordEmail,
} = require("../services/nodemailer.config");
const config = require("../configs");

require("../db/conn");

const User = require("../model/UserSchemaRegistration");
const NGOEmail = require("../model/NGOOfficialEmailSchema");
const Request = require("../model/requestMedicineSchema");
const Donation = require("../model/medcineDonationSchema");

// router.post("/", (req, res) => {
//   const { name, email, password, cpassword } = req.body; //object destructuring property

//   if (!name || !email || !password || !cpassword) {
//     res.status(422).json({ error: "some data is missing" });
//   }

//   User.findOne({ email: email })
//     .then((emailExists) => {
//       if (emailExists) {
//         res.json({ error: "email already exist" });
//       }

//       //we have to get user data in an object below

//       const user = new User({ name, email, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ success: "data saved successfully!" });
//         })
//         .catch((e) => {
//           res
//             .status(500)
//             .json({ error: "user registration failled due to server issue" });
//           console.log(e);
//         });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

//registring user by storing his data in mongoDB
// storing data in the database using Async-Await

router.get("/registration", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("I AM ON REGISTRATION PAGE");
});

router.post("/registration", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //object destructuring

  const { name, email, password, cpassword, role } = req.body;

  if (!name || !email || !password || !cpassword || !role) {
    res.status(422).json({ error: "some of your fields/field are empty" });
  }

  if (password !== cpassword) {
    res.status(400);
    res.send("Password and Confirm password doesn't match");
    return;
  }

  try {
    const isEmailExist = await User.findOne({ email: email.toLowerCase() });

    if (isEmailExist) {
      res.status(400).json({ error: "This email already exists" });
      return;
    }

    if (role == "NGO") {
      const emailCollection = await NGOEmail.find();

      const found = emailCollection.find((item) => item.NGO_email === email);

      if (!found) {
        res.status(404);
        res.send("NGO's email doesn't exist in our records");
        return;
      }
    }

    const user = {
      name,
      email,
      password,
      cpassword,
      role,
    };

    const emailToken = jwt.sign({ user }, config.secret);

    sendConfirmationEmail(name, email, emailToken);

    res.status(201).send("User registered. Verify your email now.");
  } catch (error) {
    console.log(error);
  }
});

router.get("/confirm-signup/:confirmationCode", async (req, res) => {
  try {
    const code = req.params.confirmationCode;

    const decoded = jwt.verify(code, config.secret);

    const exists = await User.findOne({ email: decoded.user.email });

    if (exists) {
      res.status(400);
      res.send("Already registered");
      return;
    }

    const user = await User.create(decoded.user);

    if (!user) {
      res.status(404);
      res.send("User not created.");
      return;
    }

    res.redirect("http://localhost:3000/verified-email");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400);
      res.send("Missing a field.");
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      res.send("User with this email doesn't exist");
      return;
    }

    const resetToken = jwt.sign({ email }, config.secret);

    resetPasswordEmail(user.name, email, resetToken);

    res.send("Password reset link sent!");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/confirm-forgot-password/:resetPasswordCode", async (req, res) => {
  try {
    const code = req.params.resetPasswordCode;

    const decoded = jwt.verify(code, config.secret);

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      res.status(404);
      res.send("User not created.");
      return;
    }

    res.redirect(`http://localhost:3000/userresetpassword?user_id=${user._id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/reset-password/:userid", async (req, res) => {
  try {
    const { password } = req.body;
    const user_id = req.params.userid;

    if (!password) {
      res.status(400);
      res.send("Missing a field.");
      return;
    }

    const user = await User.findById(user_id);

    if (!user) {
      res.status(400);
      res.send("User doesn't exist");
      return;
    }

    user.password = password;
    user.cpassword = password;

    await user.save();

    res.send("Password reset successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

//login varification

router.post("/signin", async (req, res) => {
  //object destructuring

  const { email, password } = req.body;

  const user = new User({ email, password });

  if (!email || !password) {
    res.status(400).json({ error: "Field/Fields are empty" });
  }

  try {
    const isUserFound = await User.findOne({ email: email });

    if (isUserFound) {
      const isMatched = await bcrypt.compare(password, isUserFound.password);

      const token = await isUserFound.generateAuthToken();
      console.log(token);

      res.cookie("userSigninToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: this.true,
      });

      if (isMatched) {
        return res
          .status(201)
          .json({ message: "user login successfully", data: isUserFound });
      } else {
        return res.status(400).json({ error: "invalid cradential" });
      }
    } else {
      return res.status(400).json({ error: "your cradentials are invalid" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/checkauth", authenticate, async (req, res) => {
  if (!req.user) {
    res.status(401);
    res.send("Unauthorized");
    return;
  }

  res.json(req.user);
});

router.get("/logout", async (req, res) => {
  console.log("Hello my logout page");
  res.clearCookie("userSigninToken", { path: "/" });
  res.status(200).send("user logout");
});

router.get("/userdashboard", authenticate, async (req, res) => {
  const user_id = req.user._id;
  let records;

  if (req.user.role === "DONOR") {
    records = await Donation.find({ user_id });
  } else {
    records = await Request.find({ user_id });
  }
  console.log(records);
  res.status(200).json(records);
});

module.exports = router;
