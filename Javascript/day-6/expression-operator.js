let x = 5;
x = 5 + 3 * 2 - 1 / 1;

//assignment operator
let y = 5;
const x1 = "Faizan";

let n = (y = x);
let n1 = (y = x);

//arithmatic operators
let z1 = 5 + 5; //add
console.log(z1);
let z2 = 5 - 2; //subtract
console.log(z2);
let z3 = 5 * 2; //multiply
console.log(z3);
let z4 = 6 / 2; //divide
console.log(z4);
let z5 = 5 % 2; //remainder /modulus
console.log(z5);
let z6 = 5 ** 2; //25  //power
console.log(z6);

//  let n2 = n2+2
let n2 = 1;
n2 += 2;

//relational operator
if (x > 2) {
}

//logical operator
if (x > 2 && y > 4) {
  console.log("and");
} // and

if (x > 2 || y < 4) {
  console.log("or");
} //or

//short-circuit evaluation
if (flase && x > 2) {
  console.log(
    "AND operator - second operand will not be evaluate if first operand is false "
  );
}

if (true || x > 2) {
  console.log(
    "OR operator - second operand will not be evaluate if first operand is true "
  );
}

//string operator
let a1 = "qwer";
let a2 = "asdfg";
console.log(a1 + b1); //concate  qwerasdfg
