console.log('lection 2');

/*
  * - Переменные: var, let, const
  * - Hoisting. Undefined null
  * - Boolean
  * - Сравнение чисел: a < b, a > b, a <= b, a >= b, a == b. Приведение типов к числу
  * - Логические AND, OR
  * - Логическое отрицание - !
  * - If/else
  * - If...else...if...else
*/

// a = 2;
// a + 5;
// ! Создание переменных
// var a;
// a = 10;
// var a = 10;
// var b = 5;
// var a = 10, b = 5;
// var a, b = 10;
// var _a;
// var $b;
// var $ //
// var someString = 'some string';
// var someValue = 'some string'; // Camel case. Good 
// var some_value = 'some'; // Bad
// var a = 10;
// var b = 2;
// var sum = a + b;
// var INITIAL_VALUE = 2;

// console.log('------');

// ! Название переменных не может быть зарезервированным словом:

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%9A%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0
break, case, class, catch, const, continue,
debugger, default, delete, do, else, export,
extends, finally, for, function, if, import,
in, instanceof, let, new, return, super, switch,
this,throw, try, typeof, var, void, while,
with, yield
*/

// ! Переменные: var, let, const

// var someVariable = 'string';
// let someVariable = 'string';
// const num = 1;
// let someVariable = 'some string';
// const num = 2;
// someVariable = 'aaa';
// console.log(someVariable);
// let anotherVariable = 'some string';
// anotherVariable = 'another string';
// console.log(anotherVariable);

// const cc = 'aaa';
// const SOME_CONST = 'bbb';
// cc = 'bbb';
// console.log('-----');


// ! Hoisting. Undefined null
// console.log(preVar);
// var preVar = 'bbb';
// console.log(preVar);
// var preVar = undefined;
// console.log(preVar);
// preVar = 'bbb';
// console.log(preVar);

// console.log('------');
// console.log(letVar);
// let letVar = 'ccc';
// console.log(letVar);

// var a = null;

// console.log(a);

// const arr = [];
// console.log(arr[0]);
// const obj = {};
// console.log(obj.calc);

// let someVar = null;

// console.log('---');
// let someStr = 'string';
// let someNumber = 10;
// console.log('string', typeof someStr);
// console.log('number', typeof someNumber);
// console.log('NaN', typeof NaN);
// console.log('undefined', typeof undefined);
// console.log('null', typeof null);
// console.log('string', typeof '10');

// ! Boolean
// let positive = true;
// let negative = false;

// console.log('---');
// let name = 'John';
// let name = '';
// console.log(Boolean(name));

// console.log(Boolean('string'));

// /** Always false */
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// /** */

// console.log(Boolean(' '));
// console.log(Boolean(1));
// console.log(Boolean(-100));
// console.log(Boolean(10 - 10));

// ! Сравнение чисел: a < b, a > b, a <= b, a >= b, a == b. Приведение типов к числу
// console.log('---');
// console.log(10 > 100);
// console.log(10 < 100);
// console.log(100 <= 100);
// console.log(10 >= 100);
// const a = 10;
// const b= 100;
// const res = a < b;
// console.log(res);
// console.log(1 + 2 + 6 > 4);
// console.log(1 + 2 <= 4 + 2);

// console.log(22 == 22);
// console.log(22 === 22);
// console.log(22 == '22');
// console.log(22 === '22');
// console.log(22 === +'22');
// console.log('a' === 'ab');
// console.log('aaa' > 'ab');
// console.log(10 < 11);
// console.log (1 + 2 == 3);
// ! Отличие == и ===

// const someStr = '0';
// const someDigit = 0;
// console.log(someStr == someDigit);
// console.log(someStr === someDigit);
// console.log('---');
// ! Логические AND, OR
// AND - &&
// OR - || (pipe)

// console.log(true && false);
// console.log(' ' && 'a')
// console.log(true && true && true);
// console.log(true && true);
// console.log(true && false);

// console.log(true || false);
// console.log(false || true || false);

// console.log(true || true || true);
// console.log(true || true);

// console.log(false && true || false);

// console.log('b' || 'a');
// console.log('b' && 'a');

