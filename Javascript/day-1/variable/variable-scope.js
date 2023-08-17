// var is not block scope variable
// let and const are block scope variable

if (true) {
  var x = 5;
}
console.log(x); //x = 5

if (true) {
  let y = 5;
}
console.log(y); //Uncaught Reference error: y is not defined
