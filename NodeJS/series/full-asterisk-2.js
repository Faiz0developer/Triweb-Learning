const printAsterisk = (howMAnyTimes) => {
  let j = 1;
  while (j <= howMAnyTimes) {
    console.log("*");
    j++;
  }
};

for (i = 1; i <= 5; i++) {
  printAsterisk(i);
  console.log("\n");
}

i -= 2;
while (i >= 1) {
  printAsterisk(i);
  console.log("\n");
  i -= 1;
}
