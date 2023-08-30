const { addUSerToDB } = require("../models/user");

const registerUser = (req, res) => {
  //fetch data from request
  //validation
  //normalize
  const userName = "Faizan";
  const password = "11111";
  const result = addUSerToDB(userName, password);
  res.send(result);
};

module.exports = { registerUser };
