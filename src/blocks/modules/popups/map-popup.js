$('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.from-input').on('input', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('input', function () {
    $('.from-content').addClass('valid');
});

