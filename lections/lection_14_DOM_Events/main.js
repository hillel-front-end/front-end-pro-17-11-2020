console.log('Lection 14 - DOM. Events')

// ! Events

// ? Добавление обработчиков событий
// function handler(target, color) {
  // alert('button clicked');
  // console.log(arguments);
  // console.log('clicked');
  // console.log(target);
  // target.style.backgroundColor = color;
// }

// const $btn = window.document.querySelector('button');

// $btn.onclick = function(event) {
//   console.log('clicked');
//   console.log(event);
//   event.target.style.backgroundColor = 'yellow';
//   console.log(event.target);
// }

// $btn.onclick = function() {
//   console.log('second handler');
// }

// $btn.addEventListener('click', function (event) {
//   console.log('clicked');
//   console.log(event.target);
// });

// $btn.addEventListener('click', function (event) {
//   console.log('second handler');
//   console.log(event.target);
// });

// const $input = document.querySelector('input');

// $input.addEventListener('keydown', function (event) {
//   console.log('down');
// });

// $input.addEventListener('keyup', function (event) {
//   console.log('up');
//   console.log(event.target.value);
//   // console.log(this);
// });

// $input.addEventListener('change', function (event) {
//   console.log('changed');
//   console.log(event.target.value);
// });

// function inputHandler(event) {
//   console.log('input');
//   console.log(event.target.value);
// }


// $input.addEventListener('input', inputHandler);

// setTimeout(() => {
//   $input.removeEventListener('input', inputHandler);
// }, 5000);

// ? EventTarget

// const input = document.querySelector('input');
// console.dir(input);
// input.addEventListener('keyup', function() {
//   console.log(this.value);
// });

// function handler() {
//   console.log('1: ', this.value);
// }
// function handler2() {
//   console.log('2: ', this.value);
// }
// input.addEventListener('keyup', handler);
// input.addEventListener('keyup', handler2);

// input.removeEventListener('keyup', handler);

// input.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// input.removeEventListener('keyup', function () {
//   console.log('keyup');
// });

// function handler() {
//   const value = this.value;
//   if (value.length > 4) {
//     this.removeEventListener('keyup', handler);
//   }
//   console.log(value);
// }

// input.addEventListener('keyup', handler);

// function handler2() {
//   console.log('2: ', this.value);
// }
// input.addEventListener('keyup', handler);
// input.addEventListener('keyup', handler2);
// input.removeEventListener('keyup', handler2);

// ? Всплытие событий

// const $ul = document.querySelector('ul');

// $ul.firstElementChild.firstElementChild.addEventListener('click', function () {
//   console.log('a clicked');
// });

// $ul.addEventListener('click', function (event) {
//   console.log('ul clicked');
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// $ul.firstElementChild.addEventListener('click', function (event) {
//   console.log('li clicked');
// });

// document.addEventListener('click', function () {
//   console.log('document clicked');
// });

// class Component {
//   constructor() {
//     this.$ul = document.querySelector('ul');
//     this.handler = this.handler.bind(this);
//     this.$ul.addEventListener('click', this.handler);
//     setTimeout(() => {
//       this.$ul.removeEventListener('click', this.handler);
//     }, 5000);
//   }

//   handler(event) {
//     console.log(event.currentTarget);
//     console.log(this);
//   }
// }

// const component = new Component();


// ? Погружение событий (Перехват)

// Погружение -> Цель -> Всплытие

// document.addEventListener('click', function (event) {
//   console.log('document');
//   // event.stopPropagation();
// }, true);

// document.querySelector('#google').addEventListener('click', function (event) {
//   console.log('a');
//   event.stopPropagation();
//   event.stopImmediatePropagation();
// });

// document.querySelector('#google').addEventListener('click', function (event) {
//   console.log('a second handler');
// });

// document.addEventListener('click', function (event) {
//   console.log('document bubbling');
// });

// * stopPropagation()
// document.addEventListener('click', function(event) {
//   console.log('document');
//   event.stopPropagation();
// }, true);

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   console.log('button');
// });

// const p = document.addEventListener('click' ,function () {
//   console.log('p');
// });



// ? Делегирование событий


// function removeUser(event) {
//   if (event.target.tagName === 'BUTTON') {
//     const id = event.target.dataset.id;
//     const action = event.target.dataset.action;
//     switch (action) {
//       case 'edit':
//         console.log(`Edit user: ${id}`);
//         break;
//       case 'remove':
//         console.log(`User removed: ${id}`);
//         break;
//     }
//   }
// }

// const $table = document.querySelector('table');
// $table.addEventListener('click', removeUser);


// ? Пользовательские события

// var btn = document.querySelector('button');
// btn.addEventListener('my-event', function (event) {
//   console.log('fired');
//   console.log(event.detail);
// });

// var customEvent = new CustomEvent('my-event', {
//   bubbles: false,
//   detail: {
//     a: 1,
//   },
// });

// btn.dispatchEvent(customEvent);

// ? onLoad событие

// const button = document.querySelector('button');
// console.log(button);

// window.onload = function () {
//   console.log(document.querySelector('button'));
// };


// ? onScroll

// window.addEventListener('scroll', (e) => {
//   console.log(e);
//   console.log(window.scrollY);
//   console.log(window.scrollX);
// });

// ? Event.preventDefault();

// const $a = document.querySelector('a');

// $a.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event.target.href);
// });



// ! Практика
/**
 * Создать блок на странице. При зажатии мыши на блоке -
 * блок должен перемещатся за мышью до отпускания кнопки.
 */
