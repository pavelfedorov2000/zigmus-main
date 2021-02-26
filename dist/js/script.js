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
        $(this).parent().find('ul').slideToggle('300');
    });

    $('.dashboard__item-header').on('click', function () {
        $(this).parent().find('ul').slideToggle('300');
    });

    $('.popup__close-btn').on('click', function () {
        $('.overlay, .popup').fadeOut('slow');
    });

    $('.filter-style').styler();

    $('input[name=phone]').mask("+375 (99) 999-99-99");

    $('#email-enter').on('click', function () {
        $(this).css('display', 'none');
        $('.enter-popup__phone-enter').css('display', 'none');
        $('.enter-popup__email-enter').css('display', 'block');
    });

    /* function maskPhone() {
        var country = $('#country option:selected').val();
        switch (country) {
            case "ru":
                $("input[name=phone]").mask("+7(999) 999-99-99");
                break;
            case "ua":
                $("input[name=phone]").mask("+380(999) 999-99-99");
                break;
            case "by":
                $("input[name=phone]").mask("+375(999) 999-99-99");
                break;
        }
    }
    maskPhone(); */

    /*  */

    /* $('.tab').on('click', function(e){
    e.preventDefault(); // отмена стандартного поведения браузера

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    //$('.').slick('setPosition'); // Инициализация слайдера
}); */

    /* $("a[href^='#']").click(function(){
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
    return false;
}); */
    document.styleSheets[0].addRule('.form-message', 'margin-bottom: 20px');
document.styleSheets[0].addRule('.form-message.warning', 'color: #ff6118');
document.styleSheets[0].addRule('.register-popup__form-item.warning', 'border-color: #ff6118');
document.styleSheets[0].addRule('.register-popup__form-item.success', 'border-color: #236eff');
document.styleSheets[0].addRule('.form-message.success', 'color: #236eff');
document.styleSheets[0].addRule('.filter-style .jq-selectbox__select::before', 'border-radius: 10px; background-size: auto;');
function checkpass() {
    let pass = this.find('[name=password]');
    let rep = this.find('[name=repeat-password]');
    let message = this.find('.form-message');
    let text, className;
    rep.parent().removeClass("success").removeClass("warning");
    pass.parent().removeClass("success").removeClass("warning");
    if(rep.val()) {
        if(pass.val() == rep.val()) {
            text = "Пароль успешно подтвержден.";
            className = 'success';
        } else {
            text = "Пароли не совпадают. Введите пароль заново.";
            className = 'warning';
        }
        rep.parent().addClass(className);
        pass.parent().addClass(className);
        if(message.length) {
            message.text(text);
            message.removeClass("success").removeClass("warning").addClass(className);
        } else {
            $("#register").before("<p class='form-message " + className + "'>" + text + "</p>");
        }
    }
}
$('[name=password], [name=repeat-password]').keyup(function() {
    let form = $(this).parents('form');
    checkpass.call(form);
});
function getCssIndex(selector) {
    let len = document.styleSheets[0].cssRules.length;
    if(len) {
        for(let i = 0; i < len; i++) {
            if(document.styleSheets[0].cssRules[i]['selectorText'] == selector) {
                return i;
            }
        }
        return -1;
    }
    return -1;
}
$('.phone-field .filter-style[name=country]').change(function(){
    let code = { "ru" : "+7", "by" : "+375", "ua" : "+380" };
    let flags = { "ru" : "rus.png", "by" : "belarus.png", "ua" : "ua.png" };
    let input = $(this.parentElement.parentElement).find(".popup__form-input");
    let placeHolder = input.attr('placeholder');
    placeHolder = placeHolder.replace(/\+\d{1,3}/, code[this.value]);
    input.attr('placeholder', placeHolder);
    input.mask(code[this.value] + "(999) 999-99-99");
    let index = getCssIndex('.jq-selectbox__select::before');
    if(index >= 0) {
        document.styleSheets[0].removeRule(index);
    }
    document.styleSheets[0].addRule('.jq-selectbox__select::before', 'background-image: url(../img/icons/' + flags[this.value] + ')!important');
})
})