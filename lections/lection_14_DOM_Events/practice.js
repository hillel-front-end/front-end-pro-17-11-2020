/**
 ** Создать блок на странице. При зажатии мыши на блоке -
 ** блок должен перемещатся за мышью до отпускания кнопки.
 */

// const $container = document.querySelector('.parent');
// const $block = document.querySelector('.block');

// let isMouseDown = false;

// function mouseDownHandler(event) {
//   isMouseDown = true;
//   console.log('Mouse down');
// }

// function mouseMoveHandler(event) {
//   if (isMouseDown) {
//     const x = event.x > $container.clientWidth - $block.offsetWidth ? $container.clientWidth - $block.offsetWidth : event.x;
//     const y = event.y > $container.clientHeight - $block.offsetHeight ? $container.clientHeight - $block.offsetHeight : event.y;
//     // console.log(event.x);
//     // console.log(event.y);
//     // console.log('mouse move');
//     $block.style.left = x + 'px';
//     $block.style.top = y + 'px'
//   }
// }

// function mouseUpHandler(event) {
//   isMouseDown = false;
//   console.log('Mouse up');
// }

// $block.addEventListener('mousedown', mouseDownHandler);
// $container.addEventListener('mousemove', mouseMoveHandler);
// $container.addEventListener('mouseup', mouseUpHandler);
const parent = document.querySelector('.parent');
const dragable = document.querySelector('.block');

let mouseDown = false;
let offset = [];
// function handler(event) {

// }

parent.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('block')) {
    mouseDown = true;
    offset = [
      dragable.offsetLeft - e.clientX,
      dragable.offsetTop - e.clientY,
    ];
  }
});

parent.addEventListener('mouseup', function() {
  mouseDown = false;
});

parent.addEventListener('mouseleave', function () {
  mouseDown = false;
});

parent.addEventListener('mousemove', function (event) {
  // console.log(event);
  if (mouseDown) {
    // dragable.style.left = event.x + offset[0] + 'px';
    // dragable.style.top = event.y + offset[1] + 'px';
    console.log(offset[0]);
    let left = event.x + offset[0];
    let top = event.y + offset[1];
    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }
    if (left > parent.clientWidth - 50) {
      left = parent.clientWidth - 50;
    }
    if (top > parent.clientHeight - 50) {
      top = parent.clientHeight - 50;
    }
    dragable.style.left = left + 'px';
    dragable.style.top = top + 'px';
  }
});
