// Написать функцию итератор, при каждом последующем обращении
// будет возвращать next элемент. var step = factory([2, 8, 9, 2, 4]);

// ```js
// step(); // 2
// step(); // 8
// step(); // 9
// ```

// function iterator(arr) {
//   let i = -1;
//   return function () {
//     i = i + 1;
//     if (i >= arr.length) {
//       return null;
//     }
//     return arr[i];
//   };
// }

// const nums = [1, 2, 3, 4];
// const iterate = iterator(nums);
// console.log(iterate()); // -> 1
// console.log(iterate()); // -> 2
// console.log(iterate()); // -> 3
// console.log(iterate()); // -> 4
// console.log(iterate()); // -> null
// console.log(iterate()); // -> null
