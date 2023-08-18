let x = 9;

let y;

if (x % 3 === 0) {
  y = x;
} else {
  y = 0;
}

console.log("Using if", y);

console.log("*********TERNARY**************");

let z = x % 3 === 0 ? x : 0;
console.log("Using ternary", z);
