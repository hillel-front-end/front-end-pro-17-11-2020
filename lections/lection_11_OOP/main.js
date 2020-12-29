// const arr = new Array();
// const arr = [];
// console.log(arr instanceof Array);
// const str = 'hello world';
// const str = new String('hello world');
// console.log(str.split('|'));

// ! Class. Static

// const arr = new Array(10);
// console.log(Array.prototype.isArray);
// Array.isArray();

// Math.random()
// Math.min()
// Math.max()
// class Person {
//   static hello = function () {
//     console.log('Hello world');
//   }
//   static gender = ['male', 'female'];

//   someValue = 2;
//   // static createPerson
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log('show from constr: ', this.someValue);
//     // const someValue = 1;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }

// console.log(Person.gender);
// console.log(Person.hello());

// const john = new Person('JOhn', 25);
// console.log(john);
// console.log(Person.gender);
// console.dir(Person);

// function Person(name) {
//   this.name = name;
// }

// console.dir(Person);
// Person.gender = ['male', 'female'];
// Person.hello = function () {
//   console.log('Hello world');
// }
// console.dir(Person.gender);
// Person.hello();


// ? Inheritance (наследование)


// * Object.create

// const Animal = {
//   constructor(name, hasTail, age) {
//     this.name = name;
//     this.hasTail = hasTail;
//     this.age = age;
//     return this;
//   },
//   showTail() {
//     console.log(`I ${this.hasTail ? 'have' : 'don\'t have'} a tail`);
//   }
// };

// // const cat = Object.create(Animal).constructor('Murka', true, 2);
// // console.log(cat);

// const Cat = Object.create(Animal);

// // console.log(Cat);

// Cat.constructor = function (name, age) {
//   // this.name = name;
//   // this.age = age;
//   // this.hasTail = true;
//   Animal.constructor.call(this, name, true, age);
//   return this;
// }

// const murka = Object.create(Cat).constructor('Murka', 2);
// murka.showTail();
// console.log(murka);

// const Person = Object.create(Animal);

// Person.constructor = function (name, age) {
//   // this.name = name;
//   // this.age = age;
//   // this.hasTail = false;
//   Animal.constructor.call(this, name, false, age);

//   return this;
// }

// const john = Object.create(Person).constructor('John', 25);
// console.log(john);
// john.showTail();

// * Prototype

// function Animal(name, hasTail, age) {
//   this.name = name;
//   this.hasTail = hasTail;
//   this.age = age;
// };

// Animal.prototype.showTail = function () {
//   console.log('I ' + (this.hasTail ? 'have' : 'do not have ') + ' tail' );
// };

// const cat = new Animal('Murka', true, 2);
// console.log(cat);

// function Cat(name, age) {
//   // this.name = name;
//   // this.age = age;
//   // this.hasTail = true;
//   Animal.call(this, name, true, age);
// }

// console.log(Cat.prototype);

// Cat.prototype = Animal.prototype;
// const obj = Animal.prototype;

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.voice = function () {
//   alert('Meow');
// }

// const cat = new Cat('Murka', 2);
// cat.showTail();
// cat.voice();
// console.log(cat);

// console.log(Cat.prototype);
// console.log(Cat.prototype.constructor === Cat);

// const dog = new Animal('Sharik', true, 3);
// console.log(dog);
// dog.voice();

// function Person(name, age) {
//   Animal.call(this, name, false, age);
// }

// Person.prototype = Object.create(Animal);
// Person.prototype.constructor = Person;

// Person.prototype.voice = function(message) {
//   alert(message);
// }

// const john = new Person('John', 25);
// console.log(john);

// john.voice('Hello world');

// * Class extends

// class Animal {
//   constructor(name, hasTail, age) {
//     this.name = name;
//     this.hasTail = hasTail;
//     this.age = age;
//   }

//   showTail() {
//     console.log('I ' + (this.hasTail ? 'has' : 'does not have ') + ' tail' );
//   }

//   getNameAge() {
//     return `${this.name}_${this.age}`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, true, age);
//     // this.name = name;
//     // this.age = age;
//   }

//   voice() {
//     alert('Meow');
//   }
// }

// class Person extends Animal {
//   constructor(name, age) {
//     super(name, false, age);
//   }

//   voice(message) {
//     alert(message);
//   }
// }
// const murka = new Cat('Murka', 2);
// console.log(murka);
// murka.voice();
// murka.showTail();

// const john = new Person('John', 25);
// console.log(john);
// john.voice('Hello world');
// john.showTail();


// ! Цепочка вызовов

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   voice() {
//     console.log('Hello, my name is: ', this.name);
//     return this;
//   }
//   logAge() {
//     console.log(`Person: ${this.name} with age: ${this.age}`);
//     return this;
//   }
// }

// const john = new Person('John', 25);
// const result = john.voice();
// console.log(result);
// result.logAge();
// john
//   .voice()
//   .logAge()
//   .voice();
