function addTwoNumbers(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}

//   calling a function
addTwoNumbers(25, 30);

// pass by value arguement - primivite values are pass to the arguement like number,stirng etc
function increaseByOne(num) {
  num = num + 1;
  console.log(`Updated value - ${num}`);
}

let a = 3;
increaseByOne(a);
console.log("a =", a);

// pass by reference arguement - objects like object, array etc are pass to the arguement
function updateName(student) {
  student.name = "Hi " + student.name;
  console.log(student);
}

let objS = { name: "Faizan" };
updateName(objS);
console.log("Old object is", objS); // 'Hi Faizan'  not 'Faizan

function addArray(arr) {
  arr[0] = arr[0] + 1;
  arr[1] = arr[1] + 1;
  arr[2] = arr[2] + 1;
  arr[3] = arr[3] + 1;
}

let arr = [1, 2, 3, 4];
addArray(arr);
console.log("old arrayy is", arr);
