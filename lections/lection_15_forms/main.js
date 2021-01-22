console.log('Lection 15 - Forms');

// console.log(document.forms);
// const $form = document.forms[0];
// console.log($form);
// console.log(document.querySelector('form'));
// console.log($form.elements[0].value);
// console.log($form.elements[2].checked);
// console.log($form.elements.email);

// $form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const email = event.target.elements.email.value;
//   const password = event.target.elements.password.value;
//   console.log(event.target.elements.site);
//   let site = null;
//   if (event.target.elements.site[0].checked) {
//     site = event.target.elements.site[0].value;
//   } else {
//     site = event.target.elements.site[1].value;
//   }
//   console.log(email, password, site);
// });


// const form = document.forms[0];
// console.dir(document.forms[0]);
// console.log(form.elements);
// console.log(form.elements.email);
// console.log(form.elements.name.value);
// const radio = form.elements.gender;
// console.log(radio);
// console.log(radio[0].checked);
// const form = document.querySelector('form');
// console.log(form.elements);

//? Form submitting
// const $form = document.querySelector('form');
// $form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log('Submitted');
// });

/**
 * ! Практика
 * 1. Форма для регистрации:
 *    Поля:
 *      Имя, Фамилия (Текстовые поля)
 *      Дата рождения (Текстовое поле)
 *      Пол (radio)
 *      Город (select)
 *      Адрес (textarea)
 *      Языки, которыми владеет (checkbox)
 *      Кнопка "Сохранить"
 *      По нажатию на кнопку, вместо формы должна выводиться "таблица"
 *      с данными, которые ввел пользователь.
 */
