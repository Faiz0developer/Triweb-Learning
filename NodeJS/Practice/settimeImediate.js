// SetImmediate

// Not immediate as its name
// Its callback is place in the 'CHECK QUEUE in the next cycle of event loop
// In first cycle of event loop its callback get register
// CHECK QUEUE occurs later than the TIMER QUEUE

let a = 1;
let b = 2;

function add(n1,n2){
    console.log(n1+n2)
}

setImmediate(() => {
    add(a,b)
})

console.log("Inside event loop 1")