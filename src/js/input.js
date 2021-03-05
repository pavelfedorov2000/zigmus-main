$('.input').on('change', function () {
    $(this).parent().find('button').addClass('reset-filter-btn--input-changed');
});

$('.reset-filter-btn').on('click', function () {
    $(this).removeClass('reset-filter-btn--input-changed');
    $(this).parent().find('input').val('');
});