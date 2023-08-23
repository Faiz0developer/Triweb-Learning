function addTwoNumberRest(...num) {
  let sum = 0;
  num.forEach((number) => {
    sum += number;
  });
  return sum;
}

let s1 = addTwoNumberRest(1, 2, 3);
console.log(s1);
let s2 = addTwoNumberRest(1, 2, 3, 4, 5, 6);
console.log(s2);
let s3 = addTwoNumberRest(1, 2, 3, 45, 4, 67, 69);
console.log(s3);

function addTwoNumberRest1(n1, n2, ...num) {
  console.log("n1", n1);
  console.log("n2", n2);
  console.log("Rest", num);
}

addTwoNumberRest1(1, 2, 3, 4, 5, 6, 7, 8);
