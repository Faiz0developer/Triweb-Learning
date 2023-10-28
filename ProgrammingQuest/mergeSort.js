function mergeSortWithoutRecursion(arr) {
  const mid = Math.ceil(arr.length / 3);
  const sub1 = arr.slice(0, mid);
  const sub2 = arr.slice(mid, 2 * mid);
  const sub3 = arr.slice(2 * mid);

  const sub1Sorted = sort(sub1); //[ -2, 8, 20 ]
  const sub2Sorted = sort(sub2); //[ -6, 4, 7 ]
  const sub3Sorted = sort(sub3); //[ 8, 19 ]

  const mergeArray = mergeTwoSortedArray(sub1Sorted, sub2Sorted); //[-6,-2,4,7,8,20]

  const mergedArray =  mergeTwoSortedArray(sub3Sorted, mergeArray);  //[-6, -2, 4, 7, 8, 8, 19, 20]

  return mergedArray
}

function sort(subArr) {
  // const sortedArr = [];
  // sortedArr.length = subArr.length;
  // let index = 1;
  let i = 0;
  while (i < subArr.length) {
    for (let j = i + 1; j < subArr.length; j++) {
      if (subArr[i] > subArr[j]) {
        let z = subArr[i];
        subArr[i] = subArr[j];
        subArr[j] = z;
      }
    }
    i++;
  }
  return subArr;
}

function mergeTwoSortedArray(sortedArr1, sortedArr2) {
  let c1 = 0;
  // let c2 = 0;
  let newArr = [];

  outer: for (let x = 0; x < sortedArr1.length; x++) {
    for (let y = 0; y < sortedArr2.length; y++) {
      if (sortedArr1[x] > sortedArr2[sortedArr2.length - 1]) {
        newArr = [...newArr, ...sortedArr2, ...sortedArr1];
        sortedArr2.splice(0, sortedArr2.length);
        break outer;
      } else if (sortedArr1[x] < sortedArr2[y]) {
        newArr.push(sortedArr1[x]);
        // c2++;
        break;
      } else {
        newArr.push(sortedArr2[y]);
        c1++;
      }
    }
    sortedArr2.splice(0, c1);
    c1 = 0;
    if (newArr.includes(sortedArr1[x])) {
      sortedArr1.shift();
    }
    x = -1;
  }
  if (sortedArr2.length) {
    newArr.push(...sortedArr2);
  }
  return newArr;
}

// const arr = [12,-13,-11];
const arr = [8, 20, -2, 4, -6, 7, 8, 19];
// const arr = [
//   12, 54, 68, 34, 67, 45, 23, 45, 8, 6, 344, 6, 8, 4, 23, 34, 67, 6, 312, 67, 9,
//   36, 24, 6,5,213123,77,131232,78,445,12323,799,23,754,898,4566467,8746767464756,7467463766,37643764234,23,46,379,237,34
// ];
console.log('Merge sorting without recursion - ', mergeSortWithoutRecursion(arr));





// MERGE SORTING with recursion -->>

function mergeSortWithRecursion(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rigthArr = arr.slice(mid);
  return merge(
    mergeSortWithRecursion(leftArr),
    mergeSortWithRecursion(rigthArr)
  );
}

function merge(leftArr, rigthArr) {
  const sortedArr = [];
  while (leftArr.length && rigthArr.length) {
    if (leftArr[0] <= rigthArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rigthArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rigthArr];
}

const arr1 = [12,10,-11];
// const arr1 = [8, 20, -2, 4, -6, 7, 8, 19];
// const arr1 = [
//   12, 54, 68, 34, 67, 45, 23, 45, 8, 6, 344, 6, 8, 4, 23, 34, 67, 6, 312, 67, 9,
//   36, 24, 6,5,213123,77,131232,78,445,12323,799,23,754,898,4566467,8746767464756,7467463766,37643764234,23,46,379,237,34
// ];

console.log("Merge sorting with recursion - ", mergeSortWithRecursion(arr1));
