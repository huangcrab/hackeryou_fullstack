"use strict";
const mongoose = require("mongoose");

const { model: userModel } = require("./models/userModel");
const { model: postModel } = require("./models/postModel");
const { model: commentModel } = require("./models/commentModel");

async function seed() {
  //Truncate the collections
  await userModel.remove();
  await postModel.remove();
  await commentModel.remove();

  const usersData = [
    {
      firstName: "Micheal",
      lastName: "Perrotte"
    },
    {
      firstName: "Xie",
      lastName: "Huang"
    },
    {
      firstName: "John",
      lastName: "DoN"
    }
  ];

  const userPromises = usersData.map(async userData => {
    const user = new userModel(userData);
    const userDoc = await user.save();
    return userDoc;
  });

  const users = await Promise.all(userPromises); // FOR REASONS

  const commentsData = [
    {
      body: "This is a comment body 1",
      user: users[0]
    },
    {
      body: "This is a comment body 2",
      user: users[1]
    },
    {
      body: "This is a comment body 3",
      user: users[2]
    }
  ];

  const commentPromises = commentsData.map(async commentData => {
    const comment = new commentModel(commentData);
    const commentDoc = comment.save();

    return commentDoc;
  });

  const comments = await Promise.all(commentPromises);

  const postData = [
    {
      title: "Title 1",
      body: "This is post body 1",
      user: users[0],
      comments
    }
  ];

  const post = new postModel(postData[0]);
  const postDoc = await post.save();

  console.log("Seeding complete.");
}

const url = "mongodb://localhost:27017/blog";

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(async () => {
    console.log(`Mongodb is connect to ${url}`);
    await seed();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
