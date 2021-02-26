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


    // Star rating
    $(".review-form__rate-yo").rateYo({
        //"starSvg": '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M5.66911 0.478992C5.73124 0.353122 5.85942 0.273438 5.9998 0.273438C6.14018 0.273413 6.26839 0.353098 6.33052 0.478967L7.76896 3.39312C7.90423 3.66714 8.16565 3.85711 8.46808 3.90103L11.6842 4.36855C11.8231 4.38876 11.9385 4.48604 11.9819 4.61956C12.0253 4.75305 11.9891 4.89961 11.8886 4.9976L9.56159 7.2662C9.34276 7.47955 9.24292 7.78687 9.29453 8.08803L9.84361 11.2907C9.86732 11.429 9.81045 11.5689 9.69688 11.6513C9.58333 11.7339 9.43277 11.7447 9.30853 11.6794L6.43189 10.1673C6.16141 10.0251 5.83826 10.0251 5.56773 10.1674L2.69136 11.6793C2.5671 11.7447 2.41654 11.7337 2.30299 11.6512C2.18942 11.5687 2.13257 11.4289 2.15628 11.2906L2.7056 8.08817C2.75729 7.78691 2.65742 7.47954 2.43855 7.26615L0.111378 4.99763C0.0108778 4.89964 -0.0253249 4.75307 0.0180599 4.61958C0.0614446 4.48609 0.176845 4.38881 0.315764 4.36857L3.53179 3.90108C3.83421 3.85711 4.09567 3.66716 4.23093 3.3931L5.66911 0.478992Z" fill="white"/></svg>',
        starWidth: "12px",
        spacing: "5px",
        ratedFill: "#FFB800",
        normalFill: "#FFFFFF",
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

    $('.aside-process__payment-cancel').on('click', function () {
        $('.overlay, #cancel-order').fadeIn('slow');
    });

    $('.aside-process__docs-add').on('click', function () {
        $('.overlay, #add-document').fadeIn('slow');
    });

    $('.aside-process__item-title').on('click', function () {
        $(this).siblings().slideToggle('300');
        $(this).toggleClass('aside-process__item-title--active');
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

    /* function maskPhone() {
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
    maskPhone(); */


    //=====================VALIDATION==================//

    document.styleSheets[0].addRule('.form-message', 'margin-bottom: 20px');
    document.styleSheets[0].addRule('.form-message.warning', 'color: #ff6118');
    document.styleSheets[0].addRule('.register-popup__form-item.warning', 'border-color: #ff6118');
    document.styleSheets[0].addRule('.register-popup__form-item.success', 'border-color: #236eff');
    document.styleSheets[0].addRule('.form-message.success', 'color: #236eff');
    document.styleSheets[0].addRule('.filter-style .jq-selectbox__select::before', 'border-radius: 10px; background-size: auto!important;');

    function checkpass() {
        let pass = this.find('[name=password]');
        let rep = this.find('[name=repeat-password]');
        let message = this.find('.form-message');
        let text, className;
        rep.parent().removeClass("success").removeClass("warning");
        pass.parent().removeClass("success").removeClass("warning");
        if (rep.val()) {
            if (pass.val() == rep.val()) {
                text = "Пароль успешно подтвержден.";
                className = 'success';
            } else {
                text = "Пароли не совпадают. Введите пароль заново.";
                className = 'warning';
            }
            rep.parent().addClass(className);
            pass.parent().addClass(className);
            if (message.length) {
                message.text(text);
                message.removeClass("success").removeClass("warning").addClass(className);
            } else {
                $("#register").before("<p class='form-message " + className + "'>" + text + "</p>");
            }
        }
    }
    $('[name=password], [name=repeat-password]').keyup(function () {
        let form = $(this).parents('form');
        checkpass.call(form);
    });

    function getCssIndex(selector) {
        let len = document.styleSheets[0].cssRules.length;
        if (len) {
            for (let i = 0; i < len; i++) {
                if (document.styleSheets[0].cssRules[i]['selectorText'] == selector) {
                    return i;
                }
            }
            return -1;
        }
        return -1;
    }
    $('.filter-style[name=country]').change(function () {
        let code = {
            "ru": "+7",
            "by": "+375",
            "ua": "+380",
        };
        let flags = {
            "ru": "rus.png",
            "by": "belarus.png",
            "ua": "ua.png",
        };
        let input = $(this.parentElement.parentElement).find("[name=phone]");
        let placeHolder = input.attr('placeholder');
        placeHolder = placeHolder.replace(/\+\d{1,3}/, code[this.value]);
        input.attr('placeholder', placeHolder);
        input.mask(code[this.value] + "(999) 999-99-99");
        let index = getCssIndex('.jq-selectbox__select.flag::before');
        if (index >= 0) {
            document.styleSheets[0].removeRule(index);
        }
        $('.jq-selectbox__select').removeClass('flag');
        $(this).next().addClass('flag');
        document.styleSheets[0].addRule('.jq-selectbox__select.flag::before', 'background-image: url(../img/icons/' + flags[this.value] + ')!important');
    });

});