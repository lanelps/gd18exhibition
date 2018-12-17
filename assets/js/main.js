$(document).ready(function () {

    //    HOVER MENU MOBILE
    $('.square2').click(function () {
        $(".overmenuwrapper").toggle();
        $('.square2').css('visibility', 'hidden');
        $('.square1').css('visibility', 'visible');
    });

    $('.square1').click(function () {
        $(".overmenuwrapper").toggle();
        $('.square1').css('visibility', 'hidden');
        $('.square2').css('visibility', 'visible');
    });



    // WORKS MENU
    $(".cls.two").hover(function () {
        $(".workstitle1").css('display', 'block');
    }, function () {
        $(".workstitle1").css('display', 'none')
    });

    $(".cls.two").click(function () {
        // $(".workstitle2").toggle();
        $(".workslist").toggle();
    });

    

    //ABOUT
    $(".cls.one").hover(function () {
        $(".about-title1").css('display', 'block');
    }, function () {
        $(".about-title1").css('display', 'none')
    });

    //DIRECTIONS
    $(".cls.three").hover(function () {
        $(".directions-title1").css('display', 'block');
    }, function () {
        $(".directions-title1").css('display', 'none')
    });

    //FACEBOOK
    $(".cls.four").hover(function () {
        $(".facebook-title1").css('display', 'block');
    }, function () {
        $(".facebook-title1").css('display', 'none')
    });

    //INSTAGRAM
    $(".cls.five").hover(function () {
        $(".instagram-title1").css('display', 'block');
    }, function () {
        $(".instagram-title1").css('display', 'none')
    });



});