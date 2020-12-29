function Component(selector, content, options) {
  this.$el = document.querySelector(selector);
  this.$el.textContent = content;
  this.$el.style.width = options.width + 'px';
  this.$el.style.height = options.height + 'px';
  this.$el.style.backgroundColor = options.color;
}

Component.prototype.show = function () {
  this.$el.style.display = 'block';
}

Component.prototype.hide = function () {
  this.$el.style.display = 'none';
}

function Square(selector, content, options) {
  Component.call(this, selector, content, {
    width: options.size,
    height: options.size,
    color: options.color,
  });
}

Square.prototype = Object.create(Component);
Square.prototype.constructor = Square;

const component = new Component('.component', 'Hello world', {
  width: 200,
  height: 100,
  color: 'red',
});

// const square = new Component('.square', 'Square', {
//   width: 200,
//   height: 200,
//   color: 'green',
// });

const square = new Square('.square', 'Square', {
  size: 200,
  color: 'green',
});
