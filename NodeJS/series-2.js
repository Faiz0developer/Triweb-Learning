// 1,4,3,6,5,8,7,10,9,12......
const seriesStartFrom = 1;

let gap = 3;

numerOfOccurence = 10;

let val = seriesStartFrom;

let i = 1;

while (i <= numerOfOccurence) {
  console.log(val);
  val += gap;
  if (gap === 3) gap = -1;
  else gap = 3;

  i++;
}
