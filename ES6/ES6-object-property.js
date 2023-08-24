// shorthand property
let Uname = "Faizan";
let Uage = 10;

let student = {
  Uname,
  Uage,
};

console.log(student);

// computed property

let key = "new_key";

function func() {
  return "Somevalues";
}

let obj = {
  sName: "Faizan",
  [key]: "Yes",
};

console.log(obj); //{sName: 'Faizan', new_key: 'Yes'}

let obj1 = {
  sName: "Faizan",
  [key + 2 + func()]: "Yes",
};

console.log(obj1); // {sName: 'Faizan', new_key2Somevalues: 'Yes'}

// method shorcut in objects
let obj2 = {
  func1() {
    return "Faizan";
  },
};

console.log(obj2);
