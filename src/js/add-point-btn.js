var cur_id = 1
$('.add-point').on('click', function () {
    $(this).before(`<div class="field profile__field field--transparent where-label field--flex added-point"><div class="from__container"><div class="from-icon"><img src="img/b-svg.svg" alt="where-logo"></div><div class="from-content"><label for="where" class="where-label">Добавить пункт<div class="plus filter-item__plus add__plus">+</div></label><input type="text" name="where" class="from-input" id="added-point${cur_id}" required></div></div></div>`);
    cur_id += 1;
    console.log(cur_id);
});





$('.from-input').on('change', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('change', function () {
    $('.from-content').addClass('valid');
});