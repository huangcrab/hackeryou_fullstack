"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const app = express();

router
  .route("/*")
  .get((req, res) => {
    res.json({
      data: {
        path: req.path,
        method: req.method
      }
    });
  })
  .post((req, res) => {
    res.json({
      path: req.path,
      method: req.method,
      payload: req.body,
      message: req.body.asd
    });
  });
app.use(bodyParser.json());
app.use("/router1", router);

app.listen(5000, () => {
  console.log("app is running ");
});
