$('.header__menu-item').on('click', function () {
    $(this).siblings().removeClass('header__menu-item--active');
    $(this).siblings().find('ul').slideUp();
    $(this).toggleClass('header__menu-item--active');
    $(this).find('ul').slideToggle('300');
});

$('.header__user-name').on('click', function () {
    $(this).toggleClass('header__user-name--active');
    $(this).parent().find('div.header__dashboard').toggleClass('header__dashboard--active');
});

$('.header-dashboard__item-title').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
    $(this).parent().parent().toggleClass('header-dashboard__menu-item--active');
});

$('.dashboard__item-header').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
});

$('.header__notify').on('click', function () {
    $(this).toggleClass('header__notify--active');
    $('.header__notifications').toggleClass('header__notifications--active');
});

//$('body').not('.header__notify').not('.header__notifications').on('click', function () {});

$('.notifications__item--new').on('click', function () {
    $(this).removeClass('notifications__item--new');
});

$('.header__search-input').on('focus', function () {
    $(this).parent().addClass('header__search-form--active');
    $('.header__menu').hide();
    $('.header__search-help').show();
});

$(document).mouseup(function (e) {
    var div = $('.header__notifications');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.header__notify').removeClass('header__notify--active');
        $('.header__notify').addClass('header__notify--read');
        $('.header__notifications').removeClass('header__notifications--active');
    }
});

$(document).mouseup(function (e) {
    var search = $('.header__search');
    if (!search.is(e.target) && search.has(e.target).length === 0) {
        $('.header__search-form').removeClass('header__search-form--active');
        $('.header__search-help').hide();
        $('.header__menu').show('300');
    }
});