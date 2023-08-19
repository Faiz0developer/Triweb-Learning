const obj1 = {name:'Faizan',address:'Nainital'}
console.log(obj1)

const obj2 = new Object()
obj2.mobile = 83783755757;
obj2.name = 'Faizan'
console.log(obj2);

console.log(obj1.age)  //undefined

// dot notation
console.log('Dot notation - ', obj1.name)

// bracket notation
console.log('Bracket notation - ',obj1['name'])
const x = '123';
obj1[x] = 'Hi',   // key will be value of x ie.123
console.log(obj1)  //{123: 'Hi', name: 'Faizan', address: 'Nainital'}
console.log(obj1[x])   // Hi
