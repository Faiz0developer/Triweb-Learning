//1)match -> It is a string method. It returns an array.
let str = 'Hi I am here. I am atteding a workshop'
let regex = /\w/
console.log(str.match(regex))  //['H', index: 0, input: 'Hi I am here. I am atteding a workshop', groups: undefined]

//2)search -> search is a method os string, not of RegExp class. So we have to make a regex ourself. It returns index 
let regex2 = /\w/g
let  resIndex = str.search(regex2);
console.log(resIndex)    // 0
console.log(str[resIndex])   // H

let regex3 = /[\w\s]/g
let resIndex1 = str.search(regex3);
console.log(resIndex1);   // 0
console.log(str[resIndex1]) //H


let regex4 = /[^\w\s]/g
let resIndex2 = str.search(regex4);
console.log(resIndex2);   // 12
console.log(str[resIndex2])    // .



//  Regex class ->>
//1) Test -> test is a method od RegExp class.It returns true or false.
let regex1 = new RegExp('w');
let testRes = regex1.test(str);
console.log(testRes)   //true

//2) exec -> exec is a method od RegExp class.It returns an array.

var myRe = /d(b+)d/g
var myArray = myRe.exec('cdbbdsfsfw');

console.log(myArray);   //(2) ['dbbd', 'bb', index: 1, input: 'cdbbdsfsfw', groups: undefined]











