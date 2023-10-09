// yield -> It is used to pause and resume the generator function.

// function getNum(index){
// while(index<5){
//   return index;
//         index++
//     }
// }

// let it = getNum(0)
// console.log(it)  // 0
// console.log(it)  // 0
// console.log(it)  // 0

function* getNum(index) {
  while (index < 5) {
    yield index;
    index++;
  }
}

let it = getNum(0)
console.log(it.next())  //{ value: 0, done: false }
console.log(it.next())  //{ value: 1, done: false }
console.log(it.next())  //{ value: 2, done: false }
console.log(it.next())  //{ value: 3, done: false }
console.log(it.next())  //{ value: 4, done: false }
console.log(it.next())  //{ value: undefined, done: true }