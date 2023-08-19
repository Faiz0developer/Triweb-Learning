let obj1 = {name:'Faizan', address:'Nainital'}
console.log(obj1.prototype)  //undefidned
obj1.display = function(){
    console.log(this.name)
}

console.log(obj1.__proto__)  //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

let obj2 = Object.create(obj1);
obj2.name='Ajay'
console.log(obj2)  // {name:'Ajay'}
console.log('obj2.__proto__ - ', obj2.__proto__)   //represent parent--  {name: 'Faizan', address: 'Nainital'}  
console.log(obj2.prototype)   //undefined


let obj3 = Object.create(obj2);
console.log('obj3.__proto__ - ', obj3.__proto__)  //obj3.__proto__ -  {name: 'Ajay'}


console.log('************************************')

let obj4 = Object.create(obj1);
obj4.__proto__.display1 = function(){
    console.log(this.address)
}
console.log('obj2.__proto__ - ', obj2.__proto__)   //represent parent--  {name: 'Faizan', address: 'Nainital'}  
obj4.display()
obj4.display1()

let obj5 = Object.create(obj1);
obj5.name = 'Vivek'
console.log('obj2.__proto__ - ', obj2.__proto__)   //represent parent--  {name: 'Faizan', address: 'Nainital'}  
obj5.display()
obj5.display1()









