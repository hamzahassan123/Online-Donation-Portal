const jwt = require("jsonwebtoken");
const User = require("../model/UserSchemaRegistration");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers?.cookie?.split("=")[1] || req.cookies?.userSigninToken || null;

    if(!token) {
      res.status(401);
      res.send("No token provided");
      return;
    }
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      res.status(401);
      res.send("User not found");
    }

    req.token = token;
    req.user = rootUser;
    req.UserID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unathorized:No token provided");
    console.log(error);
  }
};

module.exports = authenticate;
