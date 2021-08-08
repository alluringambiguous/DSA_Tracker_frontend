/** @format */

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: String,
  codeforcesId: Number,
  password: String,
  username: String,
  listDetails: [
    {
      listId: String,
      totalQuestions: Number,
      solvedQuestions: Number,
      date: Number,
      avgRating: Number,
      author: String,
    },
  ],
});

module.exports = model("User", userSchema);
