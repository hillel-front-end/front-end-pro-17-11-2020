console.log('Lection 10 - OOP');

/**
 * Занятий не будет: 22, 25, 1, 8
 */

// ! __proto__, prototype

// const user = {
//   name: 'John',
//   greet: function () {
//     console.log(this.name);
//   }
// };
// user.greet();
// console.log(user.toString());
// const arr = [1, 2, 3];
// console.log(arr.join(', '));

// console.log(user.__proto__);

// const arr = [1, 2, 3];
// console.log(arr.toString());

// console.log(arr.valueOf());
// console.dir(new String('a'));
// console.log('a'.someFunc());
// console.log(String);
// console.log(Array);
// console.log(Object);


// const user = {
//   name: 'John',
//   greet: function () {
//     console.log(this.name);
//   }
// };

// const anotherUser = {
//   name: 'Jane',
//   greet: function () {
//     console.log(this.name);
//   }
// };

// console.log(user.greet === anotherUser.greet);

// const arr1 = [1, 2, 3];
// arr1.__proto__.myFunc = function () {
//   console.log('Hello world!');
// }
// const arr2 = [2, 4, 5];

// arr1.myFunc();


// anotherUser.greet();
// user.sayHello();
// console.log(user.toString());
// console.log(user);

// const user = {
//   name: 'John',
//   // greet: function () {
//   //   console.log(this.name);
//   // }
// };

// const anotherUser = {
//   name: 'Jane',
//   // greet: function () {
//   //   console.log(this.name);
//   // }
// };
// user.__proto__.greet = function () {
//   console.log('Hello ' + this.name);
// }

// const car = {};
// car.greet();
// const arr = [];
// arr.greet();
// // console.log(user.__proto__ === anotherUser.__proto__);

// console.log(user);

// user.greet();
// anotherUser.greet();

// Object, Array, String, Boolean, Number, Symbol


// console.log(Array.prototype);
// Array.prototype.mySum = function () {
//   console.log('Sum');
// }

// const arr = [];
// console.log(arr);

// Object.prototype.sayHello = function () {
//   console.log('Hi');
// }

// const obj = {
//   a: 1,
// };


// const arr = [];
// console.log(Object.prototype === obj.__proto__);
// console.log(Array.prototype === arr.__proto__);
// String.prototype
// console.log(arr.__proto__.__proto__ === Object.prototype);
// 

// ----

// ! Object.create



// console.log(user);

// const methods = {
//   greet: function () {
//     console.log('Hello ' + this.name);
//   }
// };

// const user = Object.create(methods);
// const anotherUser = Object.create(methods);

// user.name = 'John';
// anotherUser.name = 'Jane';
// console.log(user);
// console.log(anotherUser);
// user.greet();
// anotherUser.greet();
// console.log(user.greet === anotherUser.greet);


/**
 * Object.create(Person)
 * {
 *    __proto__: Person
 * }
 */
  

// const methods = {
//   constructor: function(name, age) {
//     this.name = name;
//     this.age = age;

//     return this;
//   },
//   greet: function () {
//     console.log('Hello ' + this.name);
//   }
// };

// const user = Object.create(methods).constructor('John', 25);
// const anotherUser = Object.create(methods).constructor('Jane', 21);
// const usr = Object.create(methods).constructor('ane', 21);

// console.log(user);
// console.log(anotherUser);
// user.greet();
// anotherUser.greet();
// user.constructor('John', 25);
// anotherUser.name = 'Jane';
// user.age = 21;
// anotherUser.constructor('Jane', 21);


// ! Function constructor

// const arr = [];
// const arr = new Array(15);
// console.log(arr);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   // console.log(this.greet());

//   // this.greet = function () {
//   //   return 'Hello ' + this.name;
//   // };
//   // return {};
// }

// console.dir(User);

// User.prototype.greet = function () {
//   return 'Hello ' + this.name;
// };

// const john = new User('John', 25);
// const jane = new User('Jane', 21);
// console.log(john.__proto__ === User.prototype);
// console.log(john.greet());
// console.log(jane.greet());
// console.log(john.greet === jane.greet);


// ! Class

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return 'Hello ' + this.name;
  }
}

const john = new User('John', 25);
const jane = new User('Jane', 21);
// console.log(john.greet());
// console.log(john);
console.log(john.greet === jane.greet);

