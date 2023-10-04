// Array Destructuring
const arr = [52,34,71,84,96,78,93,98,60]

const [sub1Marks,sub2Marks,sub3Marks,sub4Marks,sub5Marks, ...otherMarks] = arr

console.log(sub1Marks)
console.log(sub2Marks)
console.log(sub3Marks)
console.log(sub4Marks)
console.log(sub5Marks)
console.log(otherMarks)

// Object Destructuring

const obj = {
    'uName':'Faizan',
    'mobile':8348748,
    'address':'Ramnagar'
}

const {uName, mobile:phone} = obj
console.log(uName, "and number = ", phone)