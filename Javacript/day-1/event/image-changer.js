let myImage = document.querySelector("img");
let page = document.querySelector("html");

// myImage.addEventListener("click", function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "./event//img-1.jpeg") {
//     myImage.setAttribute("src", "./event//img-2.png");
//   } else {
//     myImage.setAttribute("src", "./event//img-1.jpeg");
//   }
// });

page.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./event//img-1.jpeg") {
    myImage.setAttribute("src", "./event//img-2.png");
  } else {
    myImage.setAttribute("src", "./event//img-1.jpeg");
  }
});
