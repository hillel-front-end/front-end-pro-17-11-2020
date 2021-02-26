console.log('Lection 24 - HTTP. AJAX');

const button = document.querySelector('button');
const container = document.querySelector('#cities');
const spinner = document.querySelector('#spinner');

// button.addEventListener('click', () => {
//   spinner.classList.remove('hide');
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/cities.json');
//   xhr.onreadystatechange = function() {
//     // console.log(xhr.readyState);
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       spinner.classList.add('hide');
//       if (xhr.status !== 200) {
//         console.error(`${xhr.status}: ${xhr.statusText}`);
//       } else {
//         // console.log(xhr.responseText);
//         const cities = JSON.parse(xhr.responseText);
//         // console.log(cities);
//         cities.forEach(city => {
//           const li = document.createElement('li');
//           li.innerText = city.name;
//           container.appendChild(li);
//         });
//       }
//     }
//   }
//   xhr.send();
// });

// button.addEventListener('click', () => {
//   const f = fetch('cities.jso')
//     .then(response => {
//       console.log(response);
//       if (response.status !== 200) {
//         throw new Error('Invalid request');
//       }
//       return response.json();
//     })
//     .then(cities => {
//       console.log(cities);
//     })
//     .catch(response => {
//       console.log(response);
//     });
// });


button.addEventListener('click', async () => {
  spinner.classList.remove('hide');
  try {
    const response = await fetch('cities.json');
    if (response.status !== 200) {
      throw new Error('Invalid request');
    }
    const cities = await response.json();
    cities.forEach(city => {
      const li = document.createElement('li');
      li.innerText = city.name;
      container.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  } finally {
    spinner.classList.add('hide');
  }
});

