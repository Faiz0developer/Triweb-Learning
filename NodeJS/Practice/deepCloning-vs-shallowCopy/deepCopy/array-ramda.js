const R = require('ramda')
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const newArr = R.clone(arr);

console.log('Before - arr', arr)         
console.log('Before - copyArr', newArr)  





arr[0][0]=8

console.log('After - arr', arr)      
console.log('After - copyArr', newArr)  

