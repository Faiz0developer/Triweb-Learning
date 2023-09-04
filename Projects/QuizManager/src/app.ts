import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user";
import authRouter from "./routers/auth";

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/user", userRouter);

app.use("/auth", authRouter);

const connect = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

connect.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Connected");
  });
});
