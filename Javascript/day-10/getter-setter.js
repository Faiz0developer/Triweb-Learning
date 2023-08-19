let obj = {
    age:30,
    get getAge(){
        return this.age
    },
    set setAge(newAge){
        this.age = newAge
    }
}

console.log(obj.age)
obj.setAge = 40
console.log(obj.getAge)



// delet obj property

let obj1 = {name:'Faizan', address:'Nainital'}

console.log(obj1)    //{name: 'Faizan', address: 'Nainital'}

delete obj1.name;
console.log(obj1)  //{address: 'Nainital'}