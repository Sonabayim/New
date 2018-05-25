$(document).ready(function(){

    $(".mn_list").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).children(".fa-sort-up").fadeOut(100);
        }else{
            $(".mn_list").removeClass("active")
            $(this).addClass("active");
            $(".mn_list").children(".fa-sort-up").fadeOut(100);
            $(this).children(".fa-sort-up").fadeIn(100);
        }
        
    });

    $("header .fa-envelope-o").click(function(){
        if ($(".messages_list").hasClass("open")) {
            $(".messages_list").removeClass("open");
            $(".messages_list").fadeOut(100);
        }else{
            $(".notifications_list").removeClass("open");
            $(".notifications_list").fadeOut(100);
            $(".messages_list").addClass("open");
            $(".messages_list").fadeIn(100);
        }
    });

    $("header .fa-bell-o").click(function(){
        if ($(".notifications_list").hasClass("open")) {
            $(".notifications_list").removeClass("open");
            $(".notifications_list").fadeOut(100);
        }else{
            $(".messages_list").removeClass("open");
            $(".messages_list").fadeOut(100);
            $(".notifications_list").addClass("open");
            $(".notifications_list").fadeIn(100);
        }
    });

    $(".alt_menu .fa-th").click(function(){
        $(".right_menu_section").addClass("open");
        $(".right_menu_section").animate({
            right: '0px'
        },500);
    });

    $(".close_right_menu").click(function(){
        $(".right_menu_section").removeClass("open");
        $(".right_menu_section").animate({
            right: '-250px'
        },500);
    });

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

    //  ADD QUESTION IMG

    function readURLquestionIMG(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#question_img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#file-input").change(function() {
      readURLquestionIMG(this);
    });

    function readURLarticleIMG(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#article_img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#article-img-input").change(function() {
      readURLarticleIMG(this);
    });

    $(".message_box .header").click(function(){
        if ($(this).parent().hasClass("open")) {
            $(this).parent().removeClass("open");
            $(this).parent().animate({
                height: '30px',
                width: '200px'
            });
        }else{
            $(this).parent().addClass("open");
            $(this).parent().animate({
                height: '400px',
                width: '300px'
            });
        }
        
    });

    $(".message_box .header span").click(function(){
        $(this).closest(".message_box").hide();
    });

    $(".messages_list ul li .list-group-item").click(function(){
        $(".messages_list").fadeOut(100);
        $(".message_box").addClass("open");
        $(".message_box").show();
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