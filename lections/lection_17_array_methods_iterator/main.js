console.log('Lection 17');

/**
 * Тайм коды:
 * * - forEach(item, index, arr)
 * * - map((item, index, arr))
 * * - filter(item, index, arr)
 * * - Композиция map, filter
 * * - some/every
 * * - flat
 * * - concat
 * * - reduce(acc, item, index, arr)
 * * - find
 * * - Итератор
 * * - Обратная итерация по строке (Reverse iteration over string)
 * * - Практика рекурсии + Array methods
 */


/**
 * ! forEach(item, index, arr)
 */

 // Array.prototype.forEach

//  const list = [1, 2, 3, -22, 'a', 'b', 'c', { a: true }];
// console.log(Array.prototype);
//  list.forEach(function(item, index, arr) {
//    console.log(item, index, arr);
//  });

// const items = document.querySelectorAll('ul > li');
// console.log(items);
// // console.log(items);
// items.forEach(function(item, index, list) {
//   console.log(item, index, list);
// });

/**
 * ! map((item, index, arr))
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//   },
// ];

// console.log(userCollection);

// const updatedCollection = userCollection.map(function(user, index, collection) {
//   // console.log(user, index, collection);
//   return {
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   };
// });

// const updatedCollection = userCollection.map(user => {
//   return {
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   };
// });

// const updatedCollection = userCollection.map(user => ({
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   })
// );

// const updatedCollection = userCollection.map(user => ({
//   ...user,
//   title: `${user.name} ${user.surname}`,
// }));
// const msg = 'Hello';
// console.log(msg + ' world');
// console.log(`${msg} world ${msg}`);
// console.log(`
//   Hello
//   world
// `);
// console.log('
// hello
// world
// ');
// console.log(updatedCollection);
// console.log(userCollection === updatedCollection);

/**
 * ! filter(item, index, arr)
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//     isActive: true,
//   },
//   {
//     id: 3,
//     name: 'David',
//     surname: 'Black',
//     age: 22,
//     isActive: false,
//   },
// ];


// const filteredCollection = userCollection.filter(function(item, index, collection) {
//   // if (item.age < 25) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   // return item.age < 25;
//   // return item.age < 25 && item.isActive;
//   // if (item.age < 25 && item.isActive) {
//   //   return true;
//   // }
//   // return false;
//   // return item.age < 25 && item.isActive;
// });
// const filteredCollection = userCollection.filter(item =>
//   item.age < 25 && item.isActive
// );
// 

// // console.log(userCollection);
// console.log(filteredCollection);
// console.log(filteredCollection === userCollection);

/**
 * ! Композиция map, filter
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//   },
// ];

// const addTitle = user => ({
//   id: user.id,
//   name: user.name,
//   surname: user.surname,
//   title: `${user.name} ${user.surname}`,
// });

// const container = document.createElement('ul');
// const newCollection = userCollection
//   .filter(item => item.age < 25)
//   .map(addTitle)
//   .map(user => {
//     const element = document.createElement('li');
//     element.innerHTML = user.title;
//     return element;
//   })
//   .forEach((element, index, collection) => {
//     container.appendChild(element);
//   });
// // console.log(newCollection);
//   // .forEach();

//   document.body.appendChild(container);

// const filteredCollection = userCollection.filter(user => user.age < 25);
// const collectionWithTitle = filteredCollection.map(user => {
//   return {
//     id: user.id,
//     name: user.name,
//     surname: user.surname,
//     title: `${user.name} ${user.surname}`,
//   };
// });

// const nodeCollection = collectionWithTitle.map(user => {
//   const $element = document.createElement('li');
//   $element.textContent = user.title;

//   return $element;
// });

// console.log(nodeCollection);

// console.log(newCollection);
  // .forEach(element => {
  //   container.appendChild(element);
  // });
// console.log(container);


// ! some/every

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//     age: 25,
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//     age: 20,
//     isActive: true,
//   },
// ];

// const some = userCollection.some(user => {
//   return user.isActive;
// });
// console.log(some);

// const every = userCollection.every(user => {
//   return user.isActive;
// });
// console.log(every);

// const arr = [1, 2, 3, '1', '2', NaN];
// const arr = [1, 2, 3];

// const allNumbers = arr.every(item => {
//   return typeof item === 'number' && !isNaN(item);
// });
// const isArrayOfNumbers = arr => arr.every(item => typeof item === 'number' && !isNaN(item));
// const isArrayOfNumbers = arr => arr.every(item => typeof item === 'number' && !isNaN(item));
// console.log(allNumbers);
// console.log(isArrayOfNumbers(arr));






// const numberCollection = arr.every(item => typeof item === 'number' && !isNaN(item));
// console.log(numberCollection);

/**
 * ! flat
 */
// const arr = [[1, 2], [3, 4], {a: true}, 1, 2, 'str', [[0]]];
// console.log(arr.flat());
// console.log(arr.flat() === arr);


/**
 * ! concat
 */
// const arr = [1, 2];
// const second = [3, 4];
// second.forEach(i => arr.push(i));
// const res = arr.concat([3, 4], ['a', 'b', 'c', [0]]);
// console.log(res);
// console.log(arr);

/**
 * ! reduce(acc, item, index, arr)
 */

// const list = [-72,6,4,37,-62,89,-7,63];

// let sum = 0;

// for(let i = 0; i < list.length; i++) {
//     if (list[i] < 0) {
//       continue;
//     }
//     sum += list[i];
// }
// console.log(sum);

// let sum = 0;
// sum = sum + (-72)
// sum = sum + 6

// const res = list.reduce(function (sum, num, index, list) {
//   // sum = sum + num;
//   // return sum;
//   // console.log('sum: ', sum);
//   // if (num < 0) {
//   //   return sum;
//   // }
//   // if (index % 2 === 0) {

