const express = require("express");
const userRouter = require("../sequelize/routers/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`I'm Working`);
});

app.use("/user", userRouter);

app.listen(3000);
