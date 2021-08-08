/** @format */
const listModel = require("../models/list");

exports.displayList = async (req, res) => {
    const listId = req.params.listId;
    // res.send(listId);

  try {
    const list = await listModel.findById(listId).exec();
    res.send(list);
  } catch (err) {
    res.send(err);
  }
};
