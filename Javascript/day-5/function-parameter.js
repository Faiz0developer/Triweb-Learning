// 1) Function parameter

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

addTwoNum(2, 5);

console.log("******************ARGUEMENT***********************");

//2  Arguement

function addTwoNum1() {
  //   console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const ele = arguments[i];
    // console.log(ele);
    sum += ele;
  }
  console.log(sum);
}

addTwoNum1(12, 34, 56, 2, 6);
addTwoNum1(2, 6);
addTwoNum1(12, 34, 56, 2, 6, 23, 78, 2, 7, 34);

console.log("*****************************************");

// convert arguement to an array
function addTwoNum2() {
  //   arguments.forEach((ele) => console.log(ele));     typeError: forEach is not function

  let arr = Array.from(arguments); //Array.from converts array like to an array
  let sum = 0;

  arr.forEach((ele) => (sum = sum + ele));

  console.log(sum);
}

addTwoNum2(12, 34, 56, 2, 6);
addTwoNum2(2, 6);
addTwoNum2(12, 34, 56, 2, 6, 23, 78, 2, 7, 34);

console.log("********************REST*********************");

// 3) REST paramter
function addNum(multiplier, ...rest) {
  //...rest is REST parameter
  //   console.log(rest);    [4,5,6]

  rest.forEach((ele) => console.log(multiplier * ele));
}

addNum(2, 4, 5, 6);
