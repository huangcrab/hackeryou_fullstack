"user strict";

const express = require("express");
const app = express();

const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: "index.html",
  maxAge: "1d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
};

app.use("/", express.static("public", options));

app.listen(5000, () => {
  console.log("app is running");
});
