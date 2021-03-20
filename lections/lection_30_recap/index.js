// "use strict";
// const foo = () => {
// }
// const obj = {
//   a: function () {
//     console.log(this);
//   },
//   foo: () => {
//     console.log(this);
//   }
// };

// obj.a();
// const f = obj.a.bind(obj);

// console.log(obj.a === f);
// const f = obj.a;
// f.call(obj, 1, 2, 3, 4);
// f.apply(obj, [1, 2, 3]);
// f();

// obj.foo();

// document.querySelector('button').addEventListener('click', obj.a);

// (function () {
//   // var a = 1;
//   for (let i = 0; i < 10; i++) {}
//   console.log(i);
// })();

// console.log(a);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(1000);
//     reject(new Error('error msg'));
//   }, 1000);
// });

// Promise.race()

// p.then(res => console.log(res))
//   .then(() => {})
//   .catch(err => console.log(err));

fetch('/test.json')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(errr => console.log(errr));
