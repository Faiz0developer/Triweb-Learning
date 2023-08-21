// rest Operator
const arr3 = [1,2,3,4,5,6,7]
const [h,...rest] = arr3
console.log(h) //1
console.log('others',rest)  //[2,3,4,5,6,7]


console.log('***************SPREAD******************')
// spread Operator
const arr  = [1,2,3,4,5,4,3,6,7,8,4,3,4,4]
const arr1 = [...arr]  // const arr1 = arr
console.log(arr1) //[1,2,3,4,5,6,7,8,3,4,4]
const [a,b,c,d,e,f,g] = [...arr]
console.log(a,b,c,d,e,f,g)  //1 2 3 4 5 4 3 
console.log(...arr)  //1 2 3 4 5 6 7 8 3 4 4


function restAndSpread(...rest){
    console.log(rest)
    rest.forEach(ele => console.log(ele))

    // spread
    console.log(...rest)
    const [a,b] = [...rest]
    const [c,d] = rest
    console.log(a,b)
    console.log(c,d)
}

restAndSpread(23,33,4,7,68,35,3,5,78,3,74)