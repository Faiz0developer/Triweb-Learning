
// chartAt()
const str = String('Hi I am here');
const firstChar = str.charAt(0);

console.log(firstChar);   // H
console.log(str[0])    // H


// indexOf()   ->  case sensetive

const indexOfStr = str.indexOf('I')     
console.log('Index of I', indexOfStr)

const indexOfStr1 = str.indexOf('i')
console.log('Index of i', indexOfStr1)

const indexOfe = str.indexOf('e')
console.log('Index of e', indexOfe)  // 9


// lastIndexOf() -> return index of last one of same element 
const lastIndexOfe = str.lastIndexOf('e')
console.log('Index of e', lastIndexOfe)    //11