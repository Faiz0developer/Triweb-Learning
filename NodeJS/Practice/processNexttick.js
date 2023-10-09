// process.nextTick
// It puts  its callback at the front of the event loop
// Execute after the code currently being executed,but before IO EVENTS, or TIMERS

const addTwoNum = (desp,n1,n2)=> {
    console.log(desp , n1+n2)
}

setImmediate(() => {
    addTwoNum('setImmediate', 2,4)
})

setTimeout(() => {
    addTwoNum('setTimeout', 2,4)
},0)

process.nextTick(()=> {
    addTwoNum('nextTick',3,4)
})

addTwoNum('Direct',2,4)