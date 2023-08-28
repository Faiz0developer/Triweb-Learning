// break with single loop
for (let n = 1; n <= 10; n++) {
  console.log(n);
  if (n === 6) {
    break;
  }
}

// break with nested loops
console.log("**************************************************************");

// break in inner loop
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    console.log(i, j);
    if (j === 3) {
      break;
    }
  }
}
