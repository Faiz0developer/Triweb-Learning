let i = 0;
let count = 0;
while (i < 10) {
  if (i % 2 === 0) {
    i++;
    count++;
    continue;
  }
  console.log(i); //1,3,5,7,9
  i++;
}

console.log("After loop");
console.log(`Number of continue in loop ${count}`); //5
