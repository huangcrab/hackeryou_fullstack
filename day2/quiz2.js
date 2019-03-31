"use strict";

const express = require("express");
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
const router_v1 = express.Router();
const router_v2 = express.Router();

app.use("/api/v1/users", router_v1);
app.use("/api/v2/users", router_v2);

const users = [
  {
    id: "1c066fdc9-5f6f-4e05-8d4c-66dd73d3210e",
    name: "Phil"
  },
  {
    id: "50bf253d-a758-445e-b597-80146a5604b0",
    name: "Mary"
  },
  {
    id: "ac99815f-1d56-4ab4-8630-a31045f61401",
    name: "Bailey"
  },
  {
    id: "f1fcbc30-6669-4438-9db3-e0fd9e028d96",
    name: "Harper"
  }
];

router_v1
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

router_v1.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.filter(user => user.id === id);

  res.json({
    data: user
  });
});

router_v2.get("/users", (req, res) => {
  const newUsers = users.map(user => {
    return {
      id: user.id,
      firstName: user.name
    };
  });
  res.json({
    data: newUsers
  });
});

router_v2.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const [user] = users.filter(user => user.id === id);

  const newUser = {
    id: user.id,
    firstName: user.name
  };

  res.json({
    data: newUser
  });
});

router_v2.post("/users", (req, res) => {
  const { user } = req.body;

  user.id = uuid();
  users.push(user);

  res.status(201).send({
    data: [user]
  });
});

app.listen(6000, () => {
  console.log("Quiz Question 2: is running...");
});
