// find() --> return firt element satisfying the condition
let arr2 = [12, 13, 14, 15];
let firstOddNumber = arr2.find((ele) => ele % 2 != 0);
console.log(firstOddNumber); //13

// findIndex() -->return index of firt element satisfying the condition
let arr3 = [12, 13, 14, 15];
let indexOfFirstOdd = arr3.findIndex((val) => val % 2 != 0);
console.log(indexOfFirstOdd); // 1
