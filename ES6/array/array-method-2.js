// keys()

let arr = ["a", "b", "c"];
let keys = arr.keys();
console.log(keys); //Array Iterator {}

for (let e of keys) {
  console.log(e); // 0,1,2 (index)
  console.log(arr[e]); //a b c (values)
}
