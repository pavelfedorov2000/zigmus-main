$('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
    $("body").addClass('body__overflow--hidden');
});

$('.from-input').on('change', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('change', function () {
    $('.from-content').addClass('valid');
});

$('#map-popup').on('change', function () {
    $("body").removeClass('body__overflow--hidden');
});