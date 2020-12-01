/**
    
1. В двумерном массиве A размером n на m.
   Заполнить случайными числами в диапазоне `-220 ... 435`.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Найти найменьшее число и
       поменять его местами с первым в массиве
    4. Поменять ряды местами (1 и 2 пункт)
*/

const n = 10;
const m = 10;
let arr = new Array(n);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(m);
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Math.floor(Math.random() * (220 + 435 + 1)) - 220;
  }
}

document.write('--------------------------------------');
  document.write('<br />');
for (let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    document.write(arr[i][j] + ' | ');
  }
  document.write('<br />');
  document.write('--------------------------------------');
  document.write('<br />');
}
// let minSum = 0;
// let minIndex = 0;

// for (let i = 0; i < arr[0].length; i++) {
//   minSum += arr[0][i];
// }

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   if (sum < minSum) {
//     minSum = sum;
//     minIndex = i;
//   }
// }
// console.log('Min Sum row', minIndex + 1);

// let maxSum;
// let maxIndex = 0;

// for (let i = 0; i < arr[0].length; i++) {
//   maxSum += arr[0][i];
// }

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for(let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   if (sum > maxSum) {
//     maxSum = sum;
//     maxIndex = i;
//   }
// }

// console.log('Max Sum Row', maxIndex + 1);

// let minValue = arr[0][0];
// let minRowNum = 0;
// let minColNum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for ( let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] <= minValue) {
//       minValue = arr[i][j];
//       minRowNum = i;
//       minColNum = j;
//     }
//   }
// }

// // ! Swap
// // [1, 2]
// // [,2] | 1
// // [2,] | 1
// // [2, 1]
// // let a = [1, 2];

// // let tmp = a[0];
// // a[0] = a[1];
// // a[1] = tmp;

// let tmp = arr[0][0];
// arr[0][0] = arr[minRowNum][minColNum];
// arr[minRowNum][minColNum] = tmp;

// console.log('Min cell index: ', minRowNum, minColNum);

// document.write('<br />********************************<br />')

// document.write('--------------------------------------');
// document.write('<br />');
// for (let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr[i].length; j++) {
//     document.write(arr[i][j] + ' | ');
//   }
//   document.write('<br />');
//   document.write('--------------------------------------');
//   document.write('<br />');
// }

let minSum = 0;
let maxSum = 0;
let minIndex = 0;
let maxIndex = 0;

for (let i = 0; i < arr[0].length; i++) {
  minSum += arr[0][i];
  maxSum += arr[0][i];
}

debugger;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for(let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  if (sum >= maxSum) {
    maxSum = sum;
    maxIndex = i;
  }
  if (sum <= minSum) {
    minSum = sum;
    minIndex = i;
  }
};

console.log(minIndex, maxIndex);

let tmp = arr[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = tmp;


document.write('<br />********************************<br />')

document.write('--------------------------------------');
document.write('<br />');
for (let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    document.write(arr[i][j] + ' | ');
  }
  document.write('<br />');
  document.write('--------------------------------------');
  document.write('<br />');
}
// 1 ^ 2

// 0 1
// 1 0
// ----
// 1 1