// let userName = 'John';
// let userName = '';

// let greetingName = userName || 'User';

// console.log(greetingName);

// let authStatus = false;

// let name = authStatus && 'John';
// console.log(name);


// console.log('---');
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// const boolVar = false;
// console.log(boolVar && true);

// console.log(boolVar && 'some string');
// console.log(boolVar || 'some string');
// const str1 = '';
// console.log(str1 || 'default string');
// const str2 = str1 || 'default' + ' ' + 'string';
// console.log(str2);
// console.log(str1 || prompt('please, enter some value'));
// console.log(str1 || '');
// console.log(false && false);

// let фффф = 'aaa';
// console.log(фффф);

// console.log(true && true && true);
// console.log(true && true && false);
// console.log(true || false);
// var someString = "";
// var newString = someString || "default string";
// console.log(newString);

// ! Логическое отрицание - !
// console.log(!true);
// console.log(!false);
// console.log(!0);
// console.log(!!0);
// console.log(Boolean('a'));
// console.log(!!'a');
// console.log(!'');
// console.log(100 !== 100); // Good
// console.log('100' != 100); // Bad

// console.log(!false);
// console.log(!(false || true));
// console.log(!false || true);
// console.log(!'str');
// console.log(!!'str');

// let pos = true;
// let neg = false;
// console.log(!pos); // false
// console.log( !(pos || neg) );
// console.log( !(true || false) );
// console.log( !(true) );
// console.log( false );

// !  If/else
// console.log('---');
// {} - блок инструкций

// {
//   console.log(1);
//   console.log(2);
// }

/*
  if (условие) {
    блок кода
  }
*/
// const isAuth = false;
// if (10 - 1) {
//   console.log('true');
// }
// if (isAuth) {
//   console.log('Hello John');
// } else {
//   console.log('Hello Guest');
// }
// const digit = 99;
// if (digit < 100) {
//   console.log('Condition is true');
// }
// let someDigit = +prompt('Enter digit');
// if (someDigit < 100) {
//   someDigit += 100;
// }
// console.log(someDigit);

// ! if ... else
/*
  if (условие) {
    блок кода
  } else {
    блок кода
  }
*/

// let enteredDigit = +prompt('Please enter a digit');
// let enteredDigit = Number(prompt('Please enter a digit'));
// if (enteredDigit != 0) {
//   enteredDigit = enteredDigit * 25;
// } else {
//   enteredDigit -= 100;
// }
// console.log(enteredDigit);

// console.log(NaN === NaN);

// ! If...else...if...else
/*
    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    } else {
        блок кода 3
    }

    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    }
*/
const outputMethod = 'alert,console'; // alert || console || both

// if (outputMethod === 'alert') {
//   alert('Hello world!');
// } else {
//   if (outputMethod === 'console') {
//     console.log('Hello world!');
//   }
// }
// if (outputMethod === 'alert') {
//   alert('Hello world!');
// } else if (outputMethod === 'console') {
//   console.log('Hello world!');
// } else if (outputMethod === 'alert,console') {
//   alert('Hello world!');
//   console.log('Hello world!');
// } else {
//   console.error('Incorrect output method');
// }


// let enteredStr = prompt('choose output method: alert, console, document', '');
// console.log(typeof enteredStr);
// document.write(enteredStr);
// document.write('<br />');
// document.write('hello');
// console.log(Math.PI);
const num = +prompt('enter value');
// if (Boolean(num)) {
//   alert('all good');
// } else {
//   alert('incorrect value');
// }

if (isNaN(num)) {
  alert('incorrect value');
} else {
  alert('all good');
}
console.log(num);
// console.log(typeof num === 'number');
// console.log(num === NaN);
// console.log(NaN === NaN);
// const res = isNaN(num);
// console.log(res);
// console.log(isNaN(NaN));

// if (enteredStr === 'alert') {
//   alert(1);
// } else if (enteredStr === 'console') {
//   console.log(1);
// } else if (enteredStr === 'document') {
//   document.write(1);
// } else {
//   alert('Choosen method is incorrect!');
// }
// console.log('---');
