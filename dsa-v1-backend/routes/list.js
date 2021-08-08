/** @format */

const express = require("express");
const router = express.Router();

const displayList = require("../controllers/list");

router.get("/list/:listId", displayList.displayList);

module.exports = router;
