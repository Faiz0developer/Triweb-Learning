let marks = [1, 2, 34, 23];
let isBreakCalled = true;

for (let i in marks) {
  if (marks[i] % 5 === 0) {
    isBreakCalled = false;
    break;
  }
  console.log(marks[i]);
}

if (isBreakCalled) console.log("Loop is completed");
else console.log("Loop is break");
