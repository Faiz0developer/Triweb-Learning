function validateUser(name, password) {
  try {
    if (name.length < 5) {
      throw new Error("User name is too short");
    }

    if (password.length < 6) {
      throw new Error("Invalid password");
    }
    console.log("working");

    return "in try";
  } catch (err) {
    console.log(err);
    return "fail in catch";
  } finally {
    console.log("inside finally block");
    return "from finally";
  }
}

let name = "Faizan";
let password = "234362565346";
let msg = validateUser(name, password);
console.log("user", msg);
