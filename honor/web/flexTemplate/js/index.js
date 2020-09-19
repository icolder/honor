function Banner() {
  this.videoContent = $(".video-content");
  this.videoCount = this.videoContent.children("li").length;
  this.itemGroupWidth = $(".item-group").width();
  this.videoContentWidth = $(".video-info").width(); //获取ul下每一个li标签的宽度
  this.liCount = Math.floor(this.itemGroupWidth/this.videoContentWidth); //获取ul所在的整个div盒子的宽度
  this.index = this.liCount - this.videoCount % this.liCount; // 获取div盒子宽度上可以放几个li标签
}

// 采用flex布局ul下的li标签的时候，当li标签的数量不足以排两行的时候，采用justify-content:space-between的时候最后这一行会出现两端对齐的bug,
// 所以 用js给ul标签再多添加一定数量的li标签，使li标签一直保持4的倍数，
// 然后，把新添加的li标签的背景色和阴影颜色设置为none

Banner.prototype.videoLi = function () {
  var self = this;
  for (var i=0;i<self.index;i++) {
    var videoLi = $("<li></li>");
    self.videoContent.append(videoLi);
    self.videoContent.children("li").eq(self.videoCount+i).addClass("video-info").css({'box-shadow':'none','background':'none'});
  }
};

$(function () {
  var banner = new Banner();
  banner.videoLi();
});