//   // }
//   console.log('prev: ', sum);
//   console.log('item: ', num);
//   console.log('res:', sum + num);
//   console.log('---------');
//   return sum + num;
// }, 0);
// console.log(res);


// const res = list.reduce(function(acc, item, index, list) {
//   if (item > 0) {
//     acc += item;
//   }
//   return acc;
// }, 0);
// const res = list.reduce((acc, item) =>
//   item > 0 ? acc + item : acc, 0);

// console.log(res);

// 1: 0, -72, 0, list => 0
// 2: 0, 6, 1, list => 0 + 6 = 6
// 3: 6, 4, 2, list => 6 + 4 = 10
// 4:

// const res = list.reduce(function(sum, value, index, arr){
//     // console.log(sum, value, index);
//     if (value < 0) return sum;

//     return sum + value;
// });

// const arrs = [[5,7,78,8],[3,7,7,453],[1,2,3,4221,412,4]];

// const res = arrs.reduce(function(prev, item){
//     return prev.concat(item);
// }, [])

// console.log(res);

/**
 * ! find
 */

// const userCollection = [
//   {
//     id: 1,
//     name: 'John',
//     surname: 'Green',
//   },
//   {
//     id: 2,
//     name: 'Jane',
//     surname: 'Jonson',
//   },
// ];

// const john = userCollection.find(function(user) {
//   return user.name === 'John';
// });
// console.log(john);


// ! Iterator

// function range(from, to, step = 1) {
//   let num = from;
//   return function () {
//     if (num + step > to) {
//       return {
//         done: true,
//         value: num,
//       };
//     }
//     num += step;
//     return {
//       value: num,
//       done: false,
//     };
//   }
// }

// const generator = range(0, 4, 1);
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator());
function range(from, to, step = 1) {
  let current = from - step;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          current += step;
          // return current;
          return {
            value: current,
            done: current > to
          }
        }
      }
    }
  };
};

// const res = range(0, 4, 1);
// const obj = res[Symbol.iterator]();
// console.log(obj);
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// for (let item of res) {
//   console.log(item);
// }

// const str = 'Hello world';
// console.dir(new String(str));
// for (let ch of str) {
//   console.log(ch);
// }
// const arr = [1,2];
// for (let n of arr) {
//   console.log(n);
// }
// const ul = document.querySelectorAll('li');
// for (let li of ul) {
//   console.log(li);
// }
// console.dir(ul);

// function range(from, to, step = 1) {
//   let current = from;
//   // return {
//   //   next() {
//   //     return {
//   //       value: current += step,
//   //       done: current > to
//   //     };
//   //   }
//   // }
//   // return {
//   //   [Symbol.iterator]: function () {
//   //     return {
//   //       next() {
//   //         return {
//   //           value: current += step,
//   //           done: current > to
//   //         };
//   //       }
//   //     }
//   //   }
//   // }
// }

// const numb = range(0, 4, 1);
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());
// console.log(numb.next());

// for (let n of range(0, 4, 1)) {
//   console.log(n);
// }

// ! Reverse iteration over string

// String.prototype[Symbol.iterator] = function () {
//   const str = this;
//   let index = str.length;
//   // index = index - 1
//   // index--
//   // --index
//   return {
//     next() {
//       return {
//         value: str[--index],
//         done: index < 0,
//       }
//     }
//   };
// };

// const str = 'hello world';
// for (let ch of str) {
//   console.log(ch);
// }
// const obj = str[Symbol.iterator]();
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.dir(str[Symbol.iterator]());

// for(let l of str) {
//   console.log(l);
// }


// for(let l of 'hello world') {
//   console.log(l);
// }

// String.prototype[Symbol.iterator] = function () {
//   let index = this.length;
//   let str = this;
//   return {
//     next() {
//       return {
//         value: str[--index],
//         done: index < 0
//       };
//     }
//   }
// }

// const str = 'hello world';

// for(let l of str) {
//   console.log(l);
// }

 /**
  * ! Practice
  */
 // Deep merge
const treeDeep = {
  value: 'Item 0',
  children: [
      {
          value: 'Item 1',
          children: [
              {
                  value: 'Item 4'
              },
              {
                  value: 'Item 5',
                  children: [
                      {
                          value: 'Item 13'
                      }
                  ]
              },
              {
                  value: 'Item 6',
                  children: [
                      {
                          value: 'Item 14'
                      },
                      {
                          value: 'Item 15'
                      }
                  ]
              }
          ]
      },
      {
          value: 'Item 2',
          children: [
              {
                  value: 'Item 7'
              },
              {
                  value: 'Item 8'
              },
              {
                  value: 'Item 9'
              }
          ]
      },
      {
          value: 'Item 3',
          children: [
              {
                  value: 'Item 10'
              },
              {
                  value: 'Item 11'
              },
              {
                  value: 'Item 12'
              }
          ]
      }
  ]
}

function deepMerge(node) {
  if (!node.children) {
    return [node.value];
  }
  // const list = node.children.map(node => deepMerge(node)).flat().concat([node.value]);
  // const list = node.children.map(node => deepMerge(node)).flat();
  // list.push(node.value);
  // return list;
  // const list = [node.value];
  // const res = node.children.map(node => deepMerge(node).flat());
  // return res;
  // return list.concat(res); 

  return [node.value].concat(node.children.map(node => deepMerge(node)).flat());

  // console.log(list);
  // return [node.value];
}

// const res = deepMerge({
//   value: 'Item 0',
//   children: [
//       {
//           value: 'Item 10'
//       },
//       {
//           value: 'Item 11'
//       },
//       {
//           value: 'Item 12'
//       }
//   ]});
const res= deepMerge(treeDeep);
console.log(res);


