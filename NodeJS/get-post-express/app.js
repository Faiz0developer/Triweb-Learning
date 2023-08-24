const express = require("express");

// create app or server
const app = express();

//parse json data
app.use(express.json());

// sending response using GET method
app.get("/", (req, res) => {
  //   console.log("here");
  //   console.log(req);
  res.send("I am response");
});

app.get("/add", (req, res) => {
  let n1 = 4;
  let n2 = 3;
  let n3 = n1 + n2;
  //   res.send(`Sum is ${n3}`)   // RangeError

  res.status(200).send(`Sum is ${n3.toString()}`);
  //   res.send("Addition");
});

// sending response using POST method
app.post("/add", (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let sum = n1 + n2;
  res.send(`Sum = ${sum.toString()}`);
});

app.post("/subtract", (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let subtract = n1 - n2;
  res.send(`Subtract = ${subtract.toString()}`);
});

app.post("/multiply", (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let multiply = n1 * n2;
  res.send(`Multiply = ${multiply.toString()}`);
});

app.post("/division", (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let result = n1 / n2;
  res.send(`Quotient = ${result.toString()}`);
});

app.listen(3000);
