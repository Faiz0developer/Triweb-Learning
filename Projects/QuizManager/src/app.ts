import express from "express";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import userRouter from "./routers/user";

const app = express();

const connectionString =
  "mongodb+srv://faizansiddiqui:Bismillah@mycluster.zsttz8l.mongodb.net/workshopdb?retryWrites=true&w=majority";

// const client = new MongoClient(connectionString);

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
  app.listen(3000, () => {
    console.log("Server Connected");
  });
});

// async function run() {
//   try {
//     await client.connect();
//     app.listen(3000, () => {
//       console.log("Server Connect");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// finally {
//     await client.close();
// }
// }
// run();
