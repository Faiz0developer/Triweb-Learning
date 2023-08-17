function recurssionFunction(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  recurssionFunction(num);
}
recurssionFunction(6);

// 3 way ore method of recurssion

// Method-1
function recurssionFunctionMethod1(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  recurssionFunctionMethod1(num);
}
recurssionFunctionMethod1(5);

// Method-2
const printRecurssion = function recurssionFunctionMethod2(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  recurssionFunctionMethod2(num);
};
//   recurssionFunctionMethod2()  error

printRecurssion(5);

// Method-3
const printRecurssion1 = function recurssionFunctionMethod3(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  num--;
  arguments.callee(num);
};
printRecurssion1(5);
