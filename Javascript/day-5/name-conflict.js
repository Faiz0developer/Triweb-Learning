// function search varible first in its local scope, if do not find then look into parant scope

function outer(num) {
  let x = 5;

  function inner(x) {
    // local get preference
    let num = 10;
    console.log(x); // 3, not 5
    console.log(num); // 10, not 8
  }

  inner(3);
}

outer(8);
