const obj1 = {name:'Faizan',address:'Nainital', mob:5684896};

for(const key in obj1){
    console.log(key)
    console.log(`Value on ${key}: ${obj1[key]} ` )
}

const getKey = Object.keys(obj1)
console.log(getKey)  //(3) ['name', 'address', 'mob']