let dayNum = 0;
switch (dayNum) {
  case 0:
    console.log("Sun");
    break;
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("Thurs");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  default:
    console.log("Enter Number between 0-6");
    break;
}

console.log("Out of switch1");

let leaveDay = 1;

switch (leaveDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working Day");
    break;
  case 0:
  case 6:
    console.log("Weakend");
    break;
  default:
    console.log("Enter Number between 0-6");
}
