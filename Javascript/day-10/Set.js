/* Set -->> Set is like an array but not array. Set are collection of unique values.
It also maintain the order of insertion. 
 */

const newSet = new Set()
console.log(newSet)

newSet.add(34)
newSet.add(25)
newSet.add(67)
newSet.add(27)
newSet.add(27)

console.log(newSet)  //Set(4) {34, 25, 67, 27}

console.log(newSet.size)  //4

console.log(newSet.has(67))   //true

console.log(newSet.delete(34))
console.log(newSet)   //Set(3) {25, 67, 27}

//iterate over Set

for(const ele of newSet){
    console.log('Element:', ele)
}