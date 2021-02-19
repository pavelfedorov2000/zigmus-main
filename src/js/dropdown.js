$('.some class').on('click', function(){
    $(this).toggleClass('some class--active');
    $(this).siblings().slideToggle('200'); // скорость 2с
});