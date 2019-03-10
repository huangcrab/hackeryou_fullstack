"user strict";

const express = require("express");

const app = express();

app.get("/html", (req, res) => {
  res.send("<h1>Hello World<h1> <br / > <h3>HTML Route</h3>");
});

app.get("/json", (req, res) => {
  res.json({
    main: "hello world",
    meta: "json route"
  });
});

app.get("/custom", (req, res) => {
  res.status(418).send({
    data: "I'm a Teaport"
  });

  //   res.statusCode = 418;
  //   res.send("testing");
});

app.listen(5000, () => {
  console.log("app is running");
});
