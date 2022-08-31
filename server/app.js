//creating a HTTP server ! Lets go
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const User = require("./model/UserSchemaRegistration");

dotenv.config({ path: "./config.env" });
//creating connection with mongoDB

require("./db/conn");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(require("./router/reg"));
app.use(require("./router/medicineDonationServer"));
app.use(require("./router/requestMedicineServer"));
app.use(require("./router/Donation"));
app.use(require("./router/Request_Medicine"));
app.use(require("./router/NGO"));

//requests are coded below

// app.get("/", (req, res) => {
//   console.log("Hello world!");
//   res.send("HELLO WORLD!");
// });

app.listen(port, () => {
  console.log("Server is Listening on port " + port);
});
