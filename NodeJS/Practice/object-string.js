//conversion from object to string and vice versa

const studentObj = {
    sName:'Aman',
    friendName:'Mohit',
    class: 12
}

console.log(studentObj)
console.log(studentObj.sName)

// conversion of object to string
const stringFromObject = JSON.stringify(studentObj)
console.log(stringFromObject)
console.log(stringFromObject.sName)  //undefined

// conversion of string to object
const objectFromString = JSON.parse(stringFromObject)
console.log(objectFromString)
console.log(objectFromString.sName)