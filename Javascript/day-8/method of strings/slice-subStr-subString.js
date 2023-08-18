const str = 'Hi I am here';

// slice(a,b)  // a and b both parameter are index and b is excluded
const sliceStr = str.slice(0,2)
console.log(sliceStr)

// subString(a,b)   // a and b both parameter are index and b is excluded
const SubStringStr = str.substring(0,2)
console.log(SubStringStr)

//  subStr(a,b)   // a is index and b is length
const SubStrStr = str.substr(0,2)
console.log(SubStrStr)


// difference between substr and substring

const str1 = 'Faizan'   
const SubStringStr1 = str1.substring(1,2)     // second parameter is index here
console.log(SubStringStr1)    // a

//  subStr()
const SubStrStr1 = str1.substr(1,2)     // second parameter is length here
console.log(SubStrStr1)   //ai 