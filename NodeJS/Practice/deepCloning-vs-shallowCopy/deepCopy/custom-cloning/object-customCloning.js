const obj = {
  a: { p: 1, q: 2, r: 3 },
  b:4,
  c:5
};

function customDeepCloning(src, dest) {
  for (const key in src) {
    if(typeof(src[key]) == 'object'){
        dest[key] = {}
        customDeepCloning(src[key], dest[key])
    }else{
        dest[key] = src[key]
    }
  }
  return dest
}

const copiedObj = customDeepCloning(obj, {});

console.log("Before - obj", obj); 
console.log("Before - newObj", copiedObj); 

obj['a']['p'] = 8;

console.log('After - obj', obj)         
console.log("After - newObj", copiedObj); 
