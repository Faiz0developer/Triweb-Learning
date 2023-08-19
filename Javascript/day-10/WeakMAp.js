// WeakAmp -->> keys are always an object.
let name1 = {name:'h1'}
m= {[name1]:'Faizan'}

console.log(m[name1])
console.log(m)

//WeakMAp

let wMap = new WeakMap();
obj1 ={}
obj2 ={1:1}
obj3 ={2:2}
wMap.set(obj1,'val1')
wMap.set(obj2,'val2')
wMap.set(obj3,'val3')

console.log(wMap)