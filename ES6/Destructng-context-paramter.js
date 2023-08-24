// Array case
function getData([name, age]) {
  console.log(name, age); //Faizan 20
}

getData(["Faizan", 20]);

//Object case1
function getDataObj({ name, age }) {
  console.log(name, age); //Faizan 20
}

getDataObj({ name: "Faizan", age: 20 });

//Object case2
function getDataObj1({ name: eName, age: eAge }) {
  console.log(eName, eAge); //Faizan 20
}

getDataObj1({ name: "Faizan", age: 20 });

// Fail soft destructing
let arr5 = [1, 2];
let [a = 4, b = 10, c = 20, d] = arr5;
console.log(a, b, c, d); //1 2 20 undefined
