function Banner() {
    this.bannerWidth = 798;
    this.bannerGroup = $("#banner-group");
    this.index = 1;
    this.leftArrow = $(".left-arrow");
    this.rightArrow = $(".right-arrow");
    this.bannerUl = $("#banner-ul");
    this.liList = this.bannerUl.children('li');
    this.bannerCount = this.liList.length;
    this.pageControl = $(".page-control");
    this.listTab = $(".list-tab");
    this.listCount = this.listTab.children("li").length;
}

Banner.prototype.initBanner = function () {
    var self = this;
    var firstBanner = self.liList.eq(0).clone();
    var lastBanner = self.liList.eq(self.bannerCount-1).clone();
    self.bannerUl.append(firstBanner);
    self.bannerUl.prepend(lastBanner);
    self.bannerUl.css({"width":self.bannerWidth*(self.bannerCount+2),"left":-self.bannerWidth});
};

Banner.prototype.animate = function () {
    var self = this;
    self.bannerUl.animate({"left":-798*self.index},500);
    var index = self.index;
    if (index === 0) {
        index = self.bannerCount-1;
    } else if (index === self.bannerCount + 1) {
        index = 0;
    } else {
        index = self.index - 1;
    }
    self.pageControl.children("li").eq(index).addClass("active").siblings().removeClass("active")
};

Banner.prototype.initPageControl = function () {
    var self = this;
    for (var i = 0; i < self.bannerCount; i++) {
        var circle = $("<li></li>");
        self.pageControl.append(circle);
        if (i === 0) {
            circle.addClass("active");
        }
    }
};

Banner.prototype.listenPageControl = function () {
    var self = this;
    self.pageControl.children("li").each(function (index, obj) {
        $(obj).click(function () {
            self.index = index+1;
            self.animate();
        })
    })
};

Banner.prototype.toggleArrow = function (isShow) {
    if (isShow) {
        $(".left-arrow").show();
        $(".right-arrow").show();
    } else {
        $(".left-arrow").hide();
        $(".right-arrow").hide();
    }
};

Banner.prototype.listenBannerHover = function () {
    var self = this;
    this.bannerGroup.hover(function () {
        clearInterval(self.timer);
        self.toggleArrow(true)
    },function () {
        self.loop();
        self.toggleArrow(false)
    })
};

Banner.prototype.loop = function () {
    var self = this;
    this.timer = setInterval(function () {
        if (self.index >= self.bannerCount + 1) {
            self.bannerUl.css({"left":-self.bannerWidth});
            self.index = 2
        } else {
            self.index += 1
        }
        self.animate()
    },2000)
};

Banner.prototype.listenArrowClick = function () {
    var self = this;
    self.leftArrow.click(function () {
        if (self.index === 0) {
            self.bannerUl.css({"left":-self.bannerCount*self.bannerWidth});
            self.index = self.bannerCount - 1;
        } else {
            self.index--;
        }
        self.animate();
    });
    self.rightArrow.click(function () {
        if (self.index === self.bannerCount + 1) {
            self.bannerUl.css({"left":-self.bannerWidth});
            self.index = 2;
        } else {
            self.index++;
        }
        self.animate();
    });
};

Banner.prototype.listTabClick = function () {
    var self = this;
    self.listTab.children("li").each(function (index, obj) {
        $(obj).click(function () {
            self.listTab.children("li").eq(index).addClass("active").siblings().removeClass("active");
        })
    })
};

Banner.prototype.run = function () {
    this.initBanner();
    this.listenBannerHover();
    this.loop();
    this.listenArrowClick();
    this.initPageControl();
    this.listenPageControl();
    this.listTabClick();
};

$(function () {
    var banner = new Banner();
    banner.run();
});