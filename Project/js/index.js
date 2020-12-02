(function () {
    window.onscroll = function onScroll() {
        if (document.documentElement.scrollTop > 500) {
            $('#go-up-btn').css('opacity', '90%');
        }
        else {
            $('#go-up-btn').css('opacity', '0%');
        }
        if (document.documentElement.scrollTop > 50) {
            $('#nav-bar').css("background-color", "#000000d0");
        }
        else {
            $('#nav-bar').css("background-color", "transparent");
        }
    };
    setTimeout(() => {
        $('.bd-ad-lg').modal({
            backdrop: 'static',
        })
    }, 1000);
    $('#register-btn').click(function (e) { 
        $('#register-modal').modal({
            backdrop: 'static',
        })
    });

})();