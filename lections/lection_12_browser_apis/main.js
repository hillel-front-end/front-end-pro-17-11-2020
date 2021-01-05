console.log('Lection 12');

/**
 * - Javascript в браузере
 * - Объект window
 * - window.window - рекурсия
 * - Таймеры. Асинхронность
 * - location
 * - screen
 * - navigator
 * - history
 * - History API
 */

// ! Javascript в браузере

// ! Объект window
// var globalVariable = 'value';
// window.anotherGlobalVariable = 'value 2';
// console.log(Array);
// console.log(window.Array);
// console.dir(Function);

// ? document, location, navigator, screen, history

// ! window.window - рекурсия
// console.log(window.window.Array);
// console.dir(window.window.window.window.Array); // window.window

// console.log(window.window.window.console.log);

// ! Таймеры. Асинхронность

// * setTimeout(<callback>, <ms>);

// console.log('Start');

// setTimeout(function () {
//   console.log('Hello from timer');
// }, 5000);

// setTimeout(function () {
//   console.log('Second timer');
// }, 3000);

// console.log('End');

// const handler = function () {
//   console.log('async');
// }

// setTimeout(handler, 2000);

// console.log('sync');

// setInterval(function () {
//   console.log('interval');
// }, 1000);

// let i = 0;
// const counter = setInterval(function () {
//   console.log(i++);
// }, 1000);

// console.log(counter);
// clearInterval(counter);

// setTimeout(function () {
//   clearInterval(counter);
// }, 5000);

// setTimeout(clearInterval.bind(null, counter), 5000);

// const timer = setTimeout(function () {
//   console.log('Hello world');
// }, 5000);

// clearTimeout(timer, 2000);

// window.onclick = function () {
//   console.log('Clicked');
// }

// window.onclick = function () {
//   console.log('Second handler');
// }

// window.addEventListener('click', function () {
//   console.log('Third handler');
// });
// console.log('sync');

// * setInterval(<callback>, <ms>);

// let i = 0;

// setInterval(function() {
//   console.log(i++);
// }, 1000);

// console.log('sync');

// * clearTimeout, clearInterval

// const timer = setInterval(function () {
//   console.log('interva');
// }, 2000);

// window.onclick = function () {
//   clearInterval(timer);
// }


// ! alert, confirm, prompt - прерывают выполнение скрипта

// alert('Hello');
// console.log(confirm('Confirm'));
// prompt('Enter value');

// let i = 0;


// setInterval(function () {
//   console.log(++i);
// }, 1000);

// alert('Hello world');

// let i = 0;
// setInterval(function () {
//   console.log(i++);
// }, 1000);

// setTimeout(function () {
//   alert('hello world');
// }, 5000);

// ! location

// console.log(window.location);

// window.location = 'http://google.com';

// setTimeout(() => {
//   // window.location = 'http://google.com';
//   window.open('http://google.com');
// }, 3000);

// * изменение свойст
// window.location.hash = '25';

// window.onhashchange = function () {
//   console.log(window.location.hash);
// }

// * window.location change 
// window.location = 'http://google.com';

// * Методы
// setTimeout(() => {
//   window.location.reload();
// }, 2000);

// window.location.assign('http://google.com');

// window.location.replace('https://www.google.com/maps/');

// ! screen
// console.log(screen);
// console.log(window.screen.width, window.screen.height);
// console.log(window.screen.availWidth, window.screen.availHeight);
// console.log(window.screen.pixelDepth); // глубина цвета - кол-во бит на пиксель

// ! navigator
// console.log(navigator); // для сбора статистики
// if (window.location !== undefined)

// ! history
// console.log(history);
// history.back(); // переход на предыдущую страницу
// history.forward(); // переход на следующую страницу
// history.go(-2);
// // history.go(2);
// // * Навигация через hash
// const contentEl = window.document.getElementById('content');

// const links = {
//   main: 'This is the <strong>main</strong> page',
//   about: 'This is the <strong>about</strong> page',
//   downloads: 'This is the <strong>downloads</strong> page',
// };

// var updateState = function () {
//   // console.log(window.location.hash);
//   const hash = window.location.hash.slice(1);
//   const content = links[hash];
//   contentEl.innerHTML = content;
// };

// window.addEventListener('hashchange', updateState);
// window.addEventListener('load', updateState);

// * History API

// const contentEl = window.document.getElementById('content');

// const links = {
//   main: 'This is the <strong>main</strong> page',
//   about: 'This is the <strong>about</strong> page',
//   downloads: 'This is the <strong>downloads</strong> page',
// };

// // history.pushState({}, '', '/about');
// // history.replaceState()

// const navEl = document.querySelector('.nav');

// const updateState = function (state) {
//   if (!state) {
//     return;
//   }
//   const content = links[state.page];
//   console.log(state.page);
//   contentEl.innerHTML = content;
// }

// navEl.addEventListener('click', function (event) {
//   if (event.target.tagName !== 'A') {
//     return;
//   }
//   event.preventDefault();
//   const href = event.target.getAttribute('href');
//   console.log(href);
//   const state = {
//     page: href.slice(1),
//     title: 'aa',
//   };
//   updateState(state);
//   history.replaceState(state, '', href);
// });

// window.addEventListener('popstate', function (e) {
//   console.log(e.state);
//   updateState(e.state);
// });
// var state = {
//   page: 'about',
// };
// history.pushState(state, '', state.page);

// // history.replaceState()
