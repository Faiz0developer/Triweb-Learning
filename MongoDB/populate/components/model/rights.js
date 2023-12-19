const mongoose = require('mongoose')

const rightSchema=mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },

    right:String
})

module.exports = mongoose.model('Right', rightSchema)