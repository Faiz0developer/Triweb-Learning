const obj = {
    a: { p: 1, q: 2, r: 3 },
    b: [4, 5, 6],
    c: [7, 8, 9],
  };
  
  const newObj = JSON.parse(JSON.stringify(obj));
  
  console.log("Before - obj", obj); 
  console.log("Before - newObj", newObj); 
  
  obj['a']['p'] = 8;
  
  console.log('After - obj', obj)         
  console.log("After - newObj", newObj); 