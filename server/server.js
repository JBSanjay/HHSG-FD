import express from "express";
import dummy from "./schema/dummy.js";
import mongoose from "mongoose";
// var Teewt = require('mongoose').model('Teewt');
import user from "./schema/UserSchema.js";

const app = express();

app.get("/hello", (req, res) => {
  res.send(dummy);
});

app.listen(4000, () => {
  const mongoUrl = "mongodb://localhost:27017/Library-Login";
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("connected")
  });
  console.log("listening at port 4000");
});
