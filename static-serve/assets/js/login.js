$(document).ready(function(){

    $("#login_usr").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#log_in_btn").click();
        }
    });

    $("#log_in_btn").click(function () {
        var userName = $('#login_usr').val();
        var pasw = $('#login_psw').val();
        if ((userName.length > 1) && (pasw.length > 1)) {
            $("#login_form").submit();
        }
        else {
            $("#login_form").submit(function(){
                event.preventDefault();
                alert("Username or password not filled!");
            });
        }
    });


    $("#scroll_down").click(function() {
        $('html, body').animate({
            scrollTop: $("#about_section").offset().top
        }, 1000);
    });


    // SIGN UP FORM VALIDATE

        //Validate Functions
    function validateEmail(em) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(em);
    };
    function validateName(n) {
        var nr = /.[a-zA-Z]+$/;
        return nr.test(n);
    };

        //Actions
    $('.sign_up_box #name').on("change blur", function () {
        var name = $('.sign_up_box #name').val();
        if (!validateName(name) || name.length == 0) {
            $('.name_succes').css('color', 'transparent');
            $('.name_error').css('color', '#c44');
            $('.sign_up_box #name').css('border', '1px solid red');
        }
        else {
            $('.name_succes').css('color', '#2c2');
            $('.name_error').css('color', 'transparent');
            $('.sign_up_box #name').css('border', '1px solid #ccc');
        }
    })

    $('.sign_up_box #name').on("focus", function () {
        var firstNameInput = document.querySelector('.sign_up_box #name')
        firstNameInput.addEventListener('input', function (event) {
            onlyNumbers('.sign_up_box #name');
        })
        firstNameInput.addEventListener('keyup', function (event) {
            var name = $('.sign_up_box #name').val();
            if (firstNameInput.value.length > 0) {
                $('.name_succes').css('color', '#2c2');
                $('.name_error').css('color', 'transparent');
                $('.sign_up_box #name').css('border', '1px solid #ccc');
            }
            else {

                $('.name_succes').css('color', 'transparent');
                $('.name_error').css('color', '#c44');
                $('.sign_up_box #name').css('border', '1px solid red');
            }

        })
    })

    function onlyNumbers(target) {
        var newVal = $(target).val();
        if (isNaN(newVal)) {
            var setedValue = newVal.replace(/[^a-zA-Z.]/g, "");
            $(target).val(setedValue);
        }
        else {
            var setedValue = newVal.replace(/[^a-zA-Z.]/g, "");
            $(target).val(setedValue);
        }
    }

    $('.sign_up_box #surname').on("change blur", function () {
        var surName = $('.sign_up_box #surname').val();
        if (!validateName(surName) || surName.length == 0) {
            $('.surname_succes').css('color', 'transparent');
            $('.surname_error').css('color', '#c44');
            $('.sign_up_box #surname').css('border', '1px solid red');
        }
        else {
            $('.surname_succes').css('color', '#2c2');
            $('.surname_error').css('color', 'transparent');
            $('.sign_up_box #surname').css('border', '1px solid #ccc');
        }
    })

    $('.sign_up_box #surname').on("focus", function () {
        var lastNameInput = document.querySelector('.sign_up_box #surname')
        lastNameInput.addEventListener('input', function (event) {
            onlyNumbers('.sign_up_box #surname');
        })
        lastNameInput.addEventListener('keyup', function (event) {
            var surName = $('.sign_up_box #surname').val();
            if (lastNameInput.value.length > 0) {
                $('.surname_succes').css('color', '#2c2');
                $('.surname_error').css('color', 'transparent');
                $('.sign_up_box #surname').css('border', '1px solid #ccc');
            }
            else {

                $('.surname_succes').css('color', 'transparent');
                $('.surname_error').css('color', '#c44');
                $('.sign_up_box #surname').css('border', '1px solid red');
            }

        })
    })

    $('.sign_up_box #username').on("change blur", function () {
        var userName = $('.sign_up_box #username').val();
        if (!validateName(userName) || userName.length == 0) {
            $('.username_succes').css('color', 'transparent');
            $('.username_error').css('color', '#c44');
            $('.sign_up_box #username').css('border', '1px solid red');
        }
        else {
            $('.username_succes').css('color', '#2c2');
            $('.username_error').css('color', 'transparent');
            $('.sign_up_box #username').css('border', '1px solid #ccc');
        }
    })

    $('.sign_up_box #username').on("focus", function () {
        var userNameInput = document.querySelector('.sign_up_box #username')
        userNameInput.addEventListener('input', function (event) {
            onlyNumbers('.sign_up_box #username');
        })
        userNameInput.addEventListener('keyup', function (event) {
            var userName = $('.sign_up_box #username').val();
            if (userNameInput.value.length > 0) {
                $('.username_succes').css('color', '#2c2');
                $('.username_error').css('color', 'transparent');
                $('.sign_up_box #username').css('border', '1px solid #ccc');
            }
            else {

                $('.username_succes').css('color', 'transparent');
                $('.username_error').css('color', '#c44');
                $('.sign_up_box #username').css('border', '1px solid red');
            }

        })
    })

    $('.sign_up_box #email').on("change blur", function () {
        var em = $('.sign_up_box #email').val();
        if (!validateEmail(em) || em.length == 0) {
            $('.email_succes').css('color', 'transparent');
            $('.email_error').css('color', '#c44');
            $('.sign_up_box #email').css('border', '1px solid red');
        }
        else {
            $('.email_succes').css('color', '#2c2');
            $('.email_error').css('color', 'transparent');
            $('.sign_up_box #email').css('border', '1px solid #ccc');
        }
    });

    $('.sign_up_box #email').on("focus", function () {
        var emailInput = document.querySelector('.sign_up_box #email')
        emailInput.addEventListener('keyup', function (event) {
            var em = $('.sign_up_box #email').val();
            if (!validateEmail(em) || em.length == 0) {
                $('.email_succes').css('color', 'transparent');
                $('.email_error').css('color', '#c44');
                $('.sign_up_box #email').css('border', '1px solid red');
            }
            else {
                $('.email_succes').css('color', '#2c2');
                $('.email_error').css('color', 'transparent');
                $('.sign_up_box #email').css('border', '1px solid #ccc');
            }

        })
    })

    $('.sign_up_box #pwd').on("change blur", function () {
        var pa = $('.sign_up_box #pwd').val();
        if (pa.length >= 6 && pa.length <= 100) {
            $('.pwd_succes').css('color', '#00cc00');
            $('.pwd_error').css('color', 'transparent');
            $('.sign_up_box #pwd').css('border', '1px solid #ccc');
        }
        else {
            $('.pwd_succes').css('color', 'transparent');
            $('.pwd_error').css('color', '#c44');
            $('.sign_up_box #pwd').css('border', '1px solid red');
        }
    });

    $('.sign_up_box #pwd').on("focus", function () {
        var pa = $('.sign_up_box #pwd').val();
        var passwordInput = document.querySelector('.sign_up_box #pwd')
        passwordInput.addEventListener('keyup', function (event) {

            if (passwordInput.value.length >= 6 && passwordInput.value.length <= 100) {
                $('.pwd_succes').css('color', '#00cc00');
                $('.pwd_error').css('color', 'transparent');
                $('.sign_up_box #pwd').css('border', '1px solid #ccc');
            }
            else {
                $('.pwd_succes').css('color', 'transparent');
                $('.pwd_error').css('color', '#c44');
                $('.sign_up_box #pwd').css('border', '1px solid red');
            }
        })
    })

    $('.sign_up_box #repwd').on("change blur", function () {
        var pa = $('.sign_up_box #pwd').val();
        var rpa = $('.sign_up_box #repwd').val();
        if (rpa.length >= 6 || rpa.length <= 100) {
            if (rpa == pa && rpa.length >= 6) {
                $('.repwd_succes').css('color', '#00cc00');
                $('.repwd_error').css('color', 'transparent');
                $('.sign_up_box #repwd').css('border', '1px solid #ccc');
            } else {
                $('.repwd_succes').css('color', 'transparent');
                $('.repwd_error').css('color', '#c44');
                $('.sign_up_box #repwd').css('border', '1px solid red');
            }
        }
        else {
            $('.repwd_succes').css('color', '#00cc00');
            $('.repwd_error').css('color', 'transparent');
            $('.sign_up_box #repwd').css('border', '1px solid #ccc');
        }
    });

    $('.sign_up_box #repwd').on("focus", function () {
        var pa = $('.sign_up_box #repwd').val();
        var rpa = $('.sign_up_box #repwd').val();
        var passwordInput = document.querySelector('.sign_up_box #pwd')
        var reppasswordInput = document.querySelector('.sign_up_box #repwd')
        reppasswordInput.addEventListener('keyup', function (event) {

            if (reppasswordInput.value.length >= 6 && reppasswordInput.value.length <= 100) {
                if (passwordInput.value == reppasswordInput.value) {
                    $('.repwd_succes').css('color', '#00cc00');
                    $('.repwd_error').css('color', 'transparent');
                    $('.sign_up_box #repwd').css('border', '1px solid #ccc');
                } else {
                    $('.repwd_succes').css('color', 'transparent');
                    $('.repwd_error').css('color', '#c44');
                    $('.sign_up_box #repwd').css('border', '1px solid red');
                }
            }
            else {
                $('.repwd_succes').css('color', 'transparent');
                $('.repwd_error').css('color', '#c44');
                $('.sign_up_box #repwd').css('border', '1px solid red');
            }
        })
    })

    $(".sign_input").keyup(function(event) {
        if (event.keyCode === 13) {
            $(".sign_up_btn").click();
        }
    });

    

    $(".sign_up_btn").click(function () {
        /*var position_checked = $(".gender_checked").val();*/
        var name = $('#name').val();
        var surName = $('#surname').val();
        var userName = $('#username').val();
        var email = $('#email').val();
        var pasw = $('#pwd').val();
        var repasw = $('#repwd').val();
        if ((name.length > 1) && (surName.length > 1) && (userName.length > 1) && validateEmail(email) && pasw.length == repasw.length) {
            $("#sign_up_form").submit();
        }
        else {
            $("#sign_up_form").submit(function(){
                event.preventDefault();
            });
        }
    });

});