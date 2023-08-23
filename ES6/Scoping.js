// Scoping

//console.log(a);   // ReferenceError: Cannot access 'a' before initialization
// let a = 5;

// Block scope variation -->> let and const are block scope
{
  var b = 5;
  let c = 10;
  const d = 11;
}

console.log(b); //5
//console.log(c);   //ReferenceError: c is not defined
//console.log(d);     //ReferenceError: d is not defined

// block function scope
function xyz() {
  const a = 3;
  let b = 10;
}

//console.log(a);     //ReferenceError: a is not defined
//console.log(b);      //ReferenceError: b is not defined
