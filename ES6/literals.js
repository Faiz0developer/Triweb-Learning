//before ES6

let num = parseInt("0111110111", 2);
console.log(num == 503); //true

//after ES6
console.log(0b111110111 == 503); //true
