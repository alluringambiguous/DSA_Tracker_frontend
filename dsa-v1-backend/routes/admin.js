/** @format */

const express = require("express");
const router = express.Router();

const addUser = require("../controllers/admin");

router.post("/admin/user", addUser.addUser);
router.post("/admin/userListDetails", addUser.addListDetails);
router.post("/admin/addList", addUser.addList);
router.post("/admin/addProblem", addUser.addProblem);

module.exports = router;
