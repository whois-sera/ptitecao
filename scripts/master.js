$(document).ready(function () {

    var openbtn = $(".display");
    var closebtn = $(".closebtn");

    openbtn.click(function () {
        openNav();
    });

    closebtn.click(function () {
        closeNav();
    });

    function openNav() {
        $(".header-nav").width("250px");
    }

    function closeNav() {
        $(".header-nav").width("0px");
    }
})