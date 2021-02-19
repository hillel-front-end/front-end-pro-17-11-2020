const generateId = (t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};

// const user = {
//   name: 'John',
//   surname: 'White',
//   age: 22,
//   address: 'Odessa',
//   skills: ['PHP', 'JS'],
// };

// const userCollection = [
//   user,
// ];

const $table = document.querySelector('table');

class UserRepository {
  constructor() {
    this._list = [];
    this._listeners = [];
  }

  getUsers() {
    return [
      ...this._list,
    ];
  }

  addUser(userData) {
    this._list.push({
      ...userData,
      id: generateId(),
    });
    this._emit();
  }

  deleteUser(id) {
    this._list = this._list.filter(item => item.id !== id);
    this._emit();
  }

  editUser(data) {
    this._list = this._list.map(item =>
      item.id === data.id ? data : item);
    this._emit();
  }

  addListener(callback) {
    this._listeners.push(callback);
  }

  removeListener(callback) {
    this._listeners = this._listeners.filter(listener => listener !== callback);
  }

  getUser(id) {
    return this._list.find(item => item.id === id);
  }

  _emit() {
    this._listeners.forEach(listener => {
      listener([...this._list]);
    });
  }
}


function renderData($table, data = []) {
  const $fragment = document.createDocumentFragment();
  data.forEach((user, index) => {
    const $tr = document.createElement('tr');
    $tr.innerHTML = `
      <tr >
        <th scope="row">${index + 1}</th>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.skills.join(', ')}</td>
        <td>
          <button
            class="btn btn-light"
            data-id="${user.id}"
            data-action="edit">Edit</button>
          <button
            class="btn btn-primary"
            data-id="${user.id}"
            data-action="view">View</button>
          <button
            class="btn btn-danger"
            data-id="${user.id}"
            data-action="delete">Delete</button>
        </td>
      </tr>
    `;
    $fragment.append($tr);
  });

  const $tbody = $table.querySelector('tbody');
  $tbody.innerHTML = '';
  $tbody.append($fragment);
}

function populateForm($form, data) {
  $form.dataset.id = data.id;
  for (let element of $form.elements) {
    const name = element.name;
    if (data[name] === undefined) {
      continue;
    }
    if (element.type === 'checkbox' && Array.isArray(data[name])) {
      element.checked = data[name].includes(element.value);
    }
    if (element.type === 'textarea' || element.type === 'number' || element.type === 'text') {
      element.value = data[element.name];
    }
  }
}

function getFormData($form) {
  const data = {};
  for (let element of $form.elements) {
    if (element.type === 'checkbox') {
      if (!Array.isArray(data[element.name])) {
        data[element.name] = [];
      }
      if (element.checked) {
        data[element.name].push(element.value);
      }
    }
    if (element.type === 'textarea' || element.type === 'number' || element.type === 'text') {
      data[element.name] = element.value;
    }
  }

  return data;
}

const users = new UserRepository();

const $form = document.querySelector('form');

users.addListener(function (usersList) {
  renderData($table, usersList);
});

users.addListener(users => {
  console.log('Updated users: ', users);
});

// users.addListener(users => {
//   alert(JSON.stringify(users, null, 2));
// });

$table.addEventListener('click', event => {
  const action = event.target.dataset.action;
  const id = event.target.dataset.id;
  switch (action) {
    case 'view':
      break;
    case 'edit':
      const userData = users.getUser(id);
      populateForm($form, userData);
      break;
    case 'delete':
      if (confirm('Are you sure?')) {
        users.deleteUser(id);
      }
      break;
  }
});

users.addUser({
  name: 'John',
  surname: 'White',
  age: 25,
  address: 'Odessa',
  skills: ['PHP', 'JS', 'Python'],
});

$form.addEventListener('submit', event => {
  event.preventDefault();
  const user = getFormData(event.target);
  if (event.target.dataset.id) {
    user.id = event.target.dataset.id;
    users.editUser(user);
  } else {
    users.addUser(user);
  }
  event.target.reset();
  event.target.dataset.id = null;
});

// populateForm($form, users.getUsers()[0]);

// console.log(renderData($table, users.getUsers()));

// console.log(users.getUsers());
// // users.deleteUser(users.getUsers()[0].id);
// // console.log(users.getUsers());
// users.editUser({
//   ...users.getUsers()[0],
//   name: 'Jane',
// });
// console.log(users.getUsers());
