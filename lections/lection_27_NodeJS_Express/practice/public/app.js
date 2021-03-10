async function getCities() {
  const response = await fetch('/cities');
  const data = await response.json();
  console.log(data);
}

async function getCity(id) {
  const response = await fetch(`/cities/${id}`);
  const data = await response.json();
  console.log(data);
}

async function addCity(name) {
  const city = {
    name: name,
  };
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');

  const response = await fetch('/cities', {
    method: 'POST',
    body: JSON.stringify(city),
    headers,
  });
  const data = await response.json();
  console.log(data);
}

// getCities();
// getCity(1);
addCity('Kyiv');
