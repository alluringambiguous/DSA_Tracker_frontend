/** @format */
const userModel = require("../models/user");

exports.displayUser = async (req, res) => {
    const userId = req.params.userId;
   
  try {
    const user = await userModel.findById(userId).exec();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};
