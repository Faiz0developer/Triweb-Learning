const firstName = document.getElementById("firstName");
const firstNameContainer = document.querySelector(".firstNameContainer");

const lastName = document.getElementById("lastName");
const lastNameContainer = document.querySelector(".lastNameContainer");

const email = document.getElementById("email");
const emailContainer = document.querySelector(".emailContainer");

const contact = document.getElementById("contact");
const contactContainer = document.querySelector(".contactContainer");

const dob = document.getElementById("dob");
const dobContainer = document.querySelector(".dobContainer");

const age = document.getElementById("age");
const ageContainer = document.querySelector(".ageContainer");

const resume = document.getElementById("resume");
const resuemFileContainer = document.querySelector(".resuemFileContainer");

const btn = document.getElementById("btn");

const errorMessage = document.createElement("p");

function myErrorMessage(input, container, message) {
  input.setAttribute("class", "error");
  errorMessage.innerText = message;
  errorMessage.setAttribute("class", "message");
  container.append(errorMessage);
  setTimeout(() => {
    input.classList.remove("error");
    errorMessage.remove();
  }, 3000);
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (firstName.value === "") {
    myErrorMessage(firstName, firstNameContainer, "Please enter First Name");
  } else if (lastName.value === "") {
    myErrorMessage(lastName, lastNameContainer, "Please enter Last Name");
  } else if (email.value === "" || !email.value.includes("@")) {
    myErrorMessage(email, emailContainer, "Please enter valid email");
  } else if (contact.value === "" || contact.value.length < 10) {
    myErrorMessage(contact, contactContainer, "Please enter valid contact");
  } else if (dob.value === "") {
    myErrorMessage(dob, dobContainer, "Please enter valid birth information");
  } else if (age.value === "") {
    myErrorMessage(age, ageContainer, "Please enter valid age");
  } else if (resume.value === "") {
    myErrorMessage(resume, resuemFileContainer, "Please select a file");
  } else {
    alert("You have been register successfully");
  }
});
