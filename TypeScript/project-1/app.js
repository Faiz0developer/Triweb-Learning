const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/", (req, res) => {
  res.send("Hi I'm root of server");
});

app.post("/post", (req, res) => {
  res.send("Hi I'm post method");
});
app.listen(3000);
