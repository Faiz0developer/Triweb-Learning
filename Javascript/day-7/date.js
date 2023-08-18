let date = "2023 8 18 15:25:50:25";
console.log(date); //2023 8 18 13:07:50

let dateObj = new Date(date);

// get method
console.log("Month", dateObj.getMonth());
console.log("Full Year", dateObj.getFullYear());
console.log("Date", dateObj.getDate());
console.log("Time", dateObj.getTime());
console.log("Hours", dateObj.getHours());
console.log("Minutes", dateObj.getMinutes());
console.log("Seconds", dateObj.getSeconds());
console.log("Miiseconds", dateObj.getMilliseconds());

// set method. All methods same as get
dateObj.setMonth(9);
console.log(dateObj);
