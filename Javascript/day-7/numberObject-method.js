let x = 3 / "r";
console.log(x); //Nan

if (!Number.isNaN(x)) {
  console.log("x is a number");
} else {
  console.log("x is a Nan"); //x is a Nan
}

let xSafe0 = 9007199254740991;

console.log(Number.isSafeInteger(xSafe0)); //true

let xSafe1 = 9007199254740992;

console.log(Number.isSafeInteger(xSafe1)); //false

let n1 = "1";
let n2 = "1.4";
console.log(Number.parseInt(n1)); //1
console.log(Number.parseFloat(n2)); //1.4

let n3 = Number.parseFloat(n2);

console.log(typeof n3); //number

//convert to exponential

let num1 = 345000000;
let num2 = num1.toExponential();
console.log(num2); //3.45e+8

//to fix decimal degits

let num3 = Number(2.452309876).toFixed(2);
console.log(num3); //2.45

let num = 23.45621655;
console.log(num.toFixed(4));
