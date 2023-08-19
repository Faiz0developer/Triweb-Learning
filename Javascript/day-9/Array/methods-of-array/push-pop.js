let arr = ['a','b','c',"d"];
let arr1 = [1,2,3,4,5];

// push -> It added element in end of array. It manuplate the array and returns index of array.
let l = arr.push('e')
console.log(l);  //5
console.log(arr)   // ['a', 'b', 'c', 'd', 'e']


console.log('**********pop************');
// pop -> It delet last element of array. It manuplate the array and returns the deleted element.
let l1 = arr.pop()
console.log(l1);  //e
console.log(arr)   // ['a', 'b', 'c', 'd']