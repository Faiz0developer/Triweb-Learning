/* slice(a,b) ---->>>> 
  slice delet the elements according to its arguements a and b. a and b are index.
  from a to b elements will be removed from array (b would be excluded). Slice copy the array and return new array
  .Implies  it does not manipuate the array
  */

let arr = ['a','b','c',"d",'e','f','g'];
let arr1 = arr.slice(1,4);
console.log(arr1);  //['b','c','d']
console.log('Array after slice - ', arr)   //['a','b','c',"d",'e','f','g']


console.log('***********Splice****************')

/* splice(a,b,c) ---->>>> 
  slice delet the elements according to its arguements a and b. a is index, b is length and c is the 
  elemnts that we want to replace from deleted elements.From a to b elements will be removed from array.
  Slice manipuate the array
*/

let arr2 = ['a','b','c',"d",'e','f','g'];
let arr3 = arr2.splice(1,4);
console.log(arr3);  //['b','c','d','e']
console.log('Array after splice - ', arr2)   //['a','f','g']

// replace of elements
let arr4 = ['a','b','c',"d",'e','f','g'];
let arr5 = arr4.splice(1,4,'x',5,10,'w');
console.log(arr5);  //['b','c','d','e']
console.log('Array after splice - ', arr4)   //['a', 'x', 5, 10, 'w', 'f', 'g']


let arr6 = ['a','b','c',"d",'e','f','g'];
let arr7 = arr6.splice(1,1,'x',5,10,'w');
console.log(arr7);  //['b']
console.log('Array after splice - ', arr6)   //['a', 'x', 5, 10, 'w','c ,'d','e','f', 'g']









