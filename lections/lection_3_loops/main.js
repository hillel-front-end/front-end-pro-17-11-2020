console.log('lection 3');
/**
    Тайм коды:
    * - Switch...case...default. Break;
    * - Тернарный оператор
    * - Циклы
    * - Предусловие
    * - Постусловие
    * - Постусловие
    * - Цикл со счётчиком for
    * - for(;;;) выражения можно пропускать
    * - Break, continue
    * - Решение задачи
    * - Вложенные циклы
    * - Пару слов о for...in, for...of
*/

// ! Switch ... case ... case ... default. Break;
// let enteredStr = prompt('choose output method: alert, console, document', '');
// if (enteredStr === 'alert') {
//     alert('hello world');
// } else if (enteredStr === 'console') {
//     console.log('hello world');
// } else if (enteredStr === 'document') {
//     document.write('Hello world');
// } else {
//     alert('Incorrect value');
// }
// switch (enteredStr) {
//     case 'alert':
//         alert('Hello world');
//         break;
//     case 'console':
//         console.log('Hello world');
//         break;
//     case 'document':
//         document.write('Hello world');
//         break;
//     default:
//         alert('Incorrect value');
// }
// const num = 100;
// switch(num) {
//     case 50 + 50:
//         console.log('success');
//         break;
//     default:
//         console.log('default');
// }
// switch (enteredStr) {
//   case 'alert':
//     alert(1);
//     break;
//   case 'alert':
//     alert(2);
//     break;
//   case 'console':
//     console.log(1);
//     break;
//   case 'document':
//     document.write(1);
//     break;
//   default:
//     alert('Choosen method is incorrect!');
// }
// const flag = true;
// switch (flag) { // Bad
//   case 100 === 100:
//     console.log('ss');
//     break;
// }
// const LOADING = 'a';
// const LOADED = 'b';

// let state = LOADING;
// switch (state) {
//   // case 'loading':
//   case LOADING:
//     console.log('loading');
//     break;
//   case LOADED:
//     console.log('loaded');
//     break;
//   default:
//     console.log('unknown');
// }


// ! Тернарный оператор
// * (выражение) ? инструкция : инструкция;

// const isAuth = true;
// if (isAuth) {
//     name = 'John';
// } else {
//     name = 'Guest';
// }
// var name;
// console.log(name);

// let name = 'John';
// const isAuth = true;

// let name = isAuth ? 'John' : 'Guest';

// let greeting = isAuth ? ('Hello ' + name + '!') : 'Hello Guest';

// isAuth ? alert('Hello ' + name) : alert('Hello Guest');

// const LOADING = 'a';
// const LOADED = 'b';
// let state = LOADING;

// const res = (state === LOADING) ? 'a' : 'b';
// let res;
// if (state === LOADING) {
//   res = 'a';
// } else {
//   res = 'b';
// }

// let res = (10 < 100)
//   ? 'a'
//   : (100 > 10)
//     ? 'b'
//     : 'c';

// if (true) console.log('a'); // BAD
// if (true) {
//   console.log('a'); // GOOD
// }


// ! Циклы

// Для многократного повторения одного участка кода предусмотрены *циклы*.


// ! Предусловие

/* 
    while(условие) {
        блок кода
    }
*/

// let counter = 1;
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }

// let counter = 0;
// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }
// let counter = 0; // start
// while(counter <= 5) {
//   console.log(counter);
//   counter++; 
// }
// console.log('after cycle', counter);

// ! Постусловие

/* 
    do {
        блок кода
    } while(условие)
*/

// let counter = 1; // start
// do {
//   console.log(counter);
//   counter++; 
// } while(counter <= 10);
// console.log('after cycle', counter);

// let num;
// let counter = 0;

// do {
//     num = +prompt('Please enter a number', '');
//     counter++;
//     if (counter === 5) {
//         alert('Incorrect value');
//         break;
//     }
// } while (isNaN(num));

// console.log(num);

// ---------------------------------------

// ! Цикл со счётчиком for

// 1..10
// for (1;2;3) {
//     4
// }
// 1 - зона начальных условий
// 2 - условие выполнения цикла
// 3 - действие между итерациями
// 4 - блок кода

// for (let counter = 1; counter <= 10; counter++) {
//     console.log(counter);
// }

// ! Последовательность
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }
// let i = 0;
// for(; i <= 10; i++) {
//     console.log(i);
// }
// for (; i <= 10;) {
//     console.log(i);
//     i++;
// }
// i, j, k 
// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// --------------------------------------
// let i = 0, j = 120;
// let j = 120;
// j = j * 2;
// j *= 2;

// for (let i = 0, j = 120; i <= 10; i++, j *= 2) {
//     console.log(i, j);
// }
// for(i = 0, j = 120; i <= 5 || j <= 1000; i++, j*=2) {
//     console.log(i, j);
// }



// for(i = 0; i <= 100; i++) {
//     if( i % 2 === 0 ){
//         console.log(i);
//     }
// }

// ! for(;;;) выражения можно пропускать

// for (let i = 0; i <= 10;) {
//     console.log(i);
//     i++;
// }
// let i = 0;
// let a = 0;
// for (; i <= 10;) {
//     console.log(i, a);
//     i++;
// }

// for (let i = 10; i--;) {
//   console.log(i);
// }
// for (i = 10; i > -5; i--) {
//     console.log(i);
// }
// for (i = 10; i--;) {
// 	console.log(i);
// }
// ---------------------------------------

// ! Break, continue
// let counter = 0;
// while(true) {
//     console.log(counter);
//     if (counter > 10) {
//         break;
//     }
//     counter++;
// }
// let sum = 0;
// while(true) {
//     let value = +prompt('please, eneter a digit', '');
//     if (!value) {
//         break;
//     }
//     sum += value;
// }
// console.log(sum);

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// ! Вывести нечетные числа
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {

// если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// ! Вложенные циклы

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i, j);
//     }
// }



// ! Пару слов о for...in, for...of

