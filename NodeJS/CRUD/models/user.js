const db = require("../util/database");

module.exports.insert = async (userData) => {
  let id = 0;
  try {
    let query =
      "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    let result = await db.execute(query, [
      userData.name,
      userData.email,
      userData.password,
      userData.remarks,
    ]);
    id = result[0].insertId;
  } catch (error) {
    console.log(error);
  }
  return id;
};

module.exports.get = async (userData) => {
  let returnData = "";
  try {
    let query = "SELECT * FROM `users` WHERE id=?";
    let result = await db.execute(query, [userData.id]);
    returnData = result[0][0];
  } catch (error) {
    console.log(error);
  }
  return returnData;
};

module.exports.update = async (userData) => {
  try {
    let query = "UPDATE `users` SET `password`=? WHERE id=?";
    await db.execute(query, [userData.password, userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.delete = async (userData) => {
  try {
    let query = "DELETE FROM `users` WHERE id=?";
    await db.execute(query, [userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
