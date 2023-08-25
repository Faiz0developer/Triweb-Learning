const db = require("../util/database");

module.exports.insert = (userData) => {
  //   console.log(userData.name);

  let query =
    "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";

  //execute
  db.execute(query, [
    userData.name,
    userData.email,
    userData.password,
    userData.remarks,
  ]);

  //return result
  return true;
};
