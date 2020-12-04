console.log('Lection 6 - Object');
/**
 * - Объект
 * - Ключами объекта являются строки
 * - Доступ к свойствам объекта
 * - Добавить/изменить ствойство
 * - Удалить свойство
 * - Проверка существования свойства. in
 * - Цикл for in
 * - hasOwnProperty(), Object.getOwnPropertyNames()
 * - Копирование по ссылке
 * - Сравнение объектов
 * - Клонирование объектов
 */

//

// const good = ['Car', 3000, 'Red car'];

// const good = {
//   name: 'Car',
//   price: 3000,
//   description: 'Red car',
// };

// ! Объект
// const user = {
//   id: 1,
//   name: 'John',
//   age: 32,
//   status: true,
//   cart: {
//     date: '2020-03-01',
//   },
// };

// console.log(user.name);
// user.name = 'Jane';
// console.log(user.name);
// console.log(user.cart.date);
// console.log(user);

// const user = {
//   'id': 1,
//   'name': 'John',
//   'age': 32,
//   'valid': true,
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
//   anotherField: 'aaa',
//   'another field': 1,
// };
// console.log(user);

// ! Ключами объекта являются строки

// const user = {
//   1: 'John',
// };
// console.log(user);
// const user = {
//   'is-valid': true,
// };

// const key = 'name';

// const arr = [1, 2];

// const user = {
//   'status': true,
//   [arr]: 'arr value',
// };

// console.log(arr.toString());

// console.log(user);

// ----

// ! Доступ к свойствам объекта
// const user = {
//   'id': 1,
//   name: 'John',
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
//   'some property': 25,
// };
// console.log(user.name);
// console.log(user.cart);
// console.log(user.cart.date);
// console.log(user.cart.items[0].price);
// console.log(user.some property); // Don't work
// console.log(user['some property']);
// const userCollection = [ // Collection
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'James',
//   },
// ];

// console.log(userCollection[1].name);

// let james = null;

// for (let i = 0; i < userCollection.length; i++) {
//   if (userCollection[i].name === 'Jane') {
//     james = userCollection[i];
//   }
// }

// console.log(james);


// ! Добавить/изменить ствойство
// ---
// const user = {
//   age: 25,
// };
// user.name = 'John';
// user.valid = true;
// console.log(user);

// user['some property'] = 'test';
// console.log(user);

// user.cart = {
//   items: []
// };
// console.log(user);

// ! Удалить свойство
// const user = {
//   age: 25,
//   name: 'John',
//   [1 + 20]: 'test',
//   valid: true,
//   name: 'Jane',
//   [2 + 19]: 'test2',
// };

// console.log(user);
// delete user.name;
// user.name = undefined;
// console.log(user.name);

// ! Проверка существования свойства. in

// const user = {
//   age: 25,
//   name: 'John',
//   // name: undefined,
// };

// console.log(user.name);

// if (user.name !== undefined) {
//   console.log('Exists');
// } else {
//   console.log('no exists');
// }

// const key = 'status';

// console.log(key in user);

// ---

// ! Цикл for in

// const user = {
//   age: 25,
//   name: 'John',
//   status: true,
// };

// for (let i = 0; i < 100; i++) {}

// for (let propertyName in user) {
//   console.log(propertyName, user[propertyName]);
// }

// --


// * Массивы это объекты

// const arr = [1, 2, 3, 4];
// // console.log(typeof arr);

// // console.log(typeof []);

// for (let propertyname in arr) {
//   // console.log(typeof propertyname);
//   console.log(propertyname, arr[propertyname]);
// }


// for (let i in arr) {
//   console.log(i);
//   console.log(arr[i]);
// }

// ! hasOwnProperty(), Object.getOwnPropertyNames()

// const animal = {
//   eats: true,
// };

// const cat = {
//   voice: 'meow',
//   name: 'aa',
//   __proto__: animal,
// };
// console.log(cat);
// for (let propertyName in cat) {
//   if (cat.hasOwnProperty(propertyName)) {
//     console.log(propertyName);
//   }
// }

// console.log([1, 2]);
// console.log({ name: 'Jane' });

// console.log(Object.getOwnPropertyNames(cat));

// ! Копирование по ссылке


// let initialVar = 'initial';
// let anotherVar = 'some value';
// anotherVar = initialVar;
// console.log(initialVar);
// console.log(anotherVar);
// initialVar = 'another value';
// console.log(initialVar);
// console.log(anotherVar);

// 1
// 'initial'  |  'initial'
// 'initial' | 'anotherValue'
// 2
// 'anotherVar' |  'initial'
// initialVar   |  anotherVar

// const user = {
//   age: 25,
//   name: 'John',
// }
// const anotherUser = user;
// console.log(user);
// console.log(anotherUser);
// user.name = 'James';
// console.log(user);
// console.log(anotherUser);

// 1
// {name: 'John', age: 25} |
// user       anotherUser  |
// 2
// {name: 'James', age: 25} |
// user       anotherUser  |


// ! Сравнение объектов
// const obj = {
//   name: 'John',
//   cart: {
//     date: '2020-10-10',
//   },
// };

// const anotherObj = {
//   name: 'John',
//   cart: {
//     date: '2020-10-10',
//   },
// };

// console.log(obj.cart === anotherObj.cart);
// console.log([1] === [1]);
// let anotherObj;

// anotherObj = obj;

// console.log(obj === anotherObj);

// console.log(obj.name === anotherObj.name);


// console.log(obj === anotherObj);
// console.log({} === {});

// ! Клонирование объектов

// const obj = {
//   age: 25,
//   name: 'John',
// };

// const copy = {};

// for (let name in obj) {
//   if (obj.hasOwnProperty(name)) {
//     copy[name] = obj[name];
//   }
// }
// console.log(copy);
// console.log(obj === copy);

// console.log(obj.name === copy.name);

// * Object.assign(target, ...sources)
// https://caniuse.com/#search=object.assign

// const obj = {
//   age: 25,
//   name: 'John',
// };

// const anotherObject = {
//   status: true,
//   name: 'Jane',
// };

// const copy = {};

// Object.assign(copy, obj, anotherObject);

// console.log(copy);
// const obj = {
//   age: 25,
//   name: 'John',
//   cart: {
//     date: '2020-10-01',
//   },
// };

// const anotherObject = {
//   status: true,
//   name: 'Jane',
// };
// const copy = Object.assign({}, obj, anotherObject, { name: 'John' });
// const copy = Object.assign({}, obj);
// console.log(copy);
// console.log(copy.cart === obj.cart);


