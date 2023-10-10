// Promise.race(iterator) -> it return value of very first promise whether it
// -> get resolved
// -> or it get rejected

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

Promise.race([func1(), func2(),func3()]).then((results => console.log(results))).catch((error) => console.log('error',error))