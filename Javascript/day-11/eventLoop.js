function validateUser(name){
    return new Promise((resolve,reject) => {
        if(name==='abcd'){
            resolve('Yes')
        }else{
            reject('No')
        }
    })
    
}

validateUser('abcd')
    .then((status) => {
        console.log('Event loop after round 1')
        console.log(status)
    })
    .catch((err)=> {
        console.log(err);
    })

console.log('Event loop round 1')
