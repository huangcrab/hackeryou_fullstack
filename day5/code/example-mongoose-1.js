const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: {
    type: String
  }
});

const commentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const url = "mongodb://localhost:27017/hackeryou";

const Users = mongoose.model("users", userSchema);
const Comment = mongoose.model("comments", commentSchema);
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(async () => {
    console.log(`Mongo DB is connected to ${url}`);

    // const myFriend = new Users({
    //   firstName: "John",
    //   lastName: "Don"
    // });

    // const friendDoc = await myFriend.save();
    // console.log(friendDoc);

    const users = await Users.find();
    console.log(users);

    const newComment = new Comment({
      body: "this is the comment body number 2",

      user: "5ca0d441629dd62ca89dc6f3"
    });

    const newCommentDoc = await newComment.save();

    console.log(newCommentDoc);

    const comments = await Comment.find();
    console.log(comments);
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
