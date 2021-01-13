/**
 ** Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются
 ** на случайное положение в пределах окна.
 ** Extra: Через каждые 2 секунды блоки меняют свой цвет на случайный.
 */
var $containerElem = document.querySelector('.container');

function getRandomPosition(maxWidth, maxHeight) {
  return {
    x: Math.floor(Math.random() * maxWidth),
    y: Math.floor(Math.random() * maxHeight),
  };
}

function getRandColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const t = Math.random();
  return `rgba(${r}, ${b}, ${g}, ${t})`;
}

function getRandomSize(min, max) {
  return {
    width: Math.max(Math.floor(Math.random() * max), min),
    height: Math.max(Math.floor(Math.random() * max), min),
  }
};

function randomizeBlocksPosition($container) {
  for (let i = 0; i < $container.children.length; i++) {
    const $item = $container.children[i];
    // Generate random color
    $item.style.backgroundColor = getRandColor();
    // // Generate random size
    const size = getRandomSize(20, 75);
    $item.style.height = size.height + 'px';
    $item.style.width = size.width + 'px';

    const maxHeight = $container.clientHeight - $item.offsetHeight;
    const maxWidth = $container.clientWidth - $item.offsetWidth;
    // Generate random position
    const coords = getRandomPosition(maxWidth, maxHeight);
    $item.style.left = coords.x + 'px';
    $item.style.top = coords.y + 'px';
  }
}

setInterval(function () {
  randomizeBlocksPosition($containerElem);
}, 1000);
