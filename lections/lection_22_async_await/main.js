console.log('Lection 22 - Generators. Async/await');

/**
 * Включить запись
 */

// let usersCollection = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//   }
// ];

// // function editUser(id, updateData) { // id = 2, updatedData = { name: 'Lora' }

// // }
// function editUser(newUserData) { // {id: 2, name: 'Lora' }
//   // usersCollection = usersCollection.map((user) => {
//   //   if (user.id === newUserData.id) {
//   //     return newUserData;
//   //   }
//   //   return user;
//   // });
//   for (let i = 0; i < usersCollection.length; i++) {
//     if (usersCollection[i].id === newUserData.id) {
//       usersCollection[i] = newUserData;
//     }
//   }
// }

// const $table = document.querySelector('table');

// function renderUsers(collection) {
//   const $tbody = document.createElement('tbody');
//   for (let user of collection) {
//     // const $tr = document.createElement('tr');
//     const row = `
//     <tr></tr>
//     `
//   }
//   // $table.querySelector('tbody').innerHTML = html;

//   $table.replaceChild($tbody, $table.querySelector('tbody'));
// } 

// const formData = {
//   id: 2,
//   name: 'Lora',
// };

// editUser(formData);

// let usersCollection = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//   }
// ];

// localStorage.setItem('users', JSON.stringify(usersCollection));

// usersCollection[0].name = 'Taa';

// localStorage.setItem('users', JSON.stringify(usersCollection));


// ! Generators

// function* generator() {
//   console.log('hello');
//   yield;
//   console.log('world');
//   yield;
//   console.log('third part');
//   console.log('');
// }

// // const obj = {
// //   *range() {

// //   }
// // }

// const g = generator();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g);

// console.log(g);

// * Return/receive values

// function* range(start = 0, end = 10) {
//   for (let i = start; i < end; i++) {
//     yield i;
//   }
// }

// const r = range(0, 100);
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());

// for (let num of r) {
//   console.log(num);
// }

// console.log([...r]);

// for (let num of range(0, 10)) {
//   console.log(num);
// }

// console.log([...r]);

// function* range(start = 0, end = 10) {
//   for (let i = start; i < end; i++) {
//     const value = yield i;
//     if (value !== undefined) {
//       i = value;
//     }
//   }
// }

// const r = range();
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next(8));
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// // console.log(r.next(9));
// console.log(r.next());
// console.log(r.next());

// ***
// function* generator() {
//   const person = {
//     name: 'John',
//   };
//   yield person;
//   console.log('From generator: ', person);
// }

// const g = generator();
// const p = g.next().value;
// console.log(p);
// p.name = 'Jane';
// g.next();

// ! Async/await

// async function getUsers () {
//   // await 2;

//   return [
//     {
//       id: 1,
//       name: 'John',
//     },
//   ];
// }

// const p = getUsers();
// p.then(result => {
//   console.log(result);
// });
// console.log(p);

// function fetchUsers() {
//   return new Promise(resolve => {
//     resolve([
//       {
//         name: 'John',
//         age: 25,
//         active: true,
//       },
//       {
//         name: 'Jane',
//         age: 25,
//         active: false,
//       },
//     ]);
//   });
// }

async function fetchUsers() {
  return [
    {
      name: 'John',
      surname: 'White',
      age: 25,
      active: true,
    },
    {
      name: 'Jane',
      surname: 'Jonson',
      age: 25,
      active: false,
    },
  ];
}

// fetchUsers()
//   .then(users => {
//     console.log(users);
//   });

// function delay(time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   })
// }


// await delay(2000);
// console.log('delayed');
// async function getUsers() {
//   // fetchUsers()
//   //   .then(users => {
//   //     console.log(users);
//   //   });
//   console.log('start');
//   await delay(2000);
//   const users = await fetchUsers();
//   console.log(users);
//   await delay(2000);
//   console.log('end');
// }

// console.log('start');
// delay(2000)
//   .then(() => {
//     return fetchUsers();
//   }).then(users => {
//     console.log(users);
//     return delay(2000);
//   }).then(() => {
//     console.log('end');
//   });

// ! Error handling

// function delay(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('invalid value'));
//     }, time);
//   })
// }

// async function fetchUsers() {
//   console.log('start');
//   try {
//     await delay(2000);
//   } catch (e) {
//     console.log(e);
//   }
//   // return 'some value';
//   throw new Error('internal error');
//   console.log('end');
// }

// fetchUsers()
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error)
//   });

// function delay(time) {
//   return new Promise(resolve =>
//     setTimeout(resolve, time));
// }

// function foo() {
//   return 1000;
// }

// async function getUsers() {
//   // const users = fetchUsers();
//   // console.log(users);
//   const users = await fetchUsers();
//   await delay(2000);
//   const num = await 100;
//   const n = await foo();
//   console.log(users, num, n);
//   return users;
//   const users = await fetchUsers();
//   return users;
// }

// const result = getUsers();
// // console.log(result);
// users.then(collection => console.log(collection));


// users.then(collection => {
//   console.log(collection);
// });



// async function getUsers() {
//   console.log('start');
//   await delay(5000);
//   console.log('continue');
//   const users = await fetchUsers();
//   return users;
// }

// getUsers();

// function delay(time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// }

// * Error handling

// function delayReject(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Time is out');
//     }, time);
//   });
// }

// function parseJson() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         a: 1,
//       });
//       // try {
//       //   JSON.parse('{a: 1}');
//       // } catch(e) {
//       //   reject('Invalid JSON');
//       // }
//     }, 2000);
//   })
// }

// async function getUsers() {
//   try {
//     const data = await parseJson();
//     return data;
//   } catch(e) {
//     console.log(e);
//     return {};
//   }
//   // console.log(data);
//   // const users = await fetchUsers();
//   // console.log(users);
//   // try {
//   //   const error = await delayReject(3000);
//   // } catch(e) {
//   //   console.log(e);
//   // }
//   // try {
//   //   const error = await delayReject(3000);
//   // } catch(e) {
//   //   console.log(e);
//   //   // throw e;
//   // }
// }

// getUsers().then(value => {
//   console.log(value);
// });
// .catch(e => console.log(e));

// * Rewrite prev task by async/await


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

async function getUsers() {
  return [
    {
      id: 1,
      name: 'John',
      surname: 'White',
      age: 32,
      active: true,
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Jonson',
      age: 23,
      active: true,
    }
  ];
}

function setUsersStatus(users) {
  const updatedUsers =  users.map(user => {
    if (user.age > 30) {
      user.active = false;
    }
    return user;
  });

  return updatedUsers;
}

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

async function saveData(data) {
  return {
    status: 200,
    message: 'data is saved',
  }
};

function delay(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function updatedUsers() {
  const users = await getUsers();
  await delay(2000);
  console.log({...users[0]});
  const updatedUsers =  setUsersStatus(users);
  console.log(updatedUsers);
  // const response = await saveData(updatedUsers);
  // return response;
  // const status = await saveData(updatedUsers);
  // return status;
  await delay(2000);
  return await saveData(updatedUsers);
}

updatedUsers().then(response => console.log(response));

