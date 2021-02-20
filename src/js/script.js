$(function () {

    $('.header__menu-item').on('click', function () {
        $(this).toggleClass('header__menu-item--active');
        $(this).find('ul').slideToggle('300');
    });

    $('.header__user-name').on('click', function () {
        $(this).toggleClass('header__user-name--active');
        $(this).parent().find('div.header__dashboard').toggleClass('header__dashboard--active');
    });

    $('.header-dashboard__item-title').on('click', function () {
        $(this).parent().parent().find('ul').slideToggle('300');
    });

    $('.dashboard__item-header').on('click', function () {
        $(this).parent().find('ul').slideToggle('300');
    });

    $('.popup__close-btn').on('click', function () {
        $('.overlay, .popup').fadeOut('slow');
    });

    $('.filter-style').styler();

    /* @@include('../blocks/modules/header/header.js') */

    /* @@include('tabs.js') */

    /* @@include('scroll.js') */

});