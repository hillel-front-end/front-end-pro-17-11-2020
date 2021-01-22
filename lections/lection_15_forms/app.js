/**
 ** Реализовать форму регистрации:
**   - Email
**   - Пароль
**   - Имя, Фамилия (Текстовые поля)
**   - Дата рождения (Текстовое поле)
**   - Пол (radio)
**   - Город (select)
**   - Адрес (textarea)
**   - Языки, которыми владеет (checkbox)
**   - Кнопка "Сохранить"
** По нажатию на кнопку пользователь добавляется в таблицу.
*/

function getFormData($form) {
  const data = {};
  const elements = $form.elements;

  for (let i = 0; i < elements.length; i++) {
    const $element = elements[i];
    if ($element.type === 'radio' && $element.checked) {
      data[$element.name] = $element.value;
    } else if ($element.type === 'checkbox' && $element.checked) {
      if (!Array.isArray(data[$element.name])) {
        data[$element.name] = [];
      }
      data[$element.name].push($element.value);
    } else if ($element.type !== 'submit' && $element.type !== 'radio' && $element.type !== 'checkbox') {
      data[$element.name] = $element.value;
    }
  }

  return data;
}

class TableComponent {
  /**
   * {
   *  "colunmName": "Label"
   * }
   */
  constructor(selector, columns = {}, rows = []) {
    this.$table = document.querySelector(selector);
    this.columns = columns;
    this.rows = rows;
    this.renderHeader();
    this.render();
  }

  addRow(row) {
    this.rows.push(row);
    this.render();
  }

  renderHeader() {
    const $thead = document.createElement('thead');
    const $tr = document.createElement('tr');
    for (let key in this.columns) {
      if (this.columns.hasOwnProperty(key)) {
        const $th = document.createElement('th');
        $th.textContent = this.columns[key];
        $tr.append($th);
      }
    }
    $thead.append($tr);
    if (this.$table.querySelector('thead')) {
      this.$table.replaceChild($thead, this.$table.querySelector('thead'));
    } else {
      this.$table.prepend($thead);
    }
  }

  render() {
    const $body = document.createElement('tbody');
    for (let i = 0; i < this.rows.length; i++) {
      const $tr = document.createElement('tr');
      for (let key in this.columns) {
        if (this.columns.hasOwnProperty(key)) {
          const $td = document.createElement('td');
          $td.textContent = this.rows[i][key] || '';
          $tr.append($td);
        }
      }
      $body.append($tr);
    }
    if (this.$table.querySelector('tbody')) {
      this.$table.replaceChild($body, this.$table.querySelector('tbody'));
    } else {
      this.$table.append($body);
    }
  }
}

const table = new TableComponent('#table1', {
  email: "Email",
  password: "Password",
  name: "Name",
  surname: "Surname",
  address: "Address",
  birth: "Birth",
  city: "City",
  gender: "Gender",
  language: "Language",
}, []);

const table2 = new TableComponent('#table2', {
  email: "Email",
  password: "Password",
  name: "Name",
  surname: "Surname",
  address: "Address",
  birth: "Birth",
  city: "City",
  gender: "Gender",
  language: "Language",
}, []);

const $form = document.querySelector('form');

$form.addEventListener('submit', event => {
  event.preventDefault();
  const user = getFormData(event.target);
  table.addRow(user);
  table2.addRow(user);
  event.target.reset();
});

























































































































































































































































































































































































































// function getFormData($form) {
//   const data = {};

//   for (let i = 0; i < $form.elements.length; i++) {
//     const $element = $form.elements[i];
//     const name = $element.name;
//     if ($element.type === 'radio' && $element.checked) {
//       data[name] = $element.value;
//     } else if ($element.type === 'checkbox' && $element.checked) {
//       if (!Array.isArray(data[name])) {
//         data[name] = [];
//       }
//       data[name].push($element.value);
//     } else if ($element.type !== 'submit') {
//       data[name] = $element.value;
//     }
//   }

//   return data;
// }

// class UsersTableComponent {
//   constructor(selector, columns, users = []) {
//     this.$table = document.querySelector(selector);
//     this.users = users;
//     this.columns = columns;
//     this.renderHeader();
//   }

//   addUser(user) {
//     this.users.push(user);
//     this.render();
//   }

//   renderHeader() {
//     const $thead = document.createElement('thead');
//     const $tr = document.createElement('tr');
//     for (let key in this.columns) {
//       if (this.columns.hasOwnProperty(key)) {
//         const $th = document.createElement('th');
//         $th.textContent = `${key[0].toUpperCase()}${key.slice(1)}`;
//         $tr.append($th);
//       }
//     }
//     $thead.append($tr);
//     if (this.$table.querySelector('thead')) {
//       this.$table.replaceChild($thead, this.$table.querySelector('thead'));
//     } else {
//       this.$table.prepend($thead);
//     }
//   }

//   render() {
//     const $body = document.createElement('tbody');
//     for (let i = 0; i < this.users.length; i++) {
//       const $tr = document.createElement('tr');
//       for (let key in this.columns) {
//         if (this.columns.hasOwnProperty(key)) {
//           const $td = document.createElement('td');
//           $td.textContent = this.users[i][key] || '';
//           $tr.append($td);
//         }
//       }
//       $body.append($tr);
//     }
//     if (this.$table.querySelector('tbody')) {
//       this.$table.replaceChild($body, this.$table.querySelector('tbody'));
//     } else {
//       this.$table.append($body);
//     }
//   }
// }

// const usersTable = new UsersTableComponent('table', {
//   'name':  'Name',
//   'surname':  'surname',
//   'password':  'password',
// });
// usersTable.renderHeader();
// usersTable.addUser({
//   name: 'John',
//   surname: 'White',
//   password: '1234556',
// });

// const $form = document.querySelector('form');

// $form.addEventListener('submit', event => {
//   event.preventDefault();
//   const data = getFormData(event.target);
//   const $table = buildTable(data);
//   document.body.append($table);
// });
