// converting from array to Set
let arr = [1,2,3,5,223,2,3];
console.log(arr)
let setFromArray = new Set(arr);
console.log(setFromArray);


// converting from Set to array 

let arrayFromSet = Array.from(setFromArray);
arrayFromSet.push(3);
console.log(arrayFromSet)

// using spread operator

let arrayFromSetUsingSpreadOperator = [...setFromArray]
console.log(arrayFromSetUsingSpreadOperator)

// delete in Set
setFromArray.delete(2)
console.log(setFromArray)

// delete in array

arrayFromSet.splice(arrayFromSet.indexOf(2),1)
console.log(arrayFromSet)

