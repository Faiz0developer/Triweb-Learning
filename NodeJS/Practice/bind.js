// bind

let student1 = {
    sName :'Aman',
    mobile:76546,
 }
let student = {
    sName :'Faizan',
    mobile:843876,

    getName:function(){
        console.log(this.sName)
    }
}

let sn = student.getName.bind(student)
setTimeout(sn,1000)

let std1 = student.getName.bind(student1)
setTimeout(std1,1000)