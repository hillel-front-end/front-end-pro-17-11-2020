console.log('Lection 8: Functions. Closure');


// ! Анонимные самовызывающиеся функции

// function someFunc() {

// }
// const someFunc = (function() {});

// (function() {
//   alert('Hello from func');
// })();


// const someFunc = function() {};
// (function() {
//   let localVar = 'local';
//   console.log(localVar);
// })();

// const userModule = (function() {
//   let localVar = 'local';
//   const user = {
//     id: 1,
//     name: 'John',
//   };
//   return user;
// })();

// console.log(userModule);


// (function() {
//   alert('anonymous function');
// })();

// ! Передача и возврат функции. High Order Functions

// function parent() {
//   console.log(parent);
// }

// console.log(typeof parent, typeof null);

// function greeting(msg, func) {
//   func(msg);
// };

// greeting('Hello world', console.log);

// function parent() {
//   console.log('parent');
//   function nested() {
//     console.log('nested');
//   }
//   return multiply;
// }
// const res = sum();
// console.log(res);
// res();

// function calculator(a, b, operator) {
//   return operator(a, b);
// }

// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function pow(a, b) {
//   return Math.pow(a, b);
// }

// console.log(calculator(2, 3, pow));

// function parent() {
//   console.log('parent');
//   function child(str) {
//     console.log('child' + str);
//   }

//   return child;
// }

// const func = parent();
// func('some string');
// console.log(func);

// ----
// ! Замыкания

// counter(); -> 1
// counter(); -> 2
// counter(); -> 3

// let count = 0;

// function counter() {
//   count++;

//   return count;
// }

// console.log(counter());
// console.log(counter());
// count = 100;
// console.log(counter());
// console.log(counter());

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 2);
// sum(1, 2);
// sum(1, 4);
// sum(1, 2);

// function factory() {
//   let count = 0;

//   function counter() {
//     count++;

//     return count;
//   }

//   return counter;
// }

// function factory() {
//   let count = 0;
// }


// function counter() {
//   count++;

//   return count;
// }

// function counter() {
//   count++
//   return count;
// }

// function factory() {
//   let count = 0;
//   return function(newValue) {
//     if (typeof newValue === 'number') {
//       count = newValue;
//     }
//     return ++count;
//   }
// }

// const res = factory();
// console.log(res(10));
// console.log(res());
// console.log(res(0));
// console.log(res());
// console.log(res(1000));
// console.log(res());
// console.log(res());

// ! Рекурсия

// Рекурсия – вызов функцией самой себя.

// * Возведение числа в степень
// (2 * 2) * 2
// 2 * 2 * 2
// 2
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// 2
// 1 -> 2^0 === pow(2, 0)
// 2 -> 2^1 === pow(2, 1)
// 2 -> 2^2 === pow(2, 2)
// 2 -> 2^3 === pow(2, 3)


// 2 * 2 * 2 * 1
//         2^1    2^0
// 2 * 2^1
// 2^3 = (2^2) * 2
// 2^5 = (2^(5-1)) * 2

// 2^n = 2^(n-1) *2
// 2^5 = (2^(5-1)) * 2
// 2^4 = (2^(4 -1)) * 2
// 2^3 = (2^(3 - 1)) * 2
// 2^2 = (2^(2 -1)) * 2
// 2^1 = (2^(1-1)) * 2
// 2^0 = 1
// --- 
// 2^n = 2^(n-1) *2
// ---------
// 2^2 = (2^(2 -1)) * 2
// 2^1 = (2^(1-1)) * 2
// 2^0 = 1

// function pow(x, n) {
//   // debugger;
//   if (x === 1) {
//     return 1;
//   }
//   if (n === 1) {
//     return x;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   const result = x * pow(x, n - 1);// x^n-1
//   return result;
// }

// console.log(pow(2, 3));
// console.log(pow(2, 0));
// console.log(pow(2, 8999));


// * Реализовать функцию факториал n! = n * (n -1) * ... * 1;

// n!
// 3! = 1 * 2 * 3
// 3! = 3 * 2 * 1
// n! = n * (n - 1) * (n -2) ... 1;

// function factorial(n) {
//   debugger;
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }


// console.log(factorial(2));
// console.log(factorial(3));
