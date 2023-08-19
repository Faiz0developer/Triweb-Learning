// forEach --->>  loop over array and retrun elements
let arr = ['Akarsh','Arush',"Azhar",'Faizan'];

arr.forEach(ele => console.log(ele))    //Akarsh Arush Azhar Faizan

console.log('***********MAP***************')
// map --->> loop over array and return new array 
const arr1 = [1,2,3,4,5,6,7] 
const arrMAp = arr1.map(ele => ele*2)
console.log(arrMAp)   //[2, 4, 6, 8, 10, 12, 14]


console.log('***********FILTER***************')
// filter --->> loop over array and filter the array according to condition. Return new array(true value of filter )

const arr2 = [1,2,3,4,5,6,7] 
const arrFilter = arr2.filter(ele => ele%2===0)
console.log(arrFilter)  //[2,4,6]
const arrFilter1 = arr2.filter(ele => ele%2!==0)
console.log(arrFilter1)   // [1,3,5,7]
