const obj = {a:1,b:2,c:3}

const newObj = {};

Object.assign(newObj,obj)

console.log('Before - obj', obj)         //Before - obj [ 1, 2, 3 ]
console.log('Before - newObj', newObj)  // Before - newObj [ 1, 2, 3 ]





obj['a']=8

console.log('After - obj', obj)         //After - obj [ 8, 2, 3 ]
console.log('After - newObj', newObj)  //After - newObj [ 1, 2, 3 ]

