// apply -> same as call method but it accept array as second arguement


function martksDetail (...marks) {
    this.s1 = marks[0]
    this.s2 = marks[1]
    this.s3 = marks[2]
    this.s4 = marks[3]
    this.s5 = marks[4]

    let status = 'pass'
    marks.forEach((number) => {
        if(number<33){
            status='fail'
        }
    })
    this.result = status
}

function students (sName,...marks){
    this.sName=sName;
    martksDetail.apply(this,marks)
}

const std1 = new students("Faizan", 45,67,56,78,26)
console.log(std1)

