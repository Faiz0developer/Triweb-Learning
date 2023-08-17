//label with break
outer: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, j);
    if (j === 3) {
      break outer; // it will break all loops under label outer
    }
  }
}

console.log("*****************************************");

//label with continue
outer1: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      continue outer1; // it will break all loops under label outer
    }
    console.log(i, j);
  }
}
