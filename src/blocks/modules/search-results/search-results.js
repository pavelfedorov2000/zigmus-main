$('.search-results__btn').on('click', function () {
    $(this).addClass('search-results__btn--active');
    $(this).siblings().removeClass('search-results__btn--active');
});