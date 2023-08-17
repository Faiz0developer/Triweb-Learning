const objCountry = {
  name: "India",
  code: 91,
};

for (const key in objCountry) {
  //   console.log(objCountry[key]);
  console.log(`${key} of country is ${objCountry[key]}`);
}

// for-in loop give the keys of object,not the values
