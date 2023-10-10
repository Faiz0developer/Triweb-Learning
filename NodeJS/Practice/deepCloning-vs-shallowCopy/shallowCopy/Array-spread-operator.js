const arr = [1,2,3]

const newArr = [...arr];

console.log('Before - arr', arr)         //Before - arr [ 1, 2, 3 ]
console.log('Before - copyArr', newArr)  // Before - copyArr [ 1, 2, 3 ]





arr[0]=8

console.log('After - arr', arr)         //After - arr [ 8, 2, 3 ]
console.log('After - copyArr', newArr)  //After - copyArr [ 1, 2, 3 ]

