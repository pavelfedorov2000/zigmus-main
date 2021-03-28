$(function () {

    $('.filter-style').styler(); // Стилизация инпутов, чекбоксов, селектов ...

    $('.datepicker-here').datepicker();

    $('.search-results__list-btn').on('click', function () {
        $(this).siblings().removeClass('search-results__btn--active');
        $(this).addClass('search-results__btn--active');
        $('.search-results__cards').removeClass('search-results__cards--active');
        $('.search-results__line-cards').addClass('search-results__cards--active');
    });

    $('.search-results__grid-btn').on('click', function () {
        $(this).siblings().removeClass('search-results__btn--active');
        $(this).addClass('search-results__btn--active');
        $('.search-results__cards').removeClass('search-results__cards--active');
        $('.search-results__grid-cards').addClass('search-results__cards--active');
    });

    @@include('tabs.js')

    @@include('input.js')

    @@include('rate.js')

    @@include('add-point-btn.js')

    @@include('../blocks/modules/header/header.js')

    @@include('../blocks/modules/questions/questions.js')

    @@include('../blocks/modules/order-process/order-process.js')

    @@include('../blocks/modules/profile/profile.js')

    // ===================== POPUPS =======================//

    @@include('../blocks/modules/popups/popups.js')

    @@include('../blocks/modules/popups/map-popup.js')

    // ===================== SLIDERS ========================/

    @@include('../blocks/modules/clients/clients.js')

    @@include('../blocks/modules/start/start.js')

    @@include('../blocks/modules/logos/logos.js')


    //=====================VALIDATION==================//

    @@include('validate.js')

    @@include('phone-select.js')

});