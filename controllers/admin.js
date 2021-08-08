/** @format */

const userModel = require("../models/user");
const listModel = require("../models/list");

exports.addUser = async (req, res) => {
  const user = new userModel({ ...req.body });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

exports.addListDetails = async (req, res) => {
  let listDetails = [];
  const userId = req.body.userId;
  try {
    const user = await userModel.findById(userId).exec();
    user.listDetails.map((listDetail) => {
      listDetails.push(listDetail);
    });
    listDetails.push({ ...req.body });
  } catch (err) {
    res.send(err);
  }

  try {
    let res = await userModel.findOneAndUpdate(
      { _id: userId },
      { listDetails: listDetails },
      {
        new: true,
      }
    );
    res.send(res);
  } catch (err) {
    res.send(err);
  }
};

exports.addList = async (req, res) => {
  const list = new listModel({ ...req.body });
  try {
    await list.save();
    res.send(list);
  } catch (err) {
    res.send(err);
  }
};

exports.addProblem = async (req, res) => {
  let problems = [];
  const listId = req.body.listId;
  try {
    const list = await listModel.findById(listId).exec();
    list.problems.map((problem) => {
      problems.push(problem);
    });
    problems.push({ ...req.body });
  } catch (err) {
    res.send(err);
  }

  try {
    let res = await listModel.findOneAndUpdate(
      { _id: listId },
      { problems: problems },
      {
        new: true,
      }
    );
    res.send(res);
  } catch (err) {
    res.send(err);
  }
};
