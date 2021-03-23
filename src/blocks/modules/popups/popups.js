
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

$('#email-reset').on('click', function () {
    $(this).hide();
    $('#phone-reset').show();
    $('.reset-popup__phone-reset').hide();
    $('.get-new-password-phone__btn').hide();
    $('.reset-popup__email-reset').show();
    $('.get-new-password-email__btn').show();
});

$('#phone-reset').on('click', function () {
    $(this).hide();
    $('#email-reset').show();
    $(".reset-popup__email-reset").hide();
    $(".get-new-password-email__btn").hide();
    $(".reset-popup__phone-reset").show();
    $(".get-new-password-phone__btn").show();
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

$('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
    // $("body").addClass('body__overflow--hidden');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
    // $("body").addClass('body__overflow--hidden');
});

// $('#map-popup').on('change', function () {
//     $("body").removeClass('body__overflow--hidden');
// });