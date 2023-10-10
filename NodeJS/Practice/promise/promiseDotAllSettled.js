// Promise.allSettled([iterator]) -> Return array of values of all promises whether 
// -> all are rejected 
// -> or all are resolved
// -> or some rejected and some resolved (see output in the bottom)

function func1(){
    return new Promise((res,rej) => {
        res('Function1')
    }) 
}

function func2(){
    return new Promise((res,rej) => {
        rej('Function2')
    }) 
}

function func3(){
    return new Promise((res,rej) => {
        res('Function3')
    }) 
}

Promise.allSettled([func1(), func2(),func3()]).then((results => console.log(results)))

/* output for all resolved promise
[
  { status: 'fulfilled', value: 'Function1' },
  { status: 'fulfilled', value: 'Function2' },
  { status: 'fulfilled', value: 'Function3' } 
]
*/

// output for rejected promise

/*
[
    { status: 'fulfilled', value: 'Function1' },
    { status: 'rejected', reason: 'Function2' },
    { status: 'fulfilled', value: 'Function3' }
  ]

*/