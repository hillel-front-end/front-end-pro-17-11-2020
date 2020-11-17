/**
  ** - Вступление
  ** - Инструкции
  ** - Вывод/ввод данных
  ** - Математические операции
  ** - Переменные
  ** - Типы данных
  ** - Операция сложения
  ** - Приведение типов
  ** - NaN, Infinity
  ** - Undefined, null
  ** - Boolean
  ** - Смарт операции
  ** - Инкремент/Декремент
  ** - Пост/пре инкремент
  ** - Создание и наименнование переменных
  ** - Math
*/

// alert('Hello world');

// https://astexplorer.net

// ! Инструкции // Statement
// alert(1);
// alert(2);
// alert('1');
// [1,2].forEach(alert);
// alert('3');

// ! Блок инструкций

// {
//   alert('1');
//   alert('2');
// }

// ! Вывод/ввод данных
// alert('1');
// console.log(1);

// prompt('Ваше имя');

// ! Математические операции

// 10 - 2;

// console.log(10 - 2);
// console.log(10 + 2);
// console.log(10 / 2);
// console.log(10 * 2);

// ! Переменные
// a = 10;
// console.log(a);
// b = 2;
// c = a + b;
// console.log(a + b);
// console.log(a, b);
// console.log(a); 
// console.log(b); 
// console.log(c);
// alert(c);


// ! Типы данных
// a = 10;

// str = 'string';
// str1 = "string";
// str2 = "stri'ng";
// str3 = 'stri""ng';
// str4 = 'str\'ing';
// str5 = "str\"ing";
// str = ``;
// str5 = 'John';

// ! Операции

// a = 10;
// b = 2;
// c = a + b;
// console.log((a + b) * c);


// s1 = 'Hello ';
// s2 = 'world!';
// s3 = '!!!';
// console.log(s1 + s2 + s3);

// ! Приведение типов
// a = 10;
// a = 'hello';
// s1 = 'Hello';
// s1 = '1';
// console.log(a + s1);
// console.log('10' + 'Hello ');

// console.log(s1 + a);

// console.log(10 + 2 * 'Hello');
// console.log(100 / 2 + 5 * 3 + ' hello');
// console.log('hello ' + 2 + 100 / 2 * 3);
// console.log('hello ' + 2 + 100);

// a = 10;
// a = -70;
// console.log(a);
// b = +10;
// console.log(b);

// a = 10;
// a = 'str';
// console.log(typeof a);
// s5 = +'10';
// console.log(typeof s5);
// s5 = +'str';
// console.log(typeof s5);

// console.log('-------');

// s6 = parseInt('10str');
// console.log(s6);
// console.log(+'10str');
// console.log('str');

// ! Операции над числами

// * 1.8×10^308

// c = 1 / 0;
// console.log(typeof c);
// d = Infinity;
// d = NaN;
// console.log(d);
// console.log(Infinity);
// console.log(0 / 0); // NaN - Not a number
// console.log(parseInt('aaa'));

// d = (5 + 5) / 2;
// console.log(d);
// e = 10 / ( 1 + 1);
// console.log(e);

// g = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
// console.log(g);
// console.log(Number.MAX_VALUE);
// h = -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009;
// console.log(h);

// console.log('Max number: ', Number.MAX_VALUE);
// console.log('Min number: ', Number.MIN_VALUE);

// ! Другие типы данных

// var e;
// var arr = [];
// console.log(null);
// console.log(undefined);
// console.log(e);
// console.log(arr[1]);
// e = null;
// console.log(e);
// console.log(typeof undefined);
// console.log(typeof null);
// e = null;
// console.log(e == null);

// ! Boolean
// console.log(true);
// console.log(false);
// console.log(typeof true);

// console.log('------------------');
// ! Смарт операции

// a1 = 10;
// a1 = a1 + 2;
// a1 += 2;
// console.log(a1);
// a1 = a1 + 2;
// console.log(a1);

// b1 = 20;
// b1 -= 2;
// console.log(b1);

// c1 = 2;
// c1 = c1 * 2;
// c1 *= 2;
// d1 = 4;
// d1 = d1 / 2;
// d1 /= 2;

// c = 12;
// c %= 10;
// console.log(c);

// console.log(12 % 10);

// console.log('---------');
// ! Инкремент/Декремент
// e1 = 10;
// e1 = e1 + 1;
// e1++;
// console.log(e1);
// e1--;
// console.log(e1);
// console.log('---------');
// ++e1;
// console.log(e1);
// --e1;
// console.log(e1);

// ! Пост/пре инкремент
// console.log('---------');
// v1 = 2;
// result = v1++;
// result = v1;
// v1++;
// console.log(result);
// console.log(v1++);
// console.log(v1);
// console.log(v1);
// console.log(++v1, v1 + 1);
// console.log(v1++);
// console.log(v1);

// v1 = 2;
// console.log(v1--);
// console.log(++v1);
// console.log(v1);
// console.log(v1);
// v1 = v1 + 1;
// console.log(v1);

// %
// console.log(11 % 2);
// g = 11;
// g %= 2;
// console.log(g);
