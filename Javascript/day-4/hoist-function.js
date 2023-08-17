// function declaration
// we can all function declaration before its initialization without error bacause of hoisting. Hoisting put the function top of the file during parsing
console.log(getNum); // function:getNum
console.log(getNum()); // 3

function getNum() {
  return 3;
}

console.log("***************************************");

// function expression
// only variable get hosited not the function (variable's value). So we can't call function exprssion before its initialization

//  using var
console.log(getNum1); //undefiend
// console.log(getNum1()); //typeError: getNum1 is not a functions (bcz getnum1 is variable (var) which is undefined)

var getNum1 = function () {
  return 3;
};

//  using const
console.log(getNum2); //undefiend
console.log(getNum2()); //eferenceError: Cannot access 'getNum2' before initialization( bcz const and let do not hoisted,not variable and not value as well)

const getNum2 = function () {
  return 3;
};
