// pattern -->>
/*
 *
 **
 ***
 ****
 *****
 */
//1)
for (i = 0; i < 5; i++) {
  for (j = 0; j <= 4; j++) {
    console.log("*");
    if (j === i) break;
  }
  console.log("\n");
}

//2)
for (i = 0; i < 5; i++) {
  j = 0;
  while (j <= i) {
    console.log("*");
    j += 1;
  }
  console.log("\n");
}
