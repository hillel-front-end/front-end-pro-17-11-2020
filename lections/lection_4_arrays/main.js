console.log('Lection 4: Arrays');

/**
    Тайм коды:
    * - МАССИВЫ
    * - Доступ к элементам массива
    * - Изменение длины массива с помощью length
    * - Добавление элемента в массив
    * - Оператор delete
    * - Перебор массивов с помощью цикла for
    * - Добавление элемента в конец массив PUSH
    * - Добавление элемента в начало массива UNSHIFT(...elements)
    * - Получить последний элемент массива и удалить его из массива POP
    * - Получить первый элемент и удалить его из массива SHIFT
    * - Метод slice(start, [end])
    * - Метод splice(start, deleteCount, ...items)
    * - Метод join(separator)
    * - Метод Array.concat(Array)
    * - typeof [], Array.isArray()
    * - Генерация рандомных чисел
    * - Array.prototype.sort() ([].sort())
*/

// ! МАССИВЫ

// let a = [];
// let cities = ['Odesa', 'Kyiv'];
// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];
// let data = ['Odesa', 1, 100, -100, true, false, []];
// let arr = [1, 2, 3, 4, false, true, 'gello', 2];
// console.log(arr);
// console.log(arr.length);

// ! Доступ к элементам массива

// let arr = [1, 2, 3, 4, false, true, 'gello', 2];
// console.log(arr[6]);
// console.log(arr[arr.length - 1]);
// console.log(arr[arr.length - 2]);
// console.log(arr[0] + arr[2]);
// console.log( arr[0] + A[2] );
// console.log(arr);
// arr[1] = 10;
// console.log(arr);
// arr[1] = 10;
// console.log(arr);


// arr[2] = 60;

// console.log(arr);
// console.log(arr[2]); // 23
// console.log(arr[0]); // 7

// let arr = [];`
// arr[0] = 1;
// console.log(arr);

// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];

// console.log(arr[arr.length - 5]);

// console.log(arr[arr.length - 1]); // last

// ----------------------------------
// ! Изменение длины массива с помощью length
// let A = [];
// A.length = 5;
// A[4] = 'end';
// A[5] = 'last one';
// A[1000] = 'test';
// A.length = 5;
// console.log(A[1000]);
// console.log(A[4] );
// console.log(A[1000]);


// let arr = [];
// let index = 0;
// while(index <= 5) {
//     let digit = +prompt('enter a digit');
//     if (isNaN(digit)) {
//         break;
//     }
//     arr[index] = digit;
//     index++;
// }
// console.log(arr);

// let arr = [0.1, 'string', true, false, null, NaN];
// console.log(arr);


// for(i = 0; i < A.length; i++) {
//     A[i] = prompt();
// }

// console.log(A);

// ! Добавление элемента в массив

// let arr = [1, 2, 3, 4];
// arr[0] = 25;
// const num = 5;
// arr[num + 1] = 6;
// arr[arr.length] = 3;
// console.log(arr);

// let arr = [];
// // let index = 0;
// while(arr.length < 3) {
//     let digit = +prompt('enter a digit');
//     if (!digit) {
//         break;
//     }
//     arr[arr.length] = digit;
// }
// console.log(arr);
// // [] -> 0
// // [9] -> 1
// console.log(arr);

// ! Оператор delete
// let arr = [1, 2, 3];
// delete arr[1]; // arr[1] = undefined;
// arr[1] = undefined;
// console.log(arr);

// ! Перебор массивов с помощью цикла for
// let sum = 0;
// let arr = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];
// // arr[0];
// // arr[1];
// for (let i = 0; i < arr.length; i++) {
//   // if (arr[i] < 0) {
//   //   console.log(arr[i]);
//   // }
//   sum += arr[i];
// }
// console.log(sum);
// let index = 0;
// while(index < arr.length) {
//   console.log(arr[index]);
//   index++;
// }
// B = [false, true, 'hello', 10];

// for(i = 0; i < B.length; i++) {
//     // console.log(B[i]);

//     if (i == 1) {
//         break;
//     }
// }
// B.length = 2;

// ! Добавление элемента в конец массив PUSH(...elements)
// let arr = [1, 2, 3];
// arr.push(4, 6, 10, 100);
// arr[arr.length] = 100;
// arr[arr.length] = 999;
// console.log(arr);
// let arr = [];
// while(true) {
//     let digit = +prompt('enter a digit');
//     if (!digit) {
//         break;
//     }
//     arr.push(digit);
// }
// console.log(arr);

// ! Добавление элемента в начало массива UNSHIFT(...elements)
// let arr = [1, 2, 3];
// arr.unshift(4);
// arr.unshift(4, 5, 6);
// console.log(arr);

// ! Получить последний элемент массива и удалить его из массива POP()

// let arr = [1, 2, 3];
// console.log(arr);
// arr.pop();
// let lastElement = arr.pop();
// console.log(lastElement);
// console.log(arr.pop());
// console.log(arr);

// ! Получить первый элемент и удалить его из массива SHIFT()

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// ! Метод slice(start, [end])

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(arr.slice(2, 5));
// console.log(arr.slice(2));
// console.log(arr);
// const newArr = arr.slice(0, -2);

// console.log(arr.slice(0, -2));
// console.log(arr.slice(2));

// let arr = [1, 2, 3];
// console.log(arr.slice());
// console.log(arr.shift());
// console.log(arr);

// ! Метод splice(start, [deleteCount, [...items]])

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(arr.splice(0, 2));
// console.log(arr);
// console.log(arr.splice(2, 2, 'string', 'a', 'b', 'c'));
// console.log(arr);

// ! Метод join(separator)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.join());
// console.log(arr.join('|'));
// let str = arr.join();
// console.log(str.split(','));
// for (i = arr.length; i--;) {
//     arr[i] = '' + arr[i];
// }
// console.log(arr);
// arr.reverse();
// console.log(arr);
// const arr = ['a', 'b', 'c'];
// const str = arr.join();
// const str = '1,2,3,a';
// const str = 'a b c';
// console.log(str.split('b'));
// alert('test\nsecond line');

// ! Метод Array.concat(Array)
// let arr1 = [1, 2, 3];
// let arr2 = [4];
// let arr3 = [7];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));
// console.log(arr1, arr2);
// console.log([].concat(arr1));

// ! typeof [], Array.isArray()
// console.log(typeof []);
// let arr = [];
// let obj = {};
// console.log(typeof arr === 'object');
// console.log(typeof obj === 'object');
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// ----------------------------------


// ! Генерация случайных чисел
// console.log(Math.random());
// console.log( Math.random() ); // 0 .. 1
// let arr = ['a', 'b', 'c'];
// console.log(Math.floor(Math.random() * 201) - 100);
// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(Math.random() * 21) - 10);

 // ! Array.prototype.sort() ([].sort())
// let arr = [1, '111', 11, 9, 3, 2];
// console.log(arr.sort());

// let sorted = arr.sort(function(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   if (a > b) {
//     return 1;
//   }
// });

// let sorted = arr.sort(function(a, b) {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
//   return 0;
// });
 
// let arr = [1, '111', 11, 9, 3, 2];
// let arr = ['1', '111', '11', '9', '3', '2'];

// let sorted = arr.sort(function(a, b) {
//   console.log(a, b);
//   return a - b;
// });
// let sorted = arr.sort();
// console.log(sorted);

// let sortedArr = arr.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// let sortedArr = arr.sort((a, b) => a - b);
