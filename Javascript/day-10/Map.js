//Map -->>  map maintain order and key can be of any type
let newMap = new Map();
newMap.set("name", "Arush");

console.log(newMap)   //Map(1) {'name' => 'Arush'}

newMap.set("address", "Varanasi");
console.log(newMap)   //Map(2) {'name' => 'Arush', 'address' => 'Varanasi'}

newMap.set("mob", "459834984");
console.log(newMap)  //Map(3) {'name' => 'Arush', 'address' => 'Varanasi', 'mob' => '459834984'}

console.log(newMap.size);

const studentName = newMap.get("name");
console.log(studentName)  //Arush

newMap.set(1,'First');
console.log(newMap);  //Map(4) {'name' => 'Arush', 'address' => 'Varanasi', 'mob' => '459834984', 1 => 'First'}

const value1 = newMap.get(1)
console.log(value1)  //first