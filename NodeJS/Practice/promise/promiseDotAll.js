// promise.all([iterator]) -> use to handle multiple promise. 
// -> wait to resolve all the promises or to reject one.
// -> If all promise resolved then it will return all resolved value 
// -> If any promise get reject then it will return rejected value

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

Promise.all([func1(),func2(),func3()]).then((result) => console.log(result)).catch((error) => console.log(error))