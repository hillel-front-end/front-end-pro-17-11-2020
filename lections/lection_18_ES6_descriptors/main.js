/**
 * ! let, const
 */
// const a = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// function test() {
//   console.log(someVar);
//   let someVar = 1;
// }
// test();
// const obj = {};
// obj.some = 1;

/**
 * ! Arrow function
 * 
 * * Отсутствует собственный контекст
 * * Не могут использоваться как функции-конструкторы
 * * Отсутствует arguments
 */

//  function test() {
//    for(let arg of arguments) {
//      console.log(arg);
//    }
//   //  console.log(arguments);
//  }

//  test(1, 2, 3);
// const User = () => {};
// const john = new User();

// const add = (x, y) => x + y;
// const add = (x, y) => {
//   return x + y;
// }
// const square = (x) => x * x;
// const square = x => x * x;
// const stableVal = () => 42;
// const log = () => console.log('hello world');
// console.log(log());
// const multiply = (x, y) => {
//   let result = x * y;
//   return result;
// }
// const getPerson = () => {
//   return {
//     user: 'Bill',
//   };
// };
// const getPerson = () => ({
//   name: 'John',
// });
// const getPerson = () => ({

// })
// const someCalculation = () =>
//   1 + 2 + 4;
// (function() {})();
// (() => {})();

// const calculator = (function() {
//   const sum = (a, b) => a + b;
//   const multiply = (a, b) => a * b;

//   return (a, znak, b) => {
//     switch (znak) {
//       case '+':
//         return sum(a, b);
//       case '*':
//         return multiply(a, b);
//       default:
//         throw new Error('invalid znak');
//     }
//   }
// })();

// console.log(calculator(1, '+', 3));

/**
 * ! Шаблонные строки
 */

// const digit = 5;
// const arr = [1, 2];
// const obj = {
//   name: 'John',
// }
// const $ul = document.querySelector('ul');
// const stream$ = 
// $$.
// const str = `This is my digit value: ${digit + 7}. | ${arr} | ${obj}`;
// alert(`Hello
// world!`);
// console.log(str);
// const a = `test: ${1}`('a');
// console.log(a);
// function some(text) {
//   console.log(text);
// }

// some`hello world!`;

/**
 * ! Значение параметров по умолчанию
 */

// const myFunc = function(value = 5) {
//   console.log(value);
// }

// myFunc(78);

// const myFuncArrow = (secondArg, value = 5) => console.log(value, secondArg);

// // myFunc();
// myFuncArrow(200);

/**
 * ! Spread operator
 */

// function foo(x, y, z) {
//   console.log(x, y, z);
// }
// const arr = [1, 2, 3, 4];
// foo.apply(null, arr);
// foo(...arr);

/**
 * * Найти максимальное число
 */
// const arr = [1, 2, 3];
// console.log(Math.max(1, 2, 3));
// console.log(Math.max.apply(Math, arr));

// console.log(Math.max(...arr));

/**
 * * Копирование массива
 */

// const arr = [1, 2, 3];
// const someArr = ['a', 'b', 'c'];
// const arr2 = [
//   ...arr,
//   56,
//   ...someArr,
//   78,
// ];

// const rr = arr.concat(someArr);
// const rr = [
//   ...arr,
//   ...someArr,
// ];
// console.log(rr);
// console.log(arr2);
//  console.log(arr2, arr === arr2);
//  const anotherArr = [...arr, 4, 5, ...arr, 6];
//  console.log(anotherArr);
//  const str = 'abc';
//  console.log([
//  ...str,
//  'd',
// ]);

/**
 * * Object spread
 */

// const obj1 = {
//   name: 'John',
//   o: {
//     a: 1,
//   },
// }
// const obj2 = {
//   name: 'Jane',
//   age: 22,
//   // name: 'Jane',
//   skills: ['js', 'python'],
// }
// const clone = {
//   ...obj1,
// }
// console.log(clone, obj1 === clone);
// console.log(clone.o === obj1.o);
// const mergeObj = {
//   ...obj1,
//   ...obj2,
//   skills: ['PHP', 'JS'],
// };
// console.log(mergeObj);

// const mergeObj = {
//   ...obj1,
//   ...obj2,
// };
// console.log(mergeObj);

// obj2.skills.push('ruby');
// console.log(mergeObj);
// console.log(mergeObj.skills === obj2.skills);

/**
 * ! Rest operator
 */
// function foo(first, second,  ...args) {
//   console.log(args);
//   console.log(first);
//   console.log(arguments);
// }

// const foo = (first, second, ...args) => {
//   console.log(args);
// }

// foo(1, 2, 3, 4, 5);

// function foo(first, ...rest) {
//   console.log(rest);
// }

// foo(1, 2, 3, 4);

/**
 * ! Деструктивное присваивание. Destructuring
 */
// const arr = ['javascript', 'php', 'python', 'ruby'];
// const js = arr[0];
// const php = arr[1];

// const [js, php, py, rb] = ['javascript', 'php', 'python', 'ruby'];
// const [js, php, ...r] = ['javascript', 'php', 'python', 'ruby'];
// const [js = 5, php] = ['javascript'];
// console.log(js);
// console.log([js, php, py, rb]);
// console.log(php);
// console.log(py);
// console.log(rb);

const user = {
  name: 'Bill',
  age: 30,
  skills: ['javascript', 'php', 'python', 'ruby'],
};

