function Banner() {
  this.name = 'zhiliao';
}

Banner.prototype.run = function () {
  console.log("hello world");
};

$(function () {
  var banner = new Banner();
  banner.run();
});