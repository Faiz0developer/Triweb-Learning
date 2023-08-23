function xyz() {
  console.log("Normal function - ", this);
}
xyz();

console.log("window - ", this);

let arr = [1, 2, 3, 4, 5, 6];

const arrMap = arr.map(function (element) {
  console.log(element);
});

//arrow function ->>
const arrowFunction = () => {
  console.log("Arrow function -", this);
};
arrowFunction();

const arrowMap = arr.map((ele) => ele * 2);
console.log(arrowMap);

const objArrow = (name, age) => ({ uName: name, uAge: age });
console.log(objArrow("faizan", 20));

arr.forEach((ele) => {
  console.log(ele);
});
