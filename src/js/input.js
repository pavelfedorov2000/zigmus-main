$('.input').on('change', function () {
    $(this).parent().find('button').show();
});

$('.reset-filter-btn').on('click', function () {
    $(this).hide();
    $(this).parent().find('input').val('');
});

$('.radio-field__label').on('click', function () {
    $(this).find('span').toggleClass('checked');
    $(this).siblings().find('span').toggleClass('checked');
});

$('.oval-check').on('click', function () {
    $(this).find('span').toggleClass('checked');
});

$('.gabarits__minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.parent().siblings();
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }

    $input.val(value);

});

$('.gabarits__plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.parent().siblings();
    var value = parseInt($input.val());
    value = value + 1;
    $input.val(value);
});

$('.add-driver').on('click', function () {
    $(this).before('<div class="field profile__field profile__field-item"><label class="label">Имя и Фамилия</laabel><input type="text" class="input field__value"><button class="reset-filter- btn"></button></div>');
});

$('.add-phone').on('click', function () {
    $(this).before('<div class="profile__field-item flex"><div class="field phone-field profile__field profile__fields-col"><label class="label" for="phone">Ваш номер телефона?</label><select class="filter-style" name="country"><option value="by">BY</option><option value="ru">RU</option><option value="ua">UA</option></select><input type="tel" name="phone" placeholder="+375 (_ _) _ _ _-_ _-_ _"></div><div class="profile__fields-col profile__messangers"><p class="profile__messangers-descr">По этому телефону есть</p><div class="profile__messangers-line flex"><label><input type="checkbox" name="viber" class="filter-style">Viber</label><label><input type="checkbox" name="whatsup" class="filter-style">WhatsApp</label><label><input type="checkbox" name="telegram" class="filter-style">Telegram</label></div></div></div>');
});

$('.add-phone--col').on('click', function () {
    $(this).before('<div class="profile__field-item"><div class="field phone-field profile__field profile__fields-col"><label class="label" for="phone">Ваш номер телефона?</label><select class="filter-style" name="country"><option value="by">BY</option><option value="ru">RU</option><option value="ua">UA</option></select><input type="tel" name="phone" placeholder="+375 (_ _) _ _ _-_ _-_ _"></div></div><div class="profile__field-item profile__messangers"><p class="profile__messangers-descr">По этому телефону есть</p><div class="profile__messangers-line flex"><label><input type="checkbox" name="viber" class="filter-style">Viber</label><label><input type="checkbox" name="whatsup" class="filter-style">WhatsApp</label><label><input type="checkbox" name="telegram" class="filter-style">Telegram</label></div></div>');
});

$('.add-email').on('click', function () {
    $(this).before('<div class= "field profile__field profile__field-item profile__fields-col"><label class="label">Ваш e-mail</label><input type="email" class="input field__value"><button class="reset-filter-btn"></button></div>');
});

$('#add-bill').on('click', function () {
    $(this).before('<div class="field flex profile__field profile__field-item profile__bills-field"><div class="profile__field-inner"><label class="label">Расчетный счет?</label><input class="input field__value" placeholder="BY17ALFA30122253450040270000"><button class="reset-filter-btn"></button></div><div class="profile__field-inner mini-select"><label class="label">Валюта?</label><select name="currency" class="filter-style"><option class="field__value" value="">BYN</option><option class="field__value" value="">ZL</option><option class="field__value" value="">USD</option><option class="field__value" value="">EUR</option></select></div><div class="profile__field-inner mini-select"><label class="label">Название банка</label><select name="bank" class="filter-style"><option class="field__value" value="">Альфа банк</option><option class="field__value" value="">Альфа банк</option><option class="field__value" value="">Альфа банк</option></select></div></div>');
});

$('#add-requisites').on('click', function () {
    $(this).before('<form action="#" class="profile__form profile__item profile__item--border"><div class= "field profile__field profile__field-item"><label class="label">Страна?</label><select class="filter-style" name="" id=""><option value="belarus" class="field__value">Беларусь</option><option value="russia" class="field__value">Россия</option><option value="poland" class="field__value">Польша</option></select></div><div class="field profile__field profile__field-item"><label class="label">Юр.лицо?</label><input class="input field__value" type="text"><button class="reset-filter-btn"></button></div><div class="field profile__field profile__field-item"><label class="label">Юр. адрес?</label><input class="input field__value" type="text"><button class="reset-filter-btn"></button></div><div class="field profile__field profile__field-item"><label class="label">УНП?</label><input class="input field__value"><button class="reset-filter-btn"></button></div><div class="profile__bills"><div class="field flex profile__field profile__field-item profile__bills-field"><div class="profile__field-inner"><label class="label">Расчетный счет?</label><input class="input field__value" placeholder="BY17ALFA30122253450040270000"><button class="reset-filter-btn"></button></div><div class="profile__field-inner mini-select"><label class="label">Валюта?</label><select name="currency" class="filter-style"><option class="field__value" value="">BYN</option><option class="field__value" value="">ZL</option><option class="field__value" value="">USD</option><option class="field__value" value="">EUR</option></select></div><div class="profile__field-inner mini-select"><label class="label">Название банка</label><select name="bank" class="filter-style"><option class="field__value" value="">Альфа банк</option><option class="field__value" value="">Альфа банк</option><option class="field__value" value="">Альфа банк</option></select></div></div><div id="add-bill" class="plus-btn profile__plus-btn profile__add-btn">Добавить еще счет</div></div><div class="field profile__field"><label class="label">SWIFT?</label><input class="input field__value" placeholder="ALFABY2X"><button class="reset-filter-btn"></button></div><div class="profile__field-wrap"><div class="field profile__field-file profile__field-file--certificate"><label class="plus-btn">Добавить свидетельство о регистрации<input class="filter-style" type="file" name="reg-doc" id=""></label></div><p class="label profile__field-descr">По нему ваши реквизиты будут подтверждены и вы получите верефикацию</p></div></form>');
});