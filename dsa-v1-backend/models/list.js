/** @format */

const { Schema, model } = require("mongoose");

const listSchema = new Schema({
  listId: String,
  totalQuestions: Number,
  solvedQuestions: Number,
  date: Number,
  userRating: Number,
  author: String,
  problems: [
    {
      problemId: String,
      problemName: String,
      problemRating: Number,
      saveStar: Boolean,
      problemStatus: Boolean,
      tags: [{ tag: String }],
    },
  ],
});

module.exports = model("List", listSchema);
