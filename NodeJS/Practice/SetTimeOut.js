// setTimeout

// Its callback is place in the 'TIMER QUEUE in the next cycle of event loop
// In first cycle of event loop its callback get register
// TIMER QUEUE occurs before than the CHECK QUEUE

const addTwoNum = (desp,n1,n2)=> {
    console.log(desp , n1+n2)
}

setImmediate(() => {
    addTwoNum('setImmediate', 2,4)
})

setTimeout(() => {
    addTwoNum('setTimeout', 2,4)
},0)

addTwoNum('Direct',2,4)