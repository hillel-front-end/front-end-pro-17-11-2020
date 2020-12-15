'use strict';
console.log('Lection 9 - Context. bind/call/apply');

// ! Object method

// const user = {
//   name: 'John',
//   // age: 25,
//   greet: function() {
//     console.log('Hello, John');
//   },
//   getAge: function() {
//     return 25;
//   }
// };

// console.log(user.greet());
// console.log(user.getAge());


// ! Object this



// const user = {
//   name: 'Jane',
//   age: 25,
//   getAge: function () {
//     return this.age;
//   },
//   greet: function() {
//     // return 'John';
//     // console.log('Jane');
//     // console.log(this.getAge());
//     // console.log(this);
//     // console.log(this.name);
//     // console.log(this.age);
//     // console.log(age);
//   },
// };

// function hello() {
//   console.log(this);
//   console.log(window);
// }

// hello();

// const user = {
//   name: 'John',
// };

// const anotherUser = {
//   name: 'Jane',
// };

// function hello() {
//   console.log(this);
//   return 'Hello ' + this.name;
// }

// user.greeting = hello;
// anotherUser.greeting = hello;

// user.greeting();
// anotherUser.greeting();

// hello();

// ! Bind

// const animal = {
//   name: 'dog',
//   showName: function (message) {
//     console.log(message + ': ' + this.name);
//     console.log(arguments);
//   },
// };

// animal.showName('Hello ');
// const cat = {
//   name: 'cat',
// };

// const newFunc = animal.showName.bind(animal);
// console.log(newFunc === animal.showName);

// animal.showName = animal.showName.bind(cat);
// cat.showName = animal.showName.bind(animal);
// animal.showName('Hello ');
// cat.showName('Hello ');

// let newFunc = animal.showName.bind(animal).bind(cat);
// newFunc = newFunc.bind(cat);

// newFunc('Hello ');

// let newFunc = animal.showName.bind(animal, 'Hello ', 1, 2);
// newFunc(3);

// ! Call, apply

// function greet() {
//   console.log(this, arguments);
// }
// const user = {
//   name: 'John',
//   age: 25,
//   greet: function(message) {
//     console.log(message + ': ' + this.name);
//     console.log(arguments);
//   },
// };

// user.greet('Hello ');

// const anotherUser = {
//   name: 'Jane',
// };

// user.greet.call(anotherUser, 'Hello ', 1, 2, 3);
// user.greet.apply(anotherUser, ['Hello ', 1, 2, 3])

// const arr = [1, 2, 3];

// console.log(Math.max(1, 2, 1000));
// console.log(Math.max.apply(Math, arr));
// console.log(Math.min.apply(Math, arr));

// ! Arrow function

// const sum = (a, b) => {
//   // console.log(a + b);

//   return a + b;
// };

// const sum = (a, b) => a + b;
// const sum = a => a + 10;

// sum(2, 5);
// console.log(sum(2, 5));
// console.log(sum(2));

// const user = {
//   name: 'John',
//   cart: {}
//   // greeting: () => {
//   //   console.log(this);
//   // },
// }

// user.greeting();

// const user = {
//   name: 'John',
//   age: 25,
//   cart: [
//     {
//       id: 1,
//       name: 'coat',
//       available: true,
//     },
//     {
//       id: 2,
//       name: 'hat',
//       available: false,
//     }
//   ],
//   preparePurchase: function () {
    // function make() {
    //     let availableGoods = [];
    //     for (let i = 0; i < this.cart.length; i++) {
    //       if (this.cart[i].available) {
    //         availableGoods.push(this.cart[i]);
    //       }
    //     }

    //     return availableGoods;
    // }
//     const order = {
//       goods: this.cart,
//       makeOrder: () => {
//         // console.log(this);
//         let availableGoods = [];
//         for (let i = 0; i < this.cart.length; i++) {
//           if (this.cart[i].available) {
//             availableGoods.push(this.cart[i]);
//           }
//         }

//         return availableGoods;
//       },
//       // makeOrder: make.bind(this),
//       // makeOrder: function() {
//       //   let availableGoods = [];
//       //   for (let i = 0; i < this.cart.length; i++) {
//       //     if (this.cart[i].available) {
//       //       availableGoods.push(this.cart[i]);
//       //     }
//       //   }

//       //   return availableGoods;
//       // }
//     };
//     return order;
//   }
// }

// const myOrder = user.preparePurchase();

// console.log(myOrder);
// console.log(myOrder.makeOrder());
// const anotherUser = {
//   name: 'Jane',
//   cart: [],
// };

// const anotherOrder = user.preparePurchase.call(anotherUser);
// console.log(anotherOrder.makeOrder());
