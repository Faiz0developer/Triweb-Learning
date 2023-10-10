const obj = {
  a: { p: 1, q: 2, r: 3 },
  b: [4, 5, 6],
  c: 7,
};

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

const copiedObj = customDeepCloning(obj, {});

console.log("Before - obj", obj);
console.log("Before - newObj", copiedObj);

obj["b"][0] = 8;

console.log("After - obj", obj);
console.log("After - newObj", copiedObj);
