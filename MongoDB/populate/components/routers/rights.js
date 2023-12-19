const express = require('express')
const { rights, studentByRight } = require('../controller/rights')

const router = express.Router()

router.post('/',rights)

router.get('/',studentByRight)

module.exports = router