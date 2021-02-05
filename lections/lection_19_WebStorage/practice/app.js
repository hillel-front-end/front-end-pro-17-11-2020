const $messages = document.querySelector('#messages');
const $textarea = document.querySelector('#msg');
const $button = document.querySelector('button');

function renderMessages(messages = []) {
  $messages.innerHTML = '';
  messages.map(message => {
    const $msg = document.createElement('div');
    $msg.textContent = message;
    return $msg;
  }).map($msg => {
    $messages.append($msg);
  });
}

let data = [];
if (localStorage.getItem('messages')) {
  const json = localStorage.getItem('messages');
  data = JSON.parse(json);
}

renderMessages(data);

$button.addEventListener('click', () => {
  const text = $textarea.value;
  $textarea.value = '';
  data.push(text);
  renderMessages(data);
  localStorage.setItem('messages', JSON.stringify(data));
});

window.addEventListener('storage', event => {
  if (event.key === 'messages') {
    const json = event.newValue;
    data = JSON.parse(json);
    renderMessages(data);
  }
});
