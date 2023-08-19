// every -->>  return true or false. If condition fit for elements of array only then it will return true,
// if any elemnt of arrat do not match the condition then return false
const arr = [1,3,5,7];

let status1 = arr.every(e => e%2!==0)
console.log(status1)   //true

const arr1 = [1,3,5,7,4];
let status2 = arr1.every(e => e%2!==0)
console.log(status2)  //false


console.log('***********SOME**************')
// some  -->> Return true or false. If any elemnt match the condition, it return true. To return false all elements 
// must not match the condition
const arr3 = [1,3,5,7];

let status3 = arr3.some(e => e%2!==0)
console.log(status3)   //true

const arr5 = [7,32,4,6,4];
let status4 = arr5.some(e => e%2!==0)
console.log(status4)  //true


const arr6 = [10,32,4,6,4];
let status5 = arr6.some(e => e%2!==0)
console.log(status5)  //false


console.log('************REDUCE*************')
//reduce -->> it return a single value. Propose of reduce is reducing the list of items down to a single value

let a = [10,20,30]
let total = a.reduce((acc,curr ) => {
    return acc + curr
},0)
console.log(total)    //60