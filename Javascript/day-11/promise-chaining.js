function returnUser(){
    return new Promise((resolve,reject) => {
        resolve({name:'Faizan'})
    });
}

returnUser()
    .then(userData => {
        // console.log(userData)
        return userData.name
    })
    .then(userName => {
        console.log('Hi', userName)
    })
    .catch(err=> {
        console.log(err)
    }) 