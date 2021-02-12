console.log('Lection 21 - Promise');

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

//   console.log('updated users: ',updatedUsers);

//   saveData(updatedUsers, function (status) {
//     console.log('saved', status);
//   });
// });


// ! Promise

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     // resolve('success test');
//     reject(new Error('our error'));
//   }, 2000);
//   // setTimeout(() => {
//     // resolve('data');
//     // reject('invalid data');
//   // }, 2000);
// });

// p.then(function (result) {
//   console.log('Fulfilledresult);
// });

// p.catch(function (error) {
//   console.log(error);
// });

// console.log(p);

// p.then(function(result) {
//   console.log('Fulfilled: ', result);
// });

// p.catch(function(error) {
//   console.log('Rejected: ', error);
// });

// * Microtask

// console.log('start');
// const p = new Promise(function(resolve, reject) {
//   // resolve({
//   //   id: 1,
//   //   name: 'John',
//   // });
//   setTimeout(() => {
//     resolve({
//       id: 1,
//       name: 'John',
//     });
//   }, 1000);
// });

// p.then(function(data) {
//   console.log('promise', data);
// });

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// console.log('end');


// * reject

// const p = new Promise(function(resolve, reject) {
//   reject('error');
//   // resolve('success');
// });

// p.then(
//   function(data) {
//     console.log(data);
//   }, function(error) {
//     console.error(error);
//   }
// );
// p.then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//   console.error(error);
// });


// * catch

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     const json = '{"a": "1}';
//     try {
//       const data = JSON.parse(json);
//       resolve(data);
//     } catch(e) {
//         reject(e);
//     }
//   }, 1000);
// });

// p.then(data => {
//   console.log('Fullfiled: ', data);
// }).catch(error => {
//   console.error(error);
// });

// function getData() {
//   const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       const a = '{"a": 1}';
//       try {
//         const data = JSON.parse(a);
//         resolve(data);
//       } catch(e) {
//         reject(e);
//       }
//     }, 1000);
//   });

//   return p;
// }

// getData()
//   .then(data => {
//     console.log('Success: ', data);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// getData().then(function(data) {
//   console.log('data', data);
// }).catch(function(err) {
//   console.log(err.message);
// });

// * status can't be changed

// const p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('data');
//   }, 1000);
//   setTimeout(function() {
//     resolve('second data');
//   }, 3000);
// });

// p.then(function(data) {
//   console.log(data);
// });

// * Promise.resolve, Promise.reject

// const p = new Promise((resolve, reject) => {
//   resolve('some value');
// });

// const p = Promise.resolve('some value');
// p.then(data => console.log(data));

// const p = new Promise(resolve => {
//   resolve('some value');
// });

// const p = Promise.reject('some error');
// p.catch(error => console.log(error));

// ! Promise chain

// const p = Promise.resolve('some data');
// // const p = Promise.reject('error');

// p.then(data => {
//   console.log(data);

//   // return 'some tests string';
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve('some test string');
//       reject('second step error');
//     }, 3000);
//   });
// })
// .catch(error => {
//   console.log('First catch: ', error);

//   // return Promise.resolve(undefined);
//   return 'error catched';
// })
// .then(data => {
//   console.log('second then: ', data);

//   return Promise.resolve('third step');
// }).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.error(error);
// });

// ? Callback hell resolve

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

// function saveData(data) {
//   // setTimeout(() => {
//   //   callback({
//   //     status: 200,
//   //     data: 'data is saved',
//   //   });
//   // }, 2000);
//   return new Promise((resolve => {
//     setTimeout(() => {
//       resolve({
//         status: 200,
//         data: 'data is saved',
//       });
//     }, 2000)
//   }));
// }

// function getUsers() {
//   // setTimeout(() => {
//   //   callback(users);
//   // }, 2000);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(users);
//     }, 2000);
//   });
// }

// console.log('init');

// getUsers(function (users) {
//   console.log(users);

//   const updatedUsers = users.map(user => ({
//     ...user,
//     title: `${user.name} ${user.surname}`,
//   }));

//   console.log('updated users: ',updatedUsers);

//   saveData(updatedUsers, function (status) {
//     console.log('saved', status);
//   });
// });

// getUsers()
//   .then(users => {
//     console.log('fetched data: ', users);
//     return users.map(user => ({
//       ...user,
//       title: `${user.name} ${user.surname}`,
//     }));
//   })
//   .then(updatedUsers => {
//     console.log('updated: ', updatedUsers);
//     return saveData(updatedUsers);
//   })
//   .then(status => {
//     console.log('status: ', status);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// ! Promisify

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

// function getUsers(callback) {
//   setTimeout(() => {
//     callback(users);
//   }, 2000);
// }

