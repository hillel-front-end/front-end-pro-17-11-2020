const $container = document.querySelector('#container');
const $form = document.querySelector('#create-form');

let cities = [];

$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  if (name.length === 0) {
    return;
  }
  const created = await createCity({
    name
  }); 
  cities.push(created);
  $form.reset();
  renderCities($container, cities);
});

function renderCities($container, cities) {
  $container.innerHTML = '';
  for (const city of cities) {
    const $row = document.createElement('tr');
    $row.dataset.id = city.id;
    $row.innerHTML = `
      <td>${city.name}</td>
      <td>
        <button class="btn btn-primary" data-action="edit">Edit</button>
        <button class="btn btn-danger" data-action="remove">Remove</button>
      </td>
    `;
    $container.appendChild($row);
  }
}

async function getCities() {
  const response = await fetch('/api/cities');
  return await response.json();
}

async function createCity(city) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch('/api/cities', {
    method: 'POST',
    headers, 
    body: JSON.stringify(city),
  });
  return await response.json();
}

async function removeCity(id) {
  const response = await fetch(`/api/cities/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}

async function updateCity(city) {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const response = await fetch(`/api/cities/${city.id}`, {
    method: 'PUT',
    body: JSON.stringify(city),
    headers,
  });
  return await response.json();
}

getCities().then(data => {
  cities = data;
  renderCities($container, cities);
});

$container.addEventListener('click', async e => {
  const id = e.target.closest('tr').dataset.id;
  if (id) {
    switch(e.target.dataset.action) {
      case 'remove':
        if (confirm('Are you sure?')) {
          await removeCity(id);
          cities = cities.filter(city => city.id !== id);
          renderCities($container, cities);
        }
        break;
      case 'edit':
        const name = prompt('Enter new name: ', '');
        if (name.length > 0) {
          const updatedCity = await updateCity({
            id,
            name,
          });
          cities = cities.map(city => city.id === id ? updatedCity : city);
          renderCities($container, cities);
        }
        break;
    }
  }
});
