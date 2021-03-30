$('.profile-card__check').on('click', function () {
    $(this).find('.check-span').toggleClass('display-none checked');
    var length = $('.checked').length;
    $('.check-length').val(length);
});
