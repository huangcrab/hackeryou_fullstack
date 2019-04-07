// api/routes/users/userRoutes.js
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();

const { model: UserModel } = require("./userModel");

// POST /api/users/
router.route("/").post(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = new UserModel({ email, password });
    const doc = await user.save();
    res.status(201).json({
      data: [doc]
    });
  } catch (e) {
    next(e);
  }
});

// POST /api/users/login/
router.route("/login").post(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      next(new Error("not found"));
    } else {
      const match = await user.comparePassword(password);

      if (match) {
        res.json({
          data: [user]
        });
      } else {
        next(new Error("unauthorized"));
      }
    }
  } catch (e) {
    next(e);
  }
});
app.use(bodyParser.json());
app.use("/api/users", router);
mongoose
  .connect("mongodb://localhost:27017/hash-example", { useNewUrlParser: true })
  .then(() => {
    console.log("MognoDB connected");
    app.listen(6000, () => {
      console.log("server is runing on 6000");
    });
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
