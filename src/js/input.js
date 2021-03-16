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