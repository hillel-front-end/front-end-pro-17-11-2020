console.log('Lection 20 - Event Loop');

// !!! Event Loop

// ! setTimeout

// function sayHi() {
//   console.log('Hello');
// }

// setTimeout(sayHi, 2000);
// console.log('first');

// function sayHi(value, str) {
//   console.log('Hello');
//   console.log(value);
//   console.log(str);
// }

// setTimeout(sayHi, 2000, 100, 'second');

// function sayHi() {
//   console.log('Hello');
// }

// const timer = setTimeout(sayHi, 5000);
// document.querySelector('button').addEventListener('click', () => {
//   // clearTimeout(timer);
//   console.log('clicked');
// });
// console.log('first');
// console.log('second');

// ! setInterval

// function sayHi() {
//   console.log('Hello');
// }

// setInterval(sayHi, 1000);


// const timer = setInterval(function() {
//   console.log('interval');
// }, 5000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 1000);

// ! Async

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

// * Heap, Stack

// debugger;
// function baz() {
//   console.log('Hello from baz');
// }

// function bar() {
//   baz();
// }
// function foo() {
//   bar();
// }
// foo();
// console.log('test');
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYmF6KCkgewogIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGJheicpOwp9CgpmdW5jdGlvbiBiYXIoKSB7CiAgYmF6KCk7Cn0KZnVuY3Rpb24gZm9vKCkgewogIGJhcigpOwp9CmZvbygpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSk7CnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogIGNvbnNvbGUubG9nKDIpOwp9LCAwKTsKY29uc29sZS5sb2coMyk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// ***********

// function f1() {
//   setTimeout(function() {
//     console.log(99);
//   }, 1000);
//   setTimeout(function() {
//     console.log(100);
//   }, 1000);
// }

// function f2() {
//   for(let i = 0; i < 20; i++) {
//     console.log(i);
//   }
// }

// console.log('a');
// f2();
// f1();
// console.log('b');

// *********

// document.querySelector('button').addEventListener('click', () => {
//   console.log('clicked');
// });

// setTimeout(() => {
//   console.log('timeout');
// }, 2000);

// for(let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// ********

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }
// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100);
//   })(i);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(function (a) {
//     console.log(a);
//     console.log(arguments);
//   }, 100, i, 'a', 'b');
// }


// console.log('a');


//





















// for (var i = 1; i < 4; i++) {
//   // setTimeout(function(i) {
//   //   console.log(i);
//   // }, 0, i);
//   function log(i) {
//     console.log(i);
//     console.log(arguments);
//   }
//   setTimeout(log.bind(null, i, 'second', 'third'));
// }

// for (var i = 1; i < 4; i++) {
//   (function () {
//     var a = i;
//     setTimeout(function () {
//       console.log(a);
//     });
//   })();
// }

// ! try/catch/finally

const json = `
{
  "a': 1
}
`;

// console.log(JSON.parse(json));
// try {
//   console.log(JSON.parse(json));
// } catch (error) {
//   console.dir(error);
//   // console.log(error);
// } finally {
//   console.log('finaly');
// }
// let count = 0;
// try {
  // function foo() {
  //   let i = 0;
  //   let j = 1;
  //   let obj = {
  //     a: 2,
  //     b: 4,
  //   };
  //   count++;
  //   foo();
  // }

  // foo();
// } catch (e) {
//   console.dir(e);
// }
// console.log(count);

// try {
//   document.querySelector('button').addEventListener('click', () => {
//     try {
//       a++;
//       console.log('callback');
//     } catch (e) {
//       console.dir(e);
//     }
//   });
// } catch (e) {
//   console.dir(e);
// }

// setTimeout(() => {
//   console.log('timeout');
// }, 5000);

// // lalal = 10;
// console.log('test');
// try {
//   // lalal = 10;
//   console.log('try');
// } catch(e) {
//   // console.dir(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e.stack);
// } finally {
//   console.log('finish');
// }
// console.log('test');
// * try/catch работает синхронно
// try {
//   setTimeout(() => {
//     try {
//       llalal;
//     } catch(e) {
//       console.log(e);
//     }
//   }, 0);
// } catch (e) {
//   console.log(e);
// }

// * Собственные ошибки
// const error = new Error('my error');
// console.log(error);
// class InvalidAge extends Error {
//   constructor(age) {
//     super(`Invalid age: ${age}`);
//     this.name = 'ValidationError';
//   }
// }

// function test(age) {
//   if (age > 10) {
//     // throw new Error('age should be less then 10');
//     // const error = new Error('age should be less then 10');
//     // error.age = age;
//     // throw error;
//     throw new InvalidAge(age);
//   }
//   // throw new Error('another');
//   return age * 2;
// }

// console.log(test(11));

// try {
//   console.log(test(11));
// } catch (e) {
//   alert(e.message);
//   console.dir(e);
// }

// try {
//   test(11);
// } catch(e) {
//   if (e.age) {
//     const res = test(8);
//     console.log(res);
//   } else {
//     throw e;
//   }
// }

// try {
//   throw new Error('my message');
// } catch(e) {
//   console.log(e.message, e.stack, e.name);
// }

// * JSON.parse error

// const json = '{\'a\':1}';
// // const data = JSON.parse(json);
// // console.log(data);
// try {
//   const data = JSON.parse(json);
//   console.log(data);
// } catch(err) {
//   console.log(err, json);
// }

 // ! Callback problem

// const users = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'White',
//     age: 32,
//     active: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 23,
//     active: true,
//   }
// ];

// function saveData(data, callback) {
//   setTimeout(() => {
//     callback({
//       status: 200,
//       data: 'data is saved',
//     });
//   }, 2000);
// }

// function getUsers(callback) {
//   setTimeout(() => {
//     callback(users);
//   }, 2000);
// }

// console.log('init');

// getUsers(function (users) {
//   console.log(users);
//   const updatedUsers = users.map(user => ({
//     ...user,
//     title: `${user.name} ${user.surname}`,
//   }));
//   console.log(updatedUsers);
//   saveData(updatedUsers, function () {
//     console.log('saved');
//   });
// }); 
