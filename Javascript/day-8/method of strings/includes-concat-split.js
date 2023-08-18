
//  includes() -> case sensetive
const str = String('Hi I am here.');

if(str.includes('a')){
    console.log('true')
}else{
    console.log(false)
}


//  concat()
const str1 = 'I am going';
const str2 = str+str1     // + operator concat two or more strings
console.log('conscat using + operator -',str2)

const str3 = str.concat(str1);
console.log('conscat using concat method -',str3)


// split() -> convert string to an array

const cities = String('Nainital, Varanasi, New Delhi, Lucknow')
const cityArr = cities.split(',');
console.log(cityArr)

cityArr.forEach(city => console.log(city))