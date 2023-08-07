"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "whereto-dev";

const PORT = +process.env.PORT || 3001;


console.log("WhereTo Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
};
