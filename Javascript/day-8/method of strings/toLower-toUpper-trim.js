const str = "Hi I am Here ";

//toLowerCase
const lowerStr = str.toLowerCase();
console.log(lowerStr);  //hi i am here

//toUpperCase
const upperStr = str.toUpperCase();
console.log(upperStr);  //HI I AM HERE

//trim
console.log('length without trim',str.length); //13
strTrim = str.trim();
console.log('length with trim',strTrim.length); //12   //trim remove the space in ending or starting