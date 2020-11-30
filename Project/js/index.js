function onScroll() {
    if (document.documentElement.scrollTop > 50) {
        $('#nav-bar').removeClass('navbar-light');
        $('#nav-bar').addClass('navbar-dark');
        $('#nav-bar').css("background-color", "#000000d0");
    }
    else {
        $('#nav-bar').removeClass('navbar-dark');
        $('#nav-bar').addClass('navbar-light');
        $('#nav-bar').css("background-color", "transparent");
    }
}
window.onscroll = function () { onScroll() };