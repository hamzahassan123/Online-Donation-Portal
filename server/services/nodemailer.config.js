const nodemailer = require("nodemailer");
const config = require("../configs");

const user = config.user;
const pass = config.pass;
const service = config.service;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: "bishalpandit17@gmail.com",
    clientId:
      "262265642985-8demtoo2otk0u0b7jj3r14qgkcm7iv9o.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04Yt8wVjGrgyRCgYIARAAGAQSNwF-L9IrLBuxv8m6gr-r2u5SPT0_SuntInENSGjyb5__iWLR1J_kTYOpGSC-1HLAcjZuETLmA4E",
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log("Check");
  transport
    .sendMail({
      from: "bishalpandit17@gmail.com",
      to: email,
      subject: "Please confirm your account - MeDonor",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}, </h2>
          <p>Thank you for signing up at MEDONOR. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:5000/confirm-signup/${confirmationCode}> Click here</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

const resetPasswordEmail = (name, email, resetPasswordCode) => {
  transport
    .sendMail({
      from: "hamza140934@gmail.com",
      to: email,
      subject: "Reset your password - MeDonor",
      html: `<h1>Password Reset</h1>
          <h2>Hello ${name}, </h2>
          <p>Please reset your account password by clicking on the following link</p>
          <a href=http://localhost:5000/confirm-forgot-password/${resetPasswordCode}> Click here</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = { sendConfirmationEmail, resetPasswordEmail };
