console.log('Lection 13 - DOM');

// ! DOM - Document Object Model

// ? TextNode
// console.dir(window.document);
// const $p = document.createElement('p');
// console.dir($p);
// const textNode = document.createTextNode('some text');
// console.log(textNode);
// console.dir(textNode);
// $p.append(textNode);
// console.dir($p);

// document.body.append($p);


// p.appendChild(textNode);
// const span = document.createElement('span');
// p.appendChild(span);
// console.log(p);
// console.dir(p);
// -----

// ? Element. createElement
// const p = document.createElement('p');
// console.log(p);
// console.dir(p);
// const textNode = document.createTextNode('inner text');
// p.appendChild(textNode);
// console.log(p);

// ! Поиск элементов

// ? old way
// const $btn = document.getElementById('btn');
// console.log($btn);
// console.dir(btn);
// const btns = document.getElementsByClassName('btn-info');
// console.log(btns);
// for (let i = 0; i < btns.length; i++) {
//   console.log(btns[i]);
// }

// console.log(btns);
// console.dir(btns);

// ? new way
// const btn = document.querySelector('button');
// console.log(btn);
// const btn = document.querySelector('#btn');
// console.log(btn);
// const btn = document.querySelector('.btn-info');
// console.log(btn);
// const p = document.querySelector('.btn-info p')
// console.log(p);
// const elements = document.querySelectorAll('.btn-info');
// console.log(elements);

// console.time('getElementsByClassName');
// console.log(document.getElementsByClassName('btn-info'));
// const $btn = document.getElementById('btn');
// console.timeEnd('getElementsByClassName');

// console.time('querySelectorAll');
// console.log(document.querySelectorAll('.btn-info'));
// console.log(document.querySelector('#btn'));
// console.timeEnd('querySelectorAll');


// ! classList

// const $btn = document.querySelector('button');
// console.log(btn);
// $btn.classList.add('another-class');
// $btn.classList.remove('btn-info');
// console.log($btn.classList);
// console.log($btn.classList.contains('another-class'));
// console.log($btn.classList.contains('btn-class'));
// function makeActive() {
//   $btn.classList.add("btn-active");
// }
// console.log(btn.className);



// btn.classList.add('btn');
// $btn.classList.replace('btn', 'dark-btn');
// console.log(btn.classList.contains('btn'));

// ! Styles

// const $btn = document.querySelector('button');
// console.log($btn.style.backgroundColor);
// $btn.style.backgroundColor = 'blue';
// $btn.style.fontSize = '20px';
// $btn.style.color = 'white';
// console.log($btn.style.backgroundColor);
// var computedStyle = window.getComputedStyle($btn);
// console.log(computedStyle);

// $btn.style.cssText += 'color: red;';
// console.log($btn.style.cssText);
// console.log(computedStyle.cssText);


// ! children. childNodes. Добавление контента

// const $div = document.querySelector('div');
// console.log($div.childNodes);
// console.log($div.children[2].children);

// $btn = $div.children[2].querySelector('button');
// $btn = $div.querySelectorAll('button');
// console.log($btn);


const $ul = document.createElement('ul');
// const $li = document.createElement('li');
// $ul.append($li);
// const $a = document.createElement('a');
// $a.setAttribute('href', 'https://google.com');
// // $text = document.createTextNode('https://google.com');
// // $a.append($text);
// $a.textContent = 'https://google.com';
// $li.append($a);
// $a.style.color = 'red';
// innerHTML
// const link = 'https://google.com';
// $ul.innerHTML = `
//   <li>
//     <a href="${link}" style="color: red;" onclick="alert(0)">${link}</a>
//   </li>
// `;

// document.body.append($ul);
// $ul.insertAdjacentHTML('afterbegin', `
//   <li>
//     <a href="${link}" style="color: red;" onclick="alert(0)">${link}</a>
//   </li>
// `)
// console.log($ul);


// * childNodes

// const btn = document.querySelector('button');
// console.dir(btn.childNodes);

