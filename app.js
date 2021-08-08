/** @format */

const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const listRoute = require("./routes/list");
const testRoute = require("./routes/test");
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/list", listRoute);
app.use("/", testRoute);

mongoose
  .connect(
    "mongodb+srv://DSA_Tracker:eEuGHhtO8UQlrjfk@clusterdsa.z2p8w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((error) => console.log(error));
// app.listen(3000);
