$('.slider-start').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            vertical: false,
            verticalSwiping: false,
        }
    }, ]
});

/* @@include('../blocks/modules/clients/clients.js') */

/* @@include('../blocks/modules/start/start.js') */

/* @@include('tabs.js') */

/* @@include('scroll.js') */