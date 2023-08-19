function Employee(dep,mob){
    this.dep =dep;
    this.mob=mob;
}

function Manager(name){
    Employee.call(this)
    this.name =name;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.contructor = Manager

// console.log(Manager.__proto__)
// console.log(Manager.prototype)
const faizan = new Manager('Faizan')
faizan.dep ='Manager'
faizan.mob =37344
console.log(faizan)
console.log(faizan.dep)
console.log(faizan.mob)
faizan.email='fazn@gmail.com'
console.log(faizan)
console.log(faizan.__proto__)