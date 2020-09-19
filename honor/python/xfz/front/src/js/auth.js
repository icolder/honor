$(function () {
    $("#btn").click(function () {
        $(".mask-wrapper").show();
    });

    $(".close-btn").click(function () {
        $(".mask-wrapper").hide();
    });
    $(".switch").click(function () {
        var scrollWrapper = $(".scroll-wrapper");
        var currentLeft = scrollWrapper.css("left");
        currentLeft = parseInt(currentLeft);
        if (currentLeft < 0) {
            scrollWrapper.animate({"left":0})
        } else {
            scrollWrapper.animate({"left":"-400px"})
        }
    });
});

$(function () {
    $(".auth-btn").click(function () {
        $(".mask-wrapper").show();
    });

    $(".close-btn").click(function () {
        $(".mask-wrapper").hide();
    });
    $(".switch").click(function () {
        var scrollWrapper = $(".scroll-wrapper");
        var currentLeft = scrollWrapper.css("left");
        currentLeft = parseInt(currentLeft);
        if (currentLeft < 0) {
            scrollWrapper.animate({"left":0})
        } else {
            scrollWrapper.animate({"left":"-400px"})
        }
    });
});

$(function () {
    var signinGroup = $(".signin-group");
    var telephoneInput = signinGroup.find("input[name='telephone']");
    var passwordInput = signinGroup.find("input[name='password']");
    var rememberInput = signinGroup.find("input[name='remember']");
    var submitBtn = signinGroup.find(".submit-btn");

    submitBtn.click(function () {
        var telephone = telephoneInput.val();
        var password = passwordInput.val();
        var remember = rememberInput.prop("checked");
    });
});