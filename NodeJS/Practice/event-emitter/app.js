const dbFile = require('./dbFile')
const {loginSuccessfull} = require('./login')
const {myEventEmitter,LOGIN_EVENT} = require('./eventFile')

myEventEmitter.on(LOGIN_EVENT,(userName)=> {
    console.log('Send email to user', userName)
})

loginSuccessfull('Faizan')