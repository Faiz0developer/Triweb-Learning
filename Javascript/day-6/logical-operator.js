let x = 113;
let y = 33;
let z = 54;

if (x > y && x < z) {
  console.log("X");
} else if (y > z) {
  console.log("Y");
} else {
  console.log("Z");
}

if (x > y || x < z) {
  console.log("HERE", x);
}
