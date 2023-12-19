const express = require('express')
const { student } = require('../controller/student')

const router = express.Router()

router.post('/', student)

module.exports=router