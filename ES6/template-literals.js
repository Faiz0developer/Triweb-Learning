// template literals

function printData(name, age) {
  let toPrint = `Student's name is ${name}
and age is ${age}`;
  console.log(toPrint);
}

let sName = "faizan";
let sAge = 10;
printData(sName, sAge);

// custom interpolation
function something(string, name, age) {
  console.log("STRING", string);
  console.log("NAME", name);
  console.log("AGE", age);
}

let s1Name = "Aman";
let s1Age = 30;
something`Student's name is ${s1Name} and age is ${s1Age}`;

//(3) ["Student's name is ", ' and age is ', '', raw: Array(3)]
//NAME Aman
//AGE 30

// Raw string templte literal

let str = `age is \n ${40}`;

console.log(str == "age is \n ${40}");
console.log(String.raw`age is \n ${40}` == "age is \\n ${40}");
