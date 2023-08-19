let arr = ['a','b','c',"d"];
let arr1 = [1,2,3,4,5];

// shift -> It delete first element of array. It manuplate the array and returns the delete element.
let l = arr.shift()
console.log(l);  // a
console.log(arr)   // ['b', 'c', 'd', 'e']


console.log('**********unshift************');
// unshift -> It add element in starting of array. It manuplate the array and returns index of array.
let l1 = arr.unshift('a')
console.log(l1);  // 4
console.log(arr)   // ['a', 'b', 'c', 'd']