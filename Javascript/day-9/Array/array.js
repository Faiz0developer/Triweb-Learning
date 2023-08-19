const arr = [123,34,13,7,3,478,435,34]
console.log(arr)
console.log(arr[0])
console.log(arr[4])


// Array using new Array
const arr1 =new Array(123,34,13,7,3,478,435,34)
console.log(arr1)
console.log(arr1[0])
console.log(arr1[4])

// Array using Array
const arr2 = Array(123,34,13,7,3,478,435,34)
console.log(arr2)
console.log(arr2[0])
console.log(arr2[4])


// Populate an array;

let arr4 = []

arr4[0] = 'India',
arr4[1] = "US"

console.log(arr4)

// length
console.log(arr.length);  // 8

arr.length = 5;
console.log(arr);  //[123, 34, 13, 7, 3]

arr.length = 10
console.log(arr)  // [123, 34, 13, 7, 3, empty × 5]

//  Iterate over array
const arr5 = [123,34,13,7,3,478,435,34]
for(let i=0; i<arr5.length;i++){
    console.log(arr5[i])
}

