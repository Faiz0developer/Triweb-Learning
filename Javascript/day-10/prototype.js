function Student(name,age){
    this.name=name;
    this.age =age;
}

let std1 = new Student('Kavi',23)
console.log(std1.__proto__) //{constructor: ƒ}

std1.__proto__.display = function(){
    console.log(this.name)
}
console.log(std1.__proto__)  //{display: ƒ, constructor: ƒ}
console.log(std1.prototype)  //undefined

std1.display()

let std2 = new Student('Salman',27)
std2.display()

console.log(Student.prototype)   //{display: ƒ, constructor: ƒ}

Student.prototype.display1 = function(){
    console.log(this.age)
}

std1.display1()
std2.display1()