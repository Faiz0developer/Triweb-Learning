const Student = require("../model/student");

module.exports.student = async(req,res) => {
    const {name} = req.body
    const {email} = req.body
    const student = new Student({name,email})
    await student.save()
    res.send(student)
};
