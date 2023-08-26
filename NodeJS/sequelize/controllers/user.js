const userModel = require("../models/user");

module.exports.register = async (req, res) => {
  try {
    let result = await userModel.create(req.body);
    res.send({ status: "success", data: { id: result.dataValues.id } });
  } catch (err) {
    res.send({ status: "error", message: "User registration failed" });
  }
};

module.exports.get = async (req, res) => {
  try {
    let data = await userModel.findByPk(req.body.id);
    res.send({ status: "success", data: data });
  } catch (err) {
    res.send({ status: "error", message: "User Not found" });
  }
};

module.exports.update = async (req, res) => {
  try {
    let user = await userModel.findByPk(req.body.id);
    user.password = req.body.password;
    await user.save();
    res.send({ status: "success", message: "Password change successfully" });
  } catch (err) {
    res.send({ status: "error", message: "Password not change" });
  }
};

module.exports.delete = async (req, res) => {
  try {
    let user = await userModel.findByPk(req.body.id);
    await user.destroy();
    res.send({ status: "success", message: "User deleted!" });
  } catch (err) {
    res.send({ status: "error", message: "User not deleted" });
  }
};
