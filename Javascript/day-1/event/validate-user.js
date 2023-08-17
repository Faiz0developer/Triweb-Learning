var userName = prompt("Enter your name");
var h1Tag = document.querySelector("h1");

function setUserName(userName) {
  if (userName === null || userName.length === 0) {
    alert("Please enter your name");
  } else {
    h1Tag.textContent = userName;
  }
}

setUserName(userName);
