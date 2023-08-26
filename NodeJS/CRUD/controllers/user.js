const userModel = require("../models/user");

//registration
module.exports.register = async (req, res) => {
  const insertedId = await userModel.insert(req.body);
  console.log("controller", insertedId);
  if (insertedId > 0) {
    res.send({ status: "success", data: { id: insertedId } });
  } else {
    res.send({ status: "error", message: "User registration failed" });
  }
};

//get
module.exports.get = async (req, res) => {
  let data = await userModel.get(req.body);
  if (data) {
    res.send({ status: "succes", data: data });
  } else {
    res.send({ status: "error", message: "User not found" });
  }
};

//update
module.exports.update = async (req, res) => {
  let status = await userModel.update(req.body);
  if (status) {
    res.send({ status: "Success", message: "Password change successfully" });
  } else {
    res.send({ status: "error", message: "Password do not change " });
  }
};

//delete
module.exports.delete = async (req, res) => {
  let status = await userModel.delete(req.body);
  if (status) {
    res.send({ status: "Success", message: "User deleted" });
  } else {
    res.send({ status: "error", message: "User not deleted" });
  }
};
