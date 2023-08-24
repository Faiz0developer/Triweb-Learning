// converting from string or array like structure to array
//1)string
let str = "Faizan";
let arrStr = Array.from(str);
console.log(arrStr); //['F', 'a', 'i', 'z', 'a', 'n']

// 2)array like structure
function xyz() {
  console.log(arguments);
  let arr1 = Array.from(arguments); //Arguments(3) ['a', 'b', 'c', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(arr1); //(3) ['a', 'b', 'c']
}
xyz("a", "b", "c");

// keys()

let arr = ["a", "b", "c"];
let keys = arr.keys();
console.log(keys); //Array Iterator {}

for (let e of keys) {
  console.log(e); // 0,1,2 (index)
  console.log(arr[e]); //a b c (values)
}

// find() --> return firt element satisfying the condition
let arr2 = [12, 13, 14, 15];
let firstOddNumber = arr2.find((ele) => ele % 2 != 0);
console.log(firstOddNumber); //13

// findIndex() -->return index of firt element satisfying the condition
let arr3 = [12, 13, 14, 15];
let indexOfFirstOdd = arr3.findIndex((val) => val % 2 != 0);
console.log(indexOfFirstOdd); // 1
