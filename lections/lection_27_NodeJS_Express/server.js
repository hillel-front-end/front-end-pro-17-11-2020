// const fs = require('fs');
// const http = require('http');
// // const text = fs.readFileSync('./cities.json');
// // const cities = JSON.parse(text);
// // cities.push({
// //   id: '3',
// //   name: 'Kyiv',
// // });
// // console.log(cities);
// // fs.writeFileSync('./cities_updated.json', JSON.stringify(cities));

// // fs.readFile('./cities.jso', (err, data) => {
// //   console.log(err);
// //   // console.log(data.toString());
// // });

// const server = http.createServer();

// server.on('request', (req, res) => {
//   let responseText = '';
//   if (req.url === '/main.css') {
//     // responseText = `
//     //   body {}
//     // `;
//     responseText = fs.readFileSync('./public/styles.css');
//   } else {
//     responseText = fs.readFileSync('./public/index.html');
//   }
//   // const html = fs.readFileSync('./public/index.html');
//   res.end(responseText);
// });

// server.listen(3000, () => {
//   console.log('Server is listening on 3000');
// })


// ! Express

const express = require('express');
const fs = require('fs');
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from express');
// });

app.get('/', (req, res) => {
  fs.readFile('./public/index.html', {
    encoding: 'utf8'
  } ,(err, data) => {
    const html = data.toString();
    res.set({
      'Content-Disposition': 'inline',
      'Content-Type': 'text/html'
    });
    // res.set();
    res.send(html);
  });
  // res.send('Hello from express');
});

app.get('/users.json', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'John',
    },
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});

app.listen(3000, () => {
  console.log('Server is started on 3000');
});

// // * Server static files
// // https://expressjs.com/en/starter/static-files.html

// app.use(express.static('public'));











































// const { createServer } = require('http');
// const fs = require('fs');

// const server = createServer();

// server.on('request', (req, res) => {
//   const cities = fs.readFileSync('./cities.json');

//   res.setHeader('Content-Type', 'application/json');

//   res.end(cities);
// });


// server.listen(3000);
