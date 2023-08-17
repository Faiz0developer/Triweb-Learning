let declare = "add";

let getNumResult;
if (declare === "add") {
  getNumResult = function (num1, num2) {
    console.log(num1 + num2);
  };
} else {
  getNumResult = function (num1, num2) {
    console.log(num1 - num2);
  };
}

getNumResult(8, 3);
