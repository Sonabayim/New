$(document).ready(function(){

    $(".mobile_menu .mob_menu_btn").click(function(){
        $(".mob_right_menu").addClass("open");
        $(".mob_right_menu").animate({
            right: '0px'
        },500);
    });

    $(".mob_right_menu .head .close_menu button").click(function(){
        $(".mob_right_menu").removeClass("open");
        $(".mob_right_menu").animate({
            right: '-250px'
        },500);
    });

    $(".write_comment input").keyup(function(event) {
        if (event.keyCode === 13) {
            $(".write_comment button").click();
        }
    });

    $(".write_comment button").click(function(){
        $(".your_comment form").submit();
    });

});