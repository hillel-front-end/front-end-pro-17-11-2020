console.log('Lection 5 - n-dimension arrays');

/*
  * - Форматирование кода
  * - Создание массива через конструктор
  * - Двумерный массив
  * - Доступ к элементам
  * - Диагонали матрицы
  * - Строки как массивы
  * - Практика
*/

// ! Форматирование кода

// let sum = 1 + 2;
// let mult = 1 * 2;

// if (a > 1) {
//   alert(1);
//   alert(2);
// } else {
//   console.log(1);
//   console.log(2);
// }
// do {

// } while ();

// if (a > 100) {
//   console.log('a');
// }

// Line comment
/*
  Block comment
*/
/**
 * 
 */

// ! Создание массива через конструктор
// const arr = [];
// const arr = new Array();
// const arr = new Array(3);
// const arr = new Array('one', 'two');
// const arr = new Array(1, 2);
// console.log(arr);
// const arr = Array.from('aaaa');
// console.log(arr);
// --- 
// Array.isArray
// let arr = [];
// let arr = new Array();
// console.log(arr);
// let arr = new Array('one', 'two', 'three', 'four');
// console.log(arr);
// let arr = new Array(3);
// console.log(arr);
// console.log(arr.length);

// ! Двумерный массив
// let twoDimensional = [
//   [1, 1, 1],
//   [1, 1, 1, 2, 3, 4],
//   'some string',
//   false,
// ];
/**
 * ----------
 *| | A | B |
 * ----------
 *1
 */
// let table = [
//   [1, 2, 'a'],
//   [3, 4, 'a'],
//   [5, 6, 'a'],
// ];

// console.log(table[0][0]);
// table[2][2] = 'b';
// console.log(table);

// console.log(twoDimensional);

// --------

// ! Доступ к элементам
// let twoDimensional = [
//   [1, 1, 1],
//   [1, 1, 1, 2, 3, 4],
// ];
// console.log(twoDimensional[0][0]);
// twoDimensional[0][0] = 0;
// console.log(twoDimensional[0][0]);

// const twoDimensional = [
//   [1, 10, 3, 4],
//   [1, -10, 2, 22, 10, 10, 22, 222, -222],
// ];

// twoDimensional[0][0] = -22;
// console.log(twoDimensional[0][0]);

// * Подсчитать сумму массива

// const twoDimensional = [
//   [1, 10, 3, 4],
//   [1, -10, 2, 22, 10, 10, 22, 222, -222],
// ];

// let sum = 0;

// for (let i = 0; i < twoDimensional.length; i++) {
//   // console.log(twoDimensional[i]);
//   for (let j = 0; j < twoDimensional[i].length; j++) {
//     sum += twoDimensional[i][j];
//     // console.log(twoDimensional[i][j]);
//   }
// }

// console.log(sum);


// ! Диагонали матрицы

// const n = 10;
// const m = 10;

// let a = new Array(n);

// for(i = 0; i < a.length; i++) {
//   a[i] = new Array(m);
//   for (let j = 0; j < a[i].length; j++) {
//     a[i][j] = '*** ';
//     // * главная диагональ
//     // if (i === j) {
//     //   a[i][j] = '000 ';
//     // }
//     // * Побочная диагональ
//     // if (i + j === m - 1) {
//     //   a[i][j] = '111 ';
//     // }
//     // * Элементы ниже главной диагонали
//     // if (i > j) { 
//     //   a[i][j] = '000 '; 
//     // }
//      // * Элементы ниже побочной диагонали
//       // if (i + j > n - 1) {
//       //   a[i][j] = '000 '; 
//       // }
      
//     // if ( i >= j ^ i + j < n - 1) {
//     //   a[i][j] = '***'; 
//     // } else {
//     //   a[i][j] = '&nbsp;&nbsp;&nbsp;'; 
//     // }
//     document.write(a[i][j]);
//   }
  
//   document.write('<br />');
// }
// console.log(a);
// -------

// ? -----------------------------

// ! Строки как массивы
// const str = 'some string';
// console.log(str);
// console.log(str[0]);
// console.log(str.length);
// const subStr = str.slice(0, 3);
// console.log(subStr);

// * indexOf
// const arr = [22, 1, 2, 3, 4, 5, 6, 7, 8, 5];
// console.log(arr.indexOf(222));
// const str = 'some string';
// console.log(str.indexOf('s'), str.indexOf('s'));

// * includes
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5];
// console.log(arr.includes(3));
// console.log(arr.includes(33));

// const str = 'some string';
// console.log(str.includes('some')); // true
// console.log(str.includes('sm')); // false
