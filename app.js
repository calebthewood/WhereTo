"use strict";

/** Express app for WhereTo. */

const express = require("express");
const cors = require("cors");
const { NotFoundError } = require("./expressError");
const surfHi = require("./routes/surfHi")
const morgan = require("morgan");
const app = express();

app.use(cors());


/** Express app for WhereTo. */


app.use("/surfHi", surfHi)


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;