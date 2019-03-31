"use strict";

const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    path: req.path,
    baseUrl: req.baseUrl,
    method: req.method
  });
});
module.exports.router = router;
