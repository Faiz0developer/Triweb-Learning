// function-hoisting : normal functions hoist implies function come to the top of code while parsing the code but
// function expression(functioen declared using 'var') do not get hoist but variable hoist to the top.
// function expression(functioen declared using 'let' and const) and variable both do not get hoist.

xyz(); //abc
function xyz() {
  console.log("xyz");
}

pqr(); //Type error: pqr is not a function

var pqr = function () {
  console.log("pqr");
};

fgh(); // Cannot access 'fgh' before initialization

let fgh = function () {
  console.log("gfh");
};
