import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user";

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/user", userRouter);

const connect = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

connect.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Connected");
  });
});
