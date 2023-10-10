const arr = [
  {a:1, b:2, c:3},
  [4, 5, 6],
  [7, 8, 9],
];

function customDeepCloning(src, dest) {
  for (const key in src) {
    if (Array.isArray(src[key])) {
      dest[key] = [];
      customDeepCloning(src[key], dest[key]);
    } else if (typeof src[key] == "object") {
      dest[key] = {};
      customDeepCloning(src[key], dest[key]);
    } else {
      dest[key] = src[key];
    }
  }
  return dest;
}

const copiedArr = customDeepCloning(arr, []);

console.log("Before - arr", arr);
console.log("Before - copyArr", copiedArr);

arr[0]['a'] = 8;

console.log("After - arr", arr);
console.log("After - copyArr", copiedArr);
