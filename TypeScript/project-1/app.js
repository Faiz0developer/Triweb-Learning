const express = require("express");
const userRoute = require("../project-1/routers/user");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi I'm root of server");
});

app.use("/user", userRoute);

app.listen(process.env.PORT);
