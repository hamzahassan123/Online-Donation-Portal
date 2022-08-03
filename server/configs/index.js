require("dotenv").config({ path: "../config.env" });

const user = process.env.USER;
const password = process.env.PASS;
const service = process.env.SERVICE;
const host = process.env.HOST;
const secret = process.env.SECRET_KEY;

module.exports = { user, password, service, host, secret };