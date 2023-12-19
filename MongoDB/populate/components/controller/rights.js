const Right = require('../model/rights')
module.exports.rights= async(req,res) => {
    const {studentId} = req.body
    const {right} = req.body

    const rights = new Right({studentId,right})
    await rights.save()

    res.send(rights)
}

module.exports.studentByRight = async (req,res) => {
    const {rightId} = req.body
    const student = await Right.find({_id:rightId}).populate('studentId')
    res.send(student)
}