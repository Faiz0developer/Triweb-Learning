import express from "express";
import userRouter from "./routers/user";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/user", userRouter);

app.listen(3000);
