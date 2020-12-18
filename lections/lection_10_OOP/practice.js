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

var div = new Component('.container', 'Hello world!', {
  width: 200,
  height: 100,
  color: 'red'
});

var div2 = new Component('.container-1', 'Hello world!!!!!!', {
  width: 400,
  height: 200,
  color: 'gray'
});

document.querySelector('button.show').addEventListener('click', () => {
  div.show();
  div2.show();
});

document.querySelector('button.hide').addEventListener('click', () => {
  div.hide();
  div2.hide();
});
