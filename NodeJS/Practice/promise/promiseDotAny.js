// Promise.any(iterator) -> return the value of very first promise get resolved.


function func1(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res('Function1')
        },2000)
    }) 
}

function func2(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            rej('Function2')
        },200)
    }) 
}

function func3(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res('Function3')
        },1000)
    }) 
}

Promise.any([func1(), func2(),func3()]).then((results => console.log(results)))