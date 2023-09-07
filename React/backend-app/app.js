const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const ProductModel = require("./model/product");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is running");
});

app.post("/products", async (req, res) => {
  try {
    const result = await ProductModel.create(req.body)
  console.log(result);
  res.send(result);
  } catch (error) {
    console.log(error.message)
    res.send({status:'error',message:error.message})
  }
});

mongoose.connect(process.env.connectionString).then(() => {
  app.listen(3004);
  console.log("Server connected");
});
