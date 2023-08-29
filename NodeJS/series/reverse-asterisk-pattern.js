/*

*****
****
***
**
*

*/

// 1)
for (i = 5; i > 0; i--) {
  j = 1;
  while (j <= i) {
    console.log("*");
    j++;
  }
  console.log("\n");
}

// 2)
for (i = 5; i > 0; i--) {
  for (j = 1; j <= 5; j++) {
    console.log("*");
    if (j === i) break;
  }
  console.log("\n");
}
