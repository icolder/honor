function Banner() {
    this.pageWidth = 500;
    this.index = 1;
    this.pageControl = $(".page-control");
    this.bannerGroup = $(".banner-group");
    this.bannerCount = this.bannerGroup.children("li").length;
    this.arrowHover = $(".arrow");
    this.leftArrow = $(".left-arrow");
    this.rightArrow = $(".right-arrow");
    this.circleUl = $(".circle-ul");
}

Banner.prototype.initBanner = function () {
    var self = this;
    var firstBanner = self.bannerGroup.children('li').eq(0).clone();
    var lastBanner = self.bannerGroup.children('li').eq(self.bannerCount-1).clone();
    self.bannerGroup.append(firstBanner);
    self.bannerGroup.prepend(lastBanner);
    self.bannerGroup.css({'width':self.pageWidth * (self.bannerCount+2),'left':-self.pageWidth});
};


Banner.prototype.animate = function () {
    var self = this;
    this.timer = setInterval(function () {
        if (self.index >= self.bannerCount +1) {
            self.bannerGroup.css({'left':-self.pageWidth});
            self.index = 2;
        } else {
            self.index ++;
        }
        self.bannerGroup.animate({"left":-self.pageWidth * self.index},500);
        var index = self.index;
        if (index === 0) {
            index = self.bannerCount - 1;
        } else if (index === self.bannerCount + 1) {
            index = 0;
        } else {
            index = self.index - 1;
        }
        self.circleUl.children('li').eq(index).addClass('active').siblings().removeClass("active");
    },2000);
};

Banner.prototype.bannerHover = function () {
    var self = this;
    self.pageControl.hover(function () {
        clearInterval(self.timer);
        self.arrowHover.css({'display':'block'});
    }, function () {
        self.animate();
        self.arrowHover.css({'display':'none'});
    });
};

Banner.prototype.arrowClick = function () {
    var self = this;
    self.leftArrow.click(function () {
        if (self.index === 0) {
            self.bannerGroup.css({"left": -self.pageWidth*self.bannerCount});
            self.index = self.bannerCount - 1;
        } else {
            self.index --;
        }
        self.bannerGroup.animate({"left":-self.pageWidth * self.index},500);
        var index = self.index;
        if (index === 0) {
            index = self.bannerCount - 1;
        } else if (index === self.bannerCount + 1) {
            index = 0;
        } else {
            index = self.index - 1;
        }
        self.circleUl.children('li').eq(index).addClass('active').siblings().removeClass("active");
    });
    self.rightArrow.click(function () {
        if (self.index === self.bannerCount + 1) {
            self.bannerGroup.css({'left':-self.pageWidth});
            self.index = 2;
        } else {
            self.index ++;
        }
        self.bannerGroup.animate({"left":-self.pageWidth * self.index},500);
        var index = self.index;
        if (index === 0) {
            index = self.bannerCount - 1;
        } else if (index === self.bannerCount + 1) {
            index = 0;
        } else {
            index = self.index - 1;
        }
        self.circleUl.children('li').eq(index).addClass('active').siblings().removeClass("active");
    });
};

Banner.prototype.initCircle = function () {
    var self = this;
    
    for (var i=0; i < self.bannerCount; i++) {
        var circleLi = $("<li></li>");
        self.circleUl.append(circleLi);
        if (i === 0) {
            self.circleUl.children('li').addClass("active");
        }
    }
};

Banner.prototype.circleClick = function () {
    var self = this;
    self.circleUl.children("li").each(function (index, obj) {
        $(obj).click(function () {
            self.index = index + 1;
            $(obj).addClass('active').siblings().removeClass("active");
            self.bannerGroup.animate({"left":-self.pageWidth * self.index},500);
        });
    });
};

$(function () {
    var banner = new Banner();
    banner.animate();
    banner.bannerHover();
    banner.arrowClick();
    banner.initCircle();
    banner.circleClick();
    banner.initBanner();
});