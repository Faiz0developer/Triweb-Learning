module.exports.add = (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let sum = n1 + n2;
  res.send(`Sum = ${sum.toString()}`);
};

module.exports.subtract = (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let subtract = n1 - n2;
  res.send(`Subtract = ${subtract.toString()}`);
};

module.exports.multiply = (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let multiply = n1 * n2;
  res.send(`Product = ${multiply.toString()}`);
};

module.exports.divide = (req, res) => {
  //   console.log(req.body.num1);  //34
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let result = n1 / n2;
  res.send(`Quotient = ${result.toString()}`);
};
