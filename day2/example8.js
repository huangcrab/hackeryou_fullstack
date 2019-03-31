"use strict";

const express = require("express");
const uuid = require("uuid/v4");

const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use("/api/v1/users", router);
app.use("/api/v1/users", router2);

const users = [
  {
    id: uuid(),
    name: "Phil"
  },
  {
    id: uuid(),
    name: "Mary"
  },
  {
    id: uuid(),
    name: "Bailey"
  },
  {
    id: uuid(),
    name: "Harper"
  }
];

router
  .route("/")
  .get((req, res) => {
    res.json({
      data: users
    });
  })
  .post((req, res) => {
    const { user } = req.body;

    user.id = uuid();
    users.push(user);

    res.status(201).send({
      data: [user]
    });
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.filter(user => user.id === id);

  res.json({
    data: user
  });
});

app.listen(6000, () => {
  console.log("Quiz Question 1: is running...");
});
