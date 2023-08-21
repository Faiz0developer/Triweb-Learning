let myUser = null;
const red_block = document.getElementById("red-block");
const green_block = document.getElementById("green-block");
const blue_block = document.getElementById("blue-block");
const yellow_block = document.getElementById("yellow-block");

const inputPro = document.getElementById("pro-user");
const buttons = document.querySelector(".button-div");

buttons.addEventListener("click", function (e) {
  const addBtn = e.target.closest(".btn-add");
  const deleteBtn = e.target.closest(".btn-delete");
  const redButton = e.target.closest(".move-to-red");
  const greenButton = e.target.closest(".move-to-green");
  const blueButton = e.target.closest(".move-to-blue");
  const yellowButton = e.target.closest(".move-to-yellow");

  if (addBtn) {
    if (myUser === null && inputPro.value !== "") {
      myUser = document.createElement("h1");
      myUser.innerText = inputPro.value;
      myUser.setAttribute("id", "my_user");
      myUser.setAttribute("class", "my_user");
      red_block.append(myUser);
      inputPro.disabled = true;
    }
  } else if (deleteBtn) {
    if (myUser !== null) {
      myUser.remove();
      inputPro.disabled = false;
      inputPro.value = "";
      myUser = null;
    }
  } else if (redButton) {
    if (myUser !== null) red_block.append(myUser);
  } else if (greenButton) {
    if (myUser !== null) green_block.append(myUser);
  } else if (blueButton) {
    if (myUser !== null) blue_block.append(myUser);
  } else if (yellowButton) {
    if (myUser !== null) yellow_block.append(myUser);
  } else return;
});
