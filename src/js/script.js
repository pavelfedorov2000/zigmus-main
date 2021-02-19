$(function () {

    $('.header__menu-item').on('click', function () {
        $(this).toggleClass('header__menu-item--active');
        $(this).find('ul').slideToggle('300');
    });

    $('.header__avatar').on('click', function () {
        $(this).toggleClass('header__avatar--active');
        $(this).find('div.header__dashboard').slideToggle('300');
    });

    /* @@include('../blocks/modules/header/header.js') */

    /* @@include('tabs.js') */

    /* @@include('scroll.js') */

});