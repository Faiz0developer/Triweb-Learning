function printSeriesUSingRecursion(i) {
  if (i > 5) return;
  console.log(i);
  printSeriesUSingRecursion(i + 1);
}

// printSeriesUSingRecursion(1);

function printReverseSeriesUSingRecursion(i) {
  if (i < 1) return;
  console.log(i);
  printReverseSeriesUSingRecursion(i - 1);
}

printReverseSeriesUSingRecursion(5);
