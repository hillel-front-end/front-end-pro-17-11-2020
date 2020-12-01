let inputAge;

do {
  inputAge = prompt('Напиши мне свой возраст числом!', '').trim();
} while (isNaN(inputAge) || inputAge === '');

const age = +inputAge;

if (age % 10 >= 5 || age % 10 === 0 || (age % 100 >= 11 && age % 100 <= 14)) {
  alert('Тебе ' + age +' лет!');
} else if (age % 10 === 1) {
  alert('Тебе ' + age + ' год!');
} else {
  alert('Тебе ' + age + ' года!');
}
