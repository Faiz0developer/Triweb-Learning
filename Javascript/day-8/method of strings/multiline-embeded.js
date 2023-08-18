const str = "Hi i am here. \n It is raining";

console.log('without template literal -',str);


// multline
const str1 = `Hi i am here. 
It is raining`;
console.log('multiline with template literal -',str1)

// embeded
const atmosphere = "raining";
const str2 = `Hi i am here.
 It is ${atmosphere} today`;

 console.log('embeded with template literal - ',str2);