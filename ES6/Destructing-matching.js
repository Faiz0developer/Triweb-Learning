//1)  Array Matching
let arr = [1, 2, 3, 4];
let [a, b] = arr;
console.log("First Element a - ", a); //First Element a - 1
console.log("Second Element b -", b); //second Element b - 1
//swapping
[b, a] = [a, b];

console.log("arr is -", arr);
console.log("after swapiing a  - ", a); //after swapiing a  -  2
console.log("after swapiing b - ", b); //after swapiing b -  1

//2) a) Object Matching,Shorthand notation
function getStudent() {
  let student = {
    sName: "Faizan",
    sAge: 20,
    level: "MCA",
  };
  return student;
}

let { sName, sAge, level } = getStudent();

console.log(sName, sAge, level); //Faizan 20 MCA

// b) Deep object matching
function getData() {
  let employee = {
    sName: "Aman",
    salary: 200000,
    location: {
      city: "Bangalore",
    },
  };
  return employee;
}

let {
  sName: EmployeeName,
  salary: EmployeeSalary,
  location: { city: EmployeeCity },
} = getData();
console.log(EmployeeName, EmployeeSalary, EmployeeCity); //Aman 200000 Bangalore
