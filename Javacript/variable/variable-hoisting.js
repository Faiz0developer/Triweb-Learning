var a;
console.log("value of a is " + a); //value of a is undefined

console.log("value of b is " + b); //value of b is undefined
var b;

// console.log("value of c is "+ c); //Uncaught reference error: c is not defined

var p = 7;
console.log("value of p is " + p); //p=7

console.log("value of q is " + q); // value of q is undefined
var q = 8;

let x;

console.log("value of x is " + x); //The value of x is undefined

console.log("value of y is " + y); //Uncaught reference error: y is not defined
let y;

// variable hositing means when code start parsing, variables declared only with 'var' reach to the top of code. While not the case with teh variables starting with 'let' and 'const.
// value do not hoist of variables.
