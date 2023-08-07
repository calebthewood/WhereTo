"use strict";

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = express.Router({ mergeParams: true });
const convert = require('xml-js');

const HI_SURF_FEED = 'https://www.weather.gov/source/hfo/xml/SurfState.xml'

router.get("/", async function (req, res, next) {
  // let data;

  // let url = 'https://www.weather.gov/source/hfo/xml/SurfState.xml';
  // let options = { method: 'GET' };

  // try {
  //   const xmlResponse = await fetch(url, options);
  //   const reader = xmlResponse.body.pipeThrough(new TextDecoderStream()).getReader();
  //   while (true) {
  //     const { value, done } = await reader.read();
  //     if (done) break;
  //     console.log('******* Received *******\n', value);
  //     data = convert.xml2js(value);
  //   }
  // } catch (e) {
  //   console.log(e);
  // }

  const surfData = fetch(HI_SURF_FEED)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))


  return res.json(surfData);
});

module.exports = router;