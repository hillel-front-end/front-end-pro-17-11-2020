const express = require('express');

const app = express(); 

app.use(express.static('public'));

const cities = [
  {
    id: 1,
    name: 'Odessa',
  },
  {
    id: 2,
    name: 'Lviv',
  },
];

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/cities/:id', (req, res) => {
  const city = cities.find(_city => _city.id.toString() === req.params.id);
  if (city) {
    res.json(city);
  } else {
    res.status(404).json({
      error: 'Not found',
    });
  }
});

app.post('/cities', (req, res) => {
  console.log(req.body);
  res.json({
    status: 'created',
  });
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
