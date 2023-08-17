// Block Statement

if (true) {
  let x = 5;
  console.log(x);
}

// falsy values:
// 1: false
if (false) {
  console.log("fasle value");
} else {
  console.log("else condition");
}

// 2: undefined
let x;
if (x) {
  console.log("fasle value");
} else {
  console.log("else condition");
}

// 3: null
if (null) {
  console.log("fasle value");
} else {
  console.log("else condition");
}

// 4: NaN
if (NaN) {
  console.log("fasle value");
} else {
  console.log("else conddotion");
}

// 5: empty string ""
if ("") {
  console.log("fasle value");
} else {
  console.log("else conddotion");
}

if (NaN == false) {
  console.log("It was falsy value not false");
} else {
  console.log("surprise");
}

if (NaN === false) {
  console.log("It was falsy value not false");
} else {
  console.log("surprise");
}

if (0 === false) {
  console.log("It was falsy value not false");
} else {
  console.log("surprise");
}
