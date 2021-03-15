$('.input').on('change', function () {
    $(this).parent().find('button').show();
});

$('.reset-filter-btn').on('click', function () {
    $(this).hide();
    $(this).parent().find('input').val('');
});

$('.radio-field__label').on('click', function () {
    $(this).find('span').toggleClass('checked');
    $(this).siblings().find('span').toggleClass('checked');
});

$('.oval-check').on('click', function () {
    $(this).find('span').toggleClass('checked');
});