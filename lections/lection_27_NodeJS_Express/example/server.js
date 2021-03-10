const express = require('express');
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');

const app = express();

let cities = [
  {
    id: nanoid(),
    name: 'Odesa',
  },
  {
    id: nanoid(),
    name: 'Kyiv',
  },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/cities', (req, res) => {
  res.json(cities);
});

app.post('/api/cities', (req, res) => {
  console.log(req.body);
  const city = {
    ...req.body,
    id: nanoid(),
  };
  cities.push(city);
  res.json(city);
});

app.delete('/api/cities/:id', (req, res) => {
  const city = cities.find(city => city.id === req.params.id);
  if (!city) {
    res.status = 404;
    return res.json({
      status: 404,
      message: 'Not found',
    });
  }
  cities = cities.filter(city => city.id !== req.params.id);

  return res.json(city);
});

app.put('/api/cities/:id', (req, res) => {
  const id = req.params.id;
  const index = cities.findIndex(city => city.id === id);
  if (!index) {
    res.status = 404;
    return res.json({
      status: 404,
      message: 'Not found',
    });
  }
  cities[index] = req.body;

  return res.json(cities[index]);
});

app.listen(3000, () => {
  console.log('Server is listening 3000 port');
});
