// const  --->>>

// can't reassign value to const variable
const a = 5;
console.log(a); // 5
// a = 7;
//console.log(a);  //typeError: Assignment to constant variable.

// Example-2
const obj = { name: "Fazal", age: 20 };

console.log("Before", obj); //Before {name: 'Fazal', age: 20}

// obj = { name: "Amit", age: 23 };
//console.log(obj);  //typeError: Assignment to constant variable.

// can change the value o object or array
obj.name = "Azhar";
obj.age = 23;

console.log("After", obj); //After {name: 'Azhar', age: 23}

const arr = [1, 2, 3, 4, 5, 7, 6];

console.log(arr); //) [1, 2, 3, 4, 5, 7, 6]

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;
console.log(arr); //[10, 20, 30, 40, 50, 7, 6]