// const name = user.name;
// const age = user.age;
// const { name, age, skills, title } = user;
// const { name, title = 'test', ...r } = user;
// console.log(name, age, skills === user.skills);
// console.log(r, r.skills === user.skills);
// console.log(title);

// // let { name, age, skills } = user;

// // console.log(name);
// // console.log(age);
// // console.log(skills);

// function showUserData({ name, age, skills }, [js]) {
//   // console.log(user.name);
//   // console.log(user.age);
//   // console.log(user.skills);
//   // const { name, age, skills } = user;
//   console.log(name);
//   console.log(age);
//   console.log(skills);
//   console.log(js);
// }
// showUserData(user, ['javascript']);
// function showUserData({ name, age, skills }, { a }) {
// // function showUserData(user) {
//   console.log(name);
//   console.log(age);
//   console.log(skills);
//   // console.log(a);
// }


/**
 * ! entries, keys, values
 */
const arr = ['a', 'b', 'c'];
// const iterator = arr.values();
// console.log(iterator.next());
// console.log(arr.values());
// for (let item of iterator) {
//   console.log(item);
// }
// const iterator = arr.keys();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(arr.entries().next());
// for (let item of arr.entries()) {
//   console.log(item);
// }
// for (let [index, value] of arr.entries()) {
//   console.log(index, value);
// }
// // for (let i of arr.entries()) {
//   // console.log(i);
//   // const [index, value] = i;
// for (let [index, value] of arr.entries()) {
//   // console.log(i);
//   console.log(index);
//   console.log(value);
// }
// console.log(arr.keys());
// for (let key of arr.keys()) {
//   console.log(key);
// }
// for (let value of arr.values()) {
//   console.log(value);
// }

// console.log(arr.values());

// const person = {
//   name: 'Bill',
//   age: 30,
//   skills: ['javascript', 'php', 'python', 'ruby'],
//   obj: {
//     a: 1,
//   },
// }

// console.log(Object.keys(person));

// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }

// for (let value of Object.values(person)) {
//   console.log(value);
// }

// for (let item of Object.entries(person)) {
//   console.log(item);
// }
// for (let [key, value] of Object.entries(person)) {
//   console.log(key, value);
// }

// console.log(Object.entries(person));
// for (let [key, value] of Object.entries(person)) {
//   console.log(key, value);
// }
// console.log(Object.keys(person));
// for (let key of Object.keys(person)) {
//   console.log(key);
// }
// console.log(Object.values(person));
// for (let value of Object.values(person)) {
//   console.log(value);
// }
/**
 * ! Array.from
 */
// console.log(document.querySelectorAll('*'));
// const arr1 = Array.from(document.querySelectorAll('*'));
// console.log(arr1);

// const person = {
//   name: 'Bill',
//   age: 30,
//   skills: ['javascript', 'php', 'python', 'ruby'],
//   obj: {
//     a: 1,
//   },
// }

// console.log(Object.entries(person));

/**
 * ! Object descriptors
 */

// ! get/set

// const person = {
//   name: 'John',
//   surname: 'White',
//   get age() {
//     // return 25;
//     return this._age;
//   },
//   set age(value) {
//     console.log(value);
//     if (value > 120) {
//       throw new Error('Invalid age');
//     }
//     this._age = value;
//   },
//   get title() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// person.age = 56;
// console.log(person.age);
// console.log(person.title);
// person.age = 26;
// console.log(person);

// ! атрибуты свойств (writable, configurable, enumerable) . Дескрипторы свойств
// const person = {
//   // name: 'John',
//   age: 25,
// };

// Object.defineProperty(person, 'name', {
//   writable: false,
//   enumerable: false,
//   configurable: false,
//   value: 'John',
// });

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// Object.defineProperty(person, 'name', {
//   writable: true,
//   enumerable: false,
//   // configurable: true,
//   value: 'John',
// });
// person.name = 'Jane';
// console.log(person);

// for (let key in person) {
//   console.log(key);
// }
// console.log(Object.keys(person));
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// Object.defineProperty(person, 'name', {
//   // writable: false,
//   enumerable: false,
//   configurable: false,
//   // value: 'John',
//   set: function (value) {
//     this._name = value;
//   },
//   get: function () {
//     return this._name;
//   }
// });

// person.name = 'John';
// console.log(person.name);


// person.name = 'Jane';
// const person = {
//   name: 'John',
//   _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// * Object.defineProperty
// const person = {};
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   get: function() {
//     return 'male';
//   },
//   set: function(value) {
//     return value;
//   }
// });
// console.log(person);
// Object.defineProperty(person, 'gender', {
//   value: 'male',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// for (let key in person) {
//   console.log(key);
// }

// Object.defineProperty(person, 'gender', {
//   value: 'female',
// });


// for...in
// Object.keys
// * Object.defineProperties

// Object.defineProperties(person, {
//   gender: {
//     value: 'male',
//     writable: false,
//   }
// });

// * Object.preventExtensions(obj)

// const person = {
//   name: 'John',
//   _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };

// Object.preventExtensions(person);
// person.someFun = 200;
// console.log(person);
// console.log(Object.isExtensible(person));

// * Object.freeze(obj)

// const person = {
//   name: 'John',
//   _age: 25,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     this._age = value;
//   },
// };

// person.surname = 'White';
// Object.freeze(person); // configurable: false, writable: false
// console.log(Object.isFrozen(person));
// Object.defineProperty(person, 'surname', {
//   value: 'White'
// });
// console.log(person);
