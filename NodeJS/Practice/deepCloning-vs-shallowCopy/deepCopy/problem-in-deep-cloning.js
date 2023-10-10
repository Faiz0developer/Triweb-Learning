const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const newArr = [...arr];

console.log('Before - arr', arr)          //Before - arr [ [ 8, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log('Before - copyArr', newArr)   //Before - copyArr [ [ 8, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]





arr[0][0]=8

// console.log('After - arr', arr)         After - arr [ [ 8, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log('After - copyArr', newArr)  // After - copyArr [ [ 8, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

