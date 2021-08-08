/** @format */

const express = require("express");
const router = express.Router();

const displayUser = require("../controllers/user");

router.get("/user/:userId", displayUser.displayUser);

module.exports = router;
