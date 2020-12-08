console.log('Lection 7 - Functions');
/**
 * Тайм коды
 * - Object.values(), Object.keys(), Object.entries()
 * - Создание объекта
 * - Functions
 * - Объявление и вызов функций
 * - Аргументы
 * - Формальные и фактические аргументы
 * - Аргументы по умолчанию
 * - return
 * - arguments
 * - Порядок вызова функции
 * - Function expression
 * - Мутация данных. Чистые функции
 * - Локальные и внешние переменные. Глобальная и локальная область видимости
 * - Цепочка областей видимости
 * - Область видимости let, const
 */

// ! Object.values(), Object.keys(), Object.entries()
// https://caniuse.com/#search=object.values

// const user = {
//   'id': 1,
//   'name': 'John',
//   'age': 32,
//   'cart': {
//     'date': '2020-03-01',
//     'items': [
//       {
//         'id': 56,
//         'name': 'Car',
//         'price': 35,
//       },
//     ],
//   }, 
//   '0': 'some string',
// };

// console.log(Object.values(user));

// const values = Objectj.values(user);
// console.log(Object.keys(user));
// const keys = Object.keys(user).map(function (key) {
//   console.log(key);
// });
// for (let i = 0; i < keys.length; i++) {
//   console.log(user[keys[i]]);
// }
// console.log(Object.entries(user));

// ! Создание объекта

// const literalObject = {};

// const constructorObject = new Object();
// console.log(constructorObject);
// const num = new Number(11);
// console.log(num);

// const objectCreate = Object.create({}, {
//   a: {
//     value: 2,
//     writable: false,
//     enumerable: false,
//     configurable: false,
//   },
// });

// Object.defineProperty(objectCreate, 'a', {
//   writable: true,
// });

// console.log(objectCreate);
// objectCreate.a = 3;
// console.log(objectCreate);
// for (let key in objectCreate) {
//   console.log(key);
// }
// console.log(objectCreate);

// function User() {};
// const user = new User();
// console.log(user);
// console.log(typeof user);
// console.log(typeof User);


// ! Functions

// const arr = [1, 2, 3];
// let maxValue = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxValue) {
//     maxValue = arr[i];
//   }
// }

// const arr2 = [5, 6, 7];

// ! Объявление и вызов функций

/**
 * function идентификатор(аргумент, аргумент) {
 *  тело функции
 * };
 * идентификатор(пaраметр);
*/


// const arr1 = [1, 2, 3];
// const arr2 = [5, 6, 7];

// function findMaxValue(arr) {
//   // console.log(arr);
//   let maxValue = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }

//   // return {
//   //   id: 1,
//   // };
//   return maxValue;
// }

// console.log(findMaxValue(arr1));
// const result = findMaxValue(arr1);
// const result2 = findMaxValue(arr2);
// console.log(result);
// console.log(result2);

// function findMaxItem(a, b) {

// }

// findMaxItem(1, 2);

// ! Аргументы

// function sum(a, b) {
//   console.log(a + b);
//   console.log(a * b);
// }
// sum(1, 2);

// ! Формальные и фактические аргументы

// function sum(a, b, c) {
//   console.log(c);
//   console.log(a + b + c);
//   // let a = 1;
//   // let b = 2;
//   // console.log(a + b + c);
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
// }
// // sum(1, 2, 3, 4);
// sum(1, 2);

// ! Аргументы по умолчанию

// sort(func = )

// function sum(a, b, c = 3) {
//   console.log(a + b + c);
// }

// sum(1, 2, 4);

// function sum(a, b = 'some string', c = {
//   a: 2,
// }) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   // const result = a + b;
//   // console.log(result);
// }
// sum(1, 'another string', [1,2,3]);

// ! return

// function sum(a, b) {
//   // console.log(a, b);
//   const res = a + b;
//   return res;
// }
// console.log(a);
// const digit1 = 1;
// const digit2 = 2;

// sum(digit1, sum(2, 5));

// sum(1, 2);
// sum(2, 4);
// console.log(sum(5, 6));
// const result = sum(10, 1);
// console.log(result);

// console.log(sum(1, 2));

// ! arguments

// function sum(a, b, c) {
// function sum() {
//   // console.log(arguments);
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   // console.log(result);
//   // console.log(a + b + c);
//   // return result;
//   // return undefined;
// }

// sum(1, 2, 3, 4, 5, 6, 7);
// console.log(sum(1, 2, 3));

// function sum() {
//   // console.log(arguments);
//   // console.log(arguments[0], arguments[1], arguments[2]);
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// const res = sum(1, 2, 3, 4);
// console.log(res);

// console.log(sum(1, 2, 3));

// ! Порядок вызова функции

// function sum(a, b) {
//   return a + b;
// }

// function multi(a, b) {
//   return a * b;
// }


// let result = sum(1, 3);
// result = multi(result, 2);
// console.log(result);

// console.log(sum(1, 2));

// console.log(a);
// var a = 1;
// console.log(a);
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// ! Function expression

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum);

// console.log(sum(1 ,3));

// var sum = function(a, b) {
//   return a + b;
// }

// console.log(sum(1 ,3));

// const result = sum(1, 2);
// console.log(result);
// console.log(sum);

// var sum = function(a, b) {
//   return a + b;
// };

// const result = sum(1, 2);
// console.log(result);
// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));


// ! Мутация данных. Чистые функции
// Удалить максимальный элемент массива

// function delMaxElementDirty(arr) {
//   let maxValue = arr[0];
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//       maxIndex = i;
//     }
//   }

//   arr.splice(maxIndex, 1);
//   return arr;
// }

// const arr = [1, 2, 3];
// console.log(delMaxElementDirty(arr));
// console.log(arr);

// function delMaxElementPure(arr) {
//   let copy = arr.slice();
//   let maxValue = copy[0];
//   let maxIndex = 0;
//   for (let i = 1; i < copy.length; i++) {
//     if (copy[i] > maxValue) {
//       maxValue = copy[i];
//       maxIndex = i;
//     }
//   }
//   copy.splice(maxIndex, 1);
//   return copy;
// }

// const arr = [1, 5, 3];
// const result = delMaxElementPure(arr);
// console.log(result);
// console.log(arr);


// ! Локальные и внешние переменные. Глобальная и локальная область видимости
// global

// var a = 1;
// console.log(a);

// function sum() {
//   var b = 2;
//   console.log(b);
//   function second() {
//     console.log('second func');
//   }
// }
// sum();

// console.log(b);

// var a = 1;


// let a = 1;

// function sum() {
//   var b = 2;
//   // var a = 3;
//   // console.log('a', a);
//   // console.log('b', b);
//   function nested() {
//     var c = 4;
//     // var a;
//     // console.log('c', c);
//     // console.log('b - nested', b);
//     // console.log('a - nested', a);
//     a = 25;
//   }
//   nested();
// }

// sum();

// console.log(a);

// const arr = [1, 2];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// if(100 > 1) {
//   // let i = 1;
//   var i = 1;
// }

// console.log(i);
