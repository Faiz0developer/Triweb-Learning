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
