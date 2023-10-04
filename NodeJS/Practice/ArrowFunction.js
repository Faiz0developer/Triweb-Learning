const addTwoNum = (n1,n2) => {
    return n1+n2
}

const hiMyName = uName => {
    return `Hi ${uName}`
}

const helloMyName = uName => `Hello ${uName}`

console.log(addTwoNum(2,3))
console.log(hiMyName('Faizan'))
console.log(helloMyName('Aman'))

const isThis = () =>{
    console.log(this)
}

console.log(this)

isThis()