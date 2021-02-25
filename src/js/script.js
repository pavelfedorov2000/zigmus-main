$(function () {

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $('.tabs__content').removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');
    });

    $('.input').on('change', function () {
        $(this).parent().find('button').addClass('reset-filter-btn--input-changed');
    });

    $('.reset-filter-btn').on('click', function () {
        $(this).removeClass('reset-filter-btn--input-changed');
        $(this).parent().find('input').val('');
    });

    /* let $input = $('.input');
    let $buffer = $('.input-buffer');

    $input.on('input', function () {
        $buffer.text($input.val());
        $input.width($buffer.width());
    }); */

    $('.questions__item-header').on('click', function () {
        $(this).parent().toggleClass('questions__item--active');
    });

    $('.header__menu-item').on('click', function () {
        $(this).toggleClass('header__menu-item--active');
        $(this).find('ul').slideToggle('300');
    });

    $('.header__user-name').on('click', function () {
        $(this).toggleClass('header__user-name--active');
        $(this).parent().find('div.header__dashboard').toggleClass('header__dashboard--active');
    });

    $('.header-dashboard__item-title').on('click', function () {
        $(this).parent().find('ul').slideToggle('300');
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

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".header__notifications");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.header__notify').removeClass('header__notify--active');
            $('.header__notify').addClass('header__notify--read');
            $('.header__notifications').removeClass('header__notifications--active');
        }
    });

    $('.header__search-open-btn').on('click', function () {
        $(this).hide();
        $('.header__search-form').addClass('header__search-form--active');
        $('.header__search-help').show();
    });



    // ===================== POPUPS =======================//

    $('.popup__close-btn').on('click', function () {
        $('.overlay, .popup').fadeOut('slow');
    });

    $('#forgot-pass').on('click', function () {
        $('#enter-popup').fadeOut('slow');
        $('#forgot-password').fadeIn('slow');
    });

    $('.filter-style').styler();

    $('input[name=phone]').mask("+375 (99) 999-99-99");

    $("#email-enter").on("click", function () {
        $(this).children().text($(this).text() == "Войти через email" ? "Войти по номеру телефона" : "Войти через email");
        $(".enter-popup__phone-enter").toggleClass("enter-popup__phone-enter--hide");
        $(".enter-popup__email-enter").toggleClass("enter-popup__email-enter--show");
    });



    // ===================== SLIDERS ========================/

    $('.slider-start').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
        }, ]
    });

    $('.logos__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: '<button class="slider__btn logos__slider-btn slider__btn--prev"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"fill="white"/></svg><button>',
        nextArrow: '<button class="slider__btn logos__slider-btn slider__btn--next"><svg width="25" height = "12" viewBox = "0 0 25 12" fill ="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM25 6.75H1V5.25H25V6.75Z" fill="white"/></svg></button>',
        appendArrows: $('.logos__slider-arrows'),
    });

    $('.slider-clients').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slider__btn slider__btn--prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2064 6.53814C23.4992 6.24525 23.4992 5.77038 23.2064 5.47748L18.4334 0.704512C18.1405 0.411618 17.6656 0.411618 17.3727 0.704512C17.0798 0.997405 17.0798 1.47228 17.3727 1.76517L21.6154 6.00781L17.3727 10.2505C17.0798 10.5433 17.0798 11.0182 17.3727 11.3111C17.6656 11.604 18.1405 11.604 18.4334 11.3111L23.2064 6.53814ZM0.676025 6.75781H22.676V5.25781H0.676025V6.75781Z" fill="#FFF8F5"/></svg></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469181 6.53814C0.176289 6.24525 0.176289 5.77038 0.469181 5.47748L5.24215 0.704512C5.53505 0.411618 6.00992 0.411618 6.30281 0.704512C6.59571 0.997405 6.59571 1.47228 6.30281 1.76517L2.06017 6.00781L6.30281 10.2505C6.59571 10.5433 6.59571 11.0182 6.30281 11.3111C6.00992 11.604 5.53505 11.604 5.24215 11.3111L0.469181 6.53814ZM22.9995 6.75781H0.999512V5.25781H22.9995V6.75781Z" fill="#FFF8F5"/></svg></button>',
        variableWidth: true,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                arrows: false,
                infinite: true,
            }
        }, ]
    });

    function maskPhone() {
        var country = $('.selected.sel').val();
        switch (country) {
            case "BY":
                $("input[name=phone]").mask("+375 (99) 999-99-99");
                break;
            case "RU":
                $("input[name=phone]").mask("+7(999) 999-99-99");
                break;
            case "UA":
                $("input[name=phone]").mask("+380(999) 999-99-99");
                break;
        }
    }
<<<<<<< HEAD
    maskPhone();

});
=======
    maskPhone(); */

    /* @@include('../blocks/modules/header/header.js') */

    /* @@include('tabs.js') */

    /* @@include('scroll.js') */
    @@include('validate.js')
})
>>>>>>> dfff71b8346c3ff47422372b2e25bbbc89db27af
