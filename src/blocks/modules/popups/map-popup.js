$('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.from-input').on('change', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('change', function () {
    $('.from-content').addClass('valid');
});

