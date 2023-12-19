const express = require("express");
const mongoose = require("mongoose");

const studentRouter = require("./components/routers/students");
const rightsRouter = require("./components/routers/rights");

const app = express();

app.use(express.json())

app.get("/working", (req, res) => {
  res.send("Working");
});

app.use("/student", studentRouter);
app.use("/right", rightsRouter);

mongoose.connect("mongodb+srv://faizansiddiqui:Bismillah@mycluster.zsttz8l.mongodb.net/populate?retryWrites=true&w=majority").then(() => {
  app.listen(3000, () => {
    console.log("Server connect");
  });
});
