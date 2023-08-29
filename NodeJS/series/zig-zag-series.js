let start = 1;
let occurence = 10;
let gap = 3;
let i = 1;
let val = 1;

while (i <= occurence) {
  let j = 1;
  while (j <= val) {
    console.log("*");
    j++;
  }
  console.log("\n");
  val += gap;
  if (gap === 3) gap = -1;
  else gap = 3;
  i++;
}
