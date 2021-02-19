$(function () {

    $('.header__menu-item').on('click', function () {
        $(this).toggleClass('header__menu-item--active');
        $(this).find('ul').slideToggle('300');
    });

    $('.header__avatar').on('click', function () {
        $(this).toggleClass('header__avatar--active');
        $(this).find('div.header__dashboard').slideToggle('300');
    });

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

});