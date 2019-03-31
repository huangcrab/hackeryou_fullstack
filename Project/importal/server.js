const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let db;
if (process.env.NODE_ENV === "production") {
  db = require("./config/keys").mongoURI;
} else {
  db = require("./config/keys").local;
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongodb connceted");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
