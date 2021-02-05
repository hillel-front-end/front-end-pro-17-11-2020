
// const obj = {};

// Object.defineProperty(obj, 'name', {
//   value: 'John',
//   writable: false,
// });

// Object.defineProperties(obj, {
//   surname: {
//     value: 'White',
//     writable: false,
//   },
//   age: {
//     value: 25,
//   },
// });

// console.log(obj);

// ! Object.create + descriptors
// const prototype = {
//   showAge: function () {
//     console.log(this.age);
//   }
// };
// const person = {
//   __proto__: prototype,
// }
// const person = Object.create(prototype, {
//   name: {
//     value: 'John',
//     writable: false,
//     enumerable: false,
//   },
//   age: {
//     value: 25,
//     enumerable: true,
//   },
// });

// console.log(person);
// person.showAge();
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// console.log(Object.getOwnPropertyDescriptors(person));


// console.log(JSON.stringify(person));
// person.showAge();


// function main() {
//   multiply(2, 3);
// }

// function multiply(a, b) {
//   return a * b;
// }

// main();

/**
 * ! JSON
 * Типы данных:
 * - Объекты
 * - Массивы
 * - Примитивы:
 *   - Строки
 *   - Числа
 *   - Логические значения true/false
 *   - null 
 */
/**
 *! JSON.stringify
 */
// {
//   "name": "John",
//   "age": 25,
//   "isActive": true, // false,
//   "cart": null,
//   "languages": ["PHP", "JS"]
// }

// Date.prototype.toJSON = function () {
//   return '2021';
// };
// let person = {
//   name: 'Bill',
//   surname: 'Gates',
//   age: 64,
//   isActive: true,
//   skills: ['C++', 'JS'],
//   prop: null,
//   obj: {
//     name: 'test',
//   },
//   birth: new Date('1993-01-01'),
// };


// console.log(JSON.stringify(person, null, 2));
// console.log(JSON.stringify(person, ['name', 'surname', 'age'], 2));
// console.log(JSON.stringify(person, function (key, value) {
//   console.log(key, typeof value);
//   if (key === 'birth') {
//     return '2022';
//   }

//   return value;
// }, 4));


// const now = new Date();
// console.dir(now);

// -----

// let anotherPerson = {
//   name: 'Jane',
//   surname: 'White',
//   age: 28,
//   skills: ['Go', 'JS'],
//   obj: {
//     name: 'test',
//   }
// };

// person.children = anotherPerson;
// anotherPerson.parent = person;

// console.log(JSON.stringify(person));
// console.log(JSON.stringify(person, ['name', 'age', 'obj'], 2));
// console.log(JSON.stringify(anotherPerson, function (key, value) {
//   console.log(value);
//   if (key === 'name') {
//     return null;
//   };
//   return key !== 'children' ? value : undefined;
// }, 2));

// console.log(JSON.stringify(person, undefined, 2));

// console.log(JSON.stringify(person, undefined, 2))

/**
 * * JSON.parse
 */
// const json = `
// {
//   "name": "Bill",
//   "surname": "Gates",
//   "age": 64,
//   "isActive": true,
//   "skills": [
//     "C++",
//     "JS"
//   ],
//   "prop": null,
//   "obj": {
//     "name": "test"
//   },
//   "birth":"1993-01-01T00:00:00.000Z"
// }
// `;
// const json = `{"name":"Bill","surname":"Gates","age":64,"isActive":true,"skills":["C++","JS"],"prop":null,"obj":{"name":"test"},"birth":"1993-01-01T00:00:00.000Z"}`;

// console.log(JSON.parse(json));
// console.log(JSON.parse(json, function(key, value) {
//   console.log(key, value);
//   return key === 'birth' ? new Date(value) : value;
// }));

// ! WebStorage

// * LocalStorage vs SessionStorage

// localStorage.setItem('token', 'some value 111');
// let value = localStorage.getItem('token');
// console.log(value);

// localStorage.removeItem('token');
// console.log(localStorage.getItem('token'));
// localStorage.clear();

// * Event

// window.addEventListener('storage', event => {
//   console.log(event);
// });

// localStorage.setItem('token', 'aaaaaa111111');



