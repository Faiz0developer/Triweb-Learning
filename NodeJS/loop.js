const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for-of
for (let ele of arr) {
  if (ele % 2 === 0) {
    console.log(`${ele} is even number`);
  } else {
    console.log(`${ele} is odd number`);
  }
}

//for-in
console.log("for in loop");
for (let i in arr) {
  if (arr[i] % 2 === 0) {
    console.log(`${arr[i]} is even number`);
  } else {
    console.log(`${arr[i]} is odd number`);
  }
}

// while
console.log("whle loop");
let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}
