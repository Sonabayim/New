$(document).ready(function(){

    $(".post_info p").each(function(){
        var $ths = $(this),
            txt = $ths.text();

        //Clear the text
        $ths.text("");

        //First 100 chars
        $ths.append($("<span>").text(txt.substr(0,200)));

        //The rest
        $ths.append($("<span>").text(txt.substr(200, txt.length)).hide());
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

    function readURLprofileIMG(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#profile_img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#profile-img-input").change(function() {
      readURLprofileIMG(this);
    });

});