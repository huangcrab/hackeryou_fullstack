"use strict";

const express = require("express");

const http = require("http");
//const https = require("https");

const router = express();

const { router: userRouter } = require("./routes/users");
//const uerRouter = require('./routes/users').router    this line is the same
const { handleBodyRequestParsing } = require("./middleware/common");
const applyMiddleware = (middlewareWrapper = [], router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(router);
  }
};

applyMiddleware([handleBodyRequestParsing], router);

router.use("/users", userRouter);

const server = http.createServer(router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
