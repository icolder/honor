function FrontBase() {

}

FrontBase.prototype.listenAuthBoxHover = function () {
    var authBox = $(".auth-box");
    var userBox = $(".user-more-box");
    authBox.hover(function () {
        userBox.css({'display':'block'})
    },function () {
        userBox.css({display:'none'})
    })
};

$(function () {
    var frontBase = new FrontBase();
    frontBase.listenAuthBoxHover();
});