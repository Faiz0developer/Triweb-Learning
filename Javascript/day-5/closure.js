//  javascript allows the nesting of functions and inner funtion has full access to all variables and
// methods of outer function. This is called closure.
// Implies that functions preserve the variables and methods of its parent at its birth.
// new call to function, created a new closure.

function getProductFunction(multiplier) {
  function multiply(num) {
    return multiplier * num;
  }

  return multiply(3);
}

const res = getProductFunction(4);
console.log(res);

function getProductFunction1(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}

const double = getProductFunction1(2);
const res1 = double(4);
console.log(res1);

const triple = getProductFunction1(3);
const res2 = triple(4);
console.log(res2);