// https://learn.javascript.ru/dom-navigation


// * documentFragment

// const links = ['google.com', 'fb.com'];

// const documentFragment = document.createDocumentFragment();
// for(let i = 0; i < links.length; i++) {
//   const link = document.createElement('a');
//   const text = document.createTextNode(links[i]);
//   const br = document.createElement('br');
//   link.appendChild(text);
//   link.setAttribute('href', links[i]);
//   documentFragment.appendChild(link);
//   documentFragment.appendChild(br);
// }
// console.log(documentFragment);
// document.body.appendChild(documentFragment);



// documentFragment.innerHtml = '<p>test</p>';
// console.dir(documentFragment);


// ! Element size

// * https://learn.javascript.ru/size-and-scroll

// const btn = document.querySelector('button');
// console.log(btn.clientHeight);
// console.log(btn.offsetHeight);
// console.log(btn.offsetTop);

// ? Практика

// !---------------------------------

// ! Events

// ? Добавление обработчиков событий
// function handler(target, color) {
//   console.log(arguments);
//   console.log('clicked');
//   console.log(target);
//   target.style.backgroundColor = color;
// }


// function handler() {
//   console.log(this);
// }
// const btn = document.querySelector('button');
// // btn.onclick = function () {
// //   console.log('click');
// //   console.log(this);
// //   this.style.backgroundColor = 'green';
// // };
// btn.onclick = handler;
// btn.onclick = function () {
//   console.log('another');
// };

// const btn2 = document.querySelector('#btn');
// btn2.onclick = handler;

// btn.onclick = function (event) {
//   console.log(event);
//   console.log(this);
// }

// const input = document.querySelector('input');
// input.onkeyup = function () {
//   console.log('keyup');
//   // console.log(this.value);
// };
// input.onkeydown = function () {
//   // console.log('keydown');
//   console.log(this.value);
// };
// input.onkeyup = function () {
//   // console.log('keydown');
//   console.log(this.value);
// };
// input.onchange = function () {
//   console.log(this.value);
// };

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

// const p = document.querySelector('p');

// p.addEventListener('click', function(event) {
  // console.log('click');
  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.target);
  // console.log(this);
  // console.log(event.currentTarget);
  // console.log(event.target);
// });
// const btn = document.querySelector('button');
// p.addEventListener('click', function () {
//   console.log('p');
// })

// btn.addEventListener('click', function (event) {
//   console.log('btn clicked');
//   event.stopPropagation();
//   event.stopImmediatePropagation();
// });

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });


// ? Погружение событий (Перехват)

// Погружение -> Цель -> Всплытие

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

// const table = document.querySelector('table');
// table.addEventListener('click', function(event) {
//   // if (event.target.tagName === 'TD') {
//   //   console.log(event.target);
//   // }
//   // console.log(event.target.closest('td'));
//   if (event.target.closest('td').tagName === 'TD') {
//     console.log(event.target);
//   }
//   // console.log(event.target);
//   // console.log(event.target.closest('td'));
// });

// ? Пользовательские события

// var btn = document.querySelector('button');
// btn.addEventListener('my-event', function (event) {
//   console.log('fired');
//   console.log(event);
// });

// var customEvent = new CustomEvent('my-event', {
//   detail: {
//     a: 1,
//   },
// });
// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// const clickEvent = new Event('click');


// btn.dispatchEvent(customEvent);
// btn.dispatchEvent(new CustomEvent('my-event', {
//   bubbles: false,
//   detail: {
//     a: 1,
//   },
// }));

// console.dir(EventTarget);
// const source = new EventTarget();
// source.addEventListener('click', function(event) {
//   console.log(event);
// });
// source.dispatchEvent(new Event('click'));
// console.dir(new EventTarget());

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

// const a = document.querySelector('a');

// a.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.href);
// });



// ! Практика
/**
 * Создать блок на странице. При зажатии мыши на блоке -
 * блок должен перемещатся за мышью до отпускания кнопки.
 */
