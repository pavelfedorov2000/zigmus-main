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
    $('[name=password]').change(function(){
    console.log(this.value)
});
$('[name=repeat-password]').change(function(){
    console.log(this.value)
});
})