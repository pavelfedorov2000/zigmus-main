$('.header__register-btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.header__enter-btn').on('click', function () {
    $('.overlay, #enter-popup').fadeIn('slow');
});

$('.popup__close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('#forgot-pass').on('click', function () {
    $('#enter-popup').fadeOut('slow');
    $('#forgot-password').fadeIn('slow');
});

$('input[name=phone]').mask("+375 (99) 999-99-99");

$("#email-enter").on("click", function () {
    $(this).hide();
    $('#phone-enter').show();
    $(".enter-popup__phone-enter").hide();
    $(".enter-popup__email-enter").show();
});

$("#phone-enter").on("click", function () {
    $(this).hide();
    $('#email-enter').show();
    $(".enter-popup__email-enter").hide();
    $(".enter-popup__phone-enter").show();
});