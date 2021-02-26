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