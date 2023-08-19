// ways o initialization of an object

// 1)Norml object
let obj1 = {name:'Faizan', mob:238743874867}
console.log(obj1)


// 2)function constructor
function employe(name,desig,salary){
    this.nname = name;
    this.designation=desig;
    this.payment = salary
}

let Emp1 = new employe('Faizan', 'Intern',0);
let Emp2 = new employe('Amit', 'SD1',70000);
console.log(Emp1)
console.log(Emp2)


// Object.create()

let obj2 = {
    name:'Faizan', 
    mob:238743874867,
    display:function(){
        console.log(this.name)
    }
}

let obj = Object.create(obj2);
console.log(obj2)  //{name:'Faizan', mob:238743874867}
console.log(obj)  //{}
console.log(obj.name)  // Faizan
obj.name = 'Ajay'
obj.mob = 857979867;
console.log(obj)   //{name: 'Ajay', mob: 857979867}
console.log(obj2)   //{name:'Faizan', mob:238743874867}
obj.display()  //Ajay
