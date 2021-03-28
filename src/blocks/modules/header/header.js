// ========================= MENU-DROP ===================== //

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


// ========================= DASHBOARD ======================= //

$('.header-dashboard__item-title').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
    $(this).parent().parent().toggleClass('header-dashboard__menu-item--active');
});

$('.dashboard__item-header').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
});


// ======================== NOTIFICATIONS ======================= //

$('.header__notify').on('click', function () {
    $(this).toggleClass('header__notify--active');
    $('.header__notifications').toggleClass('header__notifications--active');
});

//$('body').not('.header__notify').not('.header__notifications').on('click', function () {});

$('.notifications__item--new').on('click', function () {
    $(this).removeClass('notifications__item--new');
});


// ==================== SEARCH-FORM ================ //

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

// ========================= SELECTS =========================== //

const selectCurrency = document.getElementById('currency-choice');
const selectCurrencyTitle = selectCurrency.querySelector('.header__select-title');
const selectCurrencyContent = selectCurrency.querySelector('.header__select-content');
const selectCurrencyValue = selectCurrency.querySelector('.header__select-value');
const selectCurrencyLabels = selectCurrency.querySelectorAll('.header__select-label');

// Toggle menu
selectCurrencyTitle.addEventListener('click', () => {
    if ('active' === selectCurrency.getAttribute('data-state')) {
        selectCurrency.setAttribute('data-state', '');
    } else {
        selectCurrency.setAttribute('data-state', 'active');
    }
    if (selectLang.getAttribute('data-state') === 'active') {
        selectLang.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectCurrencyLabels.length; i++) {
    selectCurrencyLabels[i].addEventListener('click', (event) => {
        selectCurrencyValue.textContent = event.target.textContent;
        selectCurrency.setAttribute('data-state', '');
    });
}

const selectLang = document.getElementById('language-choice');
const selectLangTitle = selectLang.querySelector('.header__select-title');
const selectLangContent = selectLang.querySelector('.header__select-content');
const selectLangValue = selectLang.querySelector('.header__select-value');
const selectLangLabels = selectLang.querySelectorAll('.header__select-label');

// Toggle menu
selectLangTitle.addEventListener('click', () => {
    if ('active' === selectLang.getAttribute('data-state')) {
        selectLang.setAttribute('data-state', '');
    } else {
        selectLang.setAttribute('data-state', 'active');
    }
    if (selectCurrency.getAttribute('data-state') === 'active') {
        selectCurrency.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectLangLabels.length; i++) {
    const langs = ['Ру', 'Англ', 'Пол', 'Бел'];
    selectLangLabels[i].addEventListener('click', () => {
        selectLangValue.textContent = langs[i];
        selectLang.setAttribute('data-state', '');
    });
}