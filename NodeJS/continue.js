// continue with single loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("***************************************************");

// continue in nested loop

// continue in inner loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      continue;
    }
    console.log(i, j);
  }
}