// function promisify(func) {
//   return new Promise(resolve => {
//     func(resolve);
//   });
// }

// const p = promisify(getUsers);
// p.then(result => {
//   console.log(result);
// });


// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// console.log('before sleep');
// sleep(2000)
// .then(() => {
//   console.log('after sleep');
// })
// .then(() => {
//   return sleep(1000);
// })
// .then(() => {
//   console.log('after 1s');
// });

// function addListener() {
//   return new Promise(resolve => {
//     document.querySelector('button').addEventListener('click', resolve);
//   });
// }

// addListener()
//   .then(event => {
//     console.log(event);
//   });

// ! Promise.all

// function getUser() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: 'John',
//       });
//     }, 2000);
//   });
// }

// function getGood() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 2,
//           name: 'Juice',
//         }
//       ]);
//     }, 3000);
//   });
// }

// function getCartData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//           id: 3,
//           good: [2],
//         });
//     }, 1000);
//   });
// }

// function rejectDelay(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('time is out');
//     }, time);
//   });
// }

// Promise.all([
//   getUser(),
//   getGood(),
//   getCartData(),
//   rejectDelay(6000),
//   1000,
// ]).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// function rejected() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), 1000);
//  });
// }

// Promise.all([sleep(1000), sleep(5000)]).then(() => {
//   console.log('done');
// });

// * Promise.all - reject

// Promise.all([sleep(500), sleep(5000), rejected()]).then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// * Promise.race

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
}

function rejected(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), time);
 });
}

// Promise.race([sleep(6000), rejected(2000)])
// .then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// Promise.race([sleep(500), rejected()]).then(() => {
//   console.log('done');
// }).catch(() => {
//   console.log('error');
// });

// * Promise.allSetted

// Promise.allSettled([sleep(1500), rejected(2000)]).then(data => {
//   console.log(data);
// });

// * Promise.resolve, Promise.reject

// const p = Promise.resolve('some value');

// const p = new Promise(resolve => {
//   resolve('some value');
// });

// p.then(data => console.log(data));
// const p = Promise.reject('some error');
// p.catch(error => console.log(error));

// ! Promise chain

// function sleep(time) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// function rejected(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), time);
//  });
// }

// sleep(1000).then(() => {
//   console.log('1');
//   // return 10;
//   // return Promise.resolve(10);
//   return Promise.reject('error');
// })
// .catch(error => {
//   console.log(error);
//   return Promise.resolve(undefined);
// })
// .then(() => {
//   console.log('2');
//   // return sleep(2000);
//   // return rejected(2000);
//   return JSON.parse('{a: 1}');
// })
// .then(() => {
//   console.log('3');
//   return {
//     a: 1,
//   };
// })
// .catch(error => {
//   console.log('second error handler', error);
// });

// ? Promise questions


// ? Example

// function saveData(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         status: 200,
//         data: 'data is saved',
//       });
//     }, 2000);
//   });
// }

// function getUsers() {
//   const users = [
//     {
//       id: 1,
//       name: 'John',
//       surname: 'White',
//       age: 32,
//       active: true,
//     },
//     {
//       id: 2,
//       name: 'Jane',
//       surname: 'Jonson',
//       age: 23,
//       active: true,
//     }
//   ];

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(users);
//     }, 2000);
//   });
// }

// const error = new Error('invalid');
// console.log(error.message);
// class CustomError extends Error {
//   constructor(message, data) {
//     super(message);
//     this.data = data;
//   }
// }
// const customError = new CustomError('my custom message', {
//   name: 'JOhnb',
//   id: 2,
// });
// console.log(customError.data);

// try {
//   throw new CustomError('msg', 'some data');
// } catch(e) {
//   if (e.data) {
//     console.log(e.data);
//   } else {
//     throw e;
//   }
// }

// getUsers(function(users) {
//   console.log(users);
// });

// function setUsersStatus(users) {
//   const updatedUsers =  users.map(user => {
//     if (user.age > 30) {
//       user.active = false;
//     }
//     return user;
//   });

//   return updatedUsers;
// }

// getUsers()
// .then(users => {
//   console.log('Fetched: ', users);
//   // const updated = users.map(user => {
//   //   if (user.age > 30) {
//   //     user.active = false;
//   //   }
//   //   return user;
//   // });
//   // saveData(updated, function(response) {
//   //   console.log('Response: ', response);
//   // });
//   const updated = setUsersStatus(users);
//   return saveData(updated);
// })
// .then(users => {
//   console.log('Fetched: ', users);
//   return setUsersStatus(users);
// })
// .then(updateUsers => {
//   return saveData(updateUsers);
// })
// .then(response => {
//   console.log(response);
// });
