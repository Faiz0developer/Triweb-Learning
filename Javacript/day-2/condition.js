function validateUser(name, password) {
  if (name === "") {
    console.log("Invaid user name");
    return;
  } else if (password === "" || password.length < 8) {
    console.log("Invalid password");
    return;
  }

  console.log("Yes successfully validated");
}

let userName = "Faizan";
let userPassword = "ee33jdjwkrj";
validateUser(userName, userPassword);
