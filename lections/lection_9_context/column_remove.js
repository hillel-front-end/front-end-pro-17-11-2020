const arr = [];
const rows = 8;
const cols = 5;
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < cols; j++) {
    arr[i][j] = Math.floor(Math.random() * 41 - 20);
  }
}

function drawArr(arr) {
  for (let i = 0; i < rows; i++) {
    document.write(arr[i].join(', '));
    document.write('<br />');
  }
}

[
  [1, 3],
  [1, 3],
  [1, 3],
]

drawArr(arr);


document.write('<br />');


for (let i = 0; i < arr[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < rows; j++) {
    sum += arr[j][i];
  }
  if (sum < 0) {
    for (let n = 0; n < rows; n++) {
      arr[n].splice(i, 1);
    }
    i--;
  }
}

drawArr(arr);


// console.log(arr);
