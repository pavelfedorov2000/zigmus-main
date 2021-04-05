// var cur_id = 1
// $('.add-date').on('click', function () {
//     $(this).before(`<div class="field profile__field profile__date-field added-date"><input class="datepicker-here label" type="text" name="date" id="add-date${cur_id}"placeholder="Указать дату"></div>`);
//     cur_id += 1;
//     console.log(cur_id);
// });  


var cur_id = 1
$('.add-point').on('click', function () {
    $(this).before(`<div class="profile__field-item profile__fields fields--aline-item"><div class="profile__fields-col"><div class="field profile__field field--transparent where-label field--flex"><div class="from__container"><div class="from-icon"><img src="img/b-svg.svg" alt="where-logo"></div><div class="from-content"><label for="where" class="where-label">Куда?<div class="plus filter-item__plus add__plus">+</div></label><input type="text" name="where" class="from-input" id="added-point${cur_id}" required></div></div></div></div><div class="profile__fields-col"><div class="field profile__fields-col field profile__field profile__date-field"><input class="datepicker-here label" type="text" name="date" id="added-date${cur_id}" placeholder="Указать дату"></div></div></div>`);
    cur_id += 1;
});


$('.response-popup__add-list-item').on('click', function () {
    $('.response-popup__input').removeClass('none')
})

$('body').on('input', '#add-list-input', function () {
    var $item = $(this);
    value = $item.val();
    return value;
});

$('body').on('click', '.add-list-img', function () {
    $('.response-popup__add-input').val('');
    $('.response-popup__input').addClass('none');
    $('.response-popup__list').append(`<li class="response-popup__list-item">` + value + `</li>`);
});

$('.span-text').on('click', function () {
    $(this).find('.dropdown').toggleClass('none');
});

$('.dropdow-list').on('click', function () {
    var listValue = $(this).text();
    $(this).parent().parent().find('span').text(listValue);
})




