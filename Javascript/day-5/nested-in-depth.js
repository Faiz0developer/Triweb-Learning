function getFunction0(num) {
  function square0() {
    console.log(num * num);
  }
  square0();
}
getFunction0(5);

function getFunction(num) {
  function square() {
    return num * num;
  }
  let sqr = square();
  console.log(sqr);
}
getFunction(5);

function getFunction1(num) {
  function square1() {
    return num * num;
  }
  let sqr = square1();
  return sqr;
}

const mySqr = getFunction1(5);
console.log(mySqr);
