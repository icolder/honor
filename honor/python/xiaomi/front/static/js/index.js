/* 根据鼠标滑动到'版块推荐'或者'百宝箱'进行显示 */
$(function () {
    var $span = $('.recommend-title span');
    var $ul = $('.recommend-content ul');
    // $span.eq(0).addClass('on');
    // $ul.hide().eq(0).show();
    $span.on('mouseover', function () {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $ul.eq(index).show().siblings().hide();
    }).triggerHandler('mouseover');
});
