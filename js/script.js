$(function () {

    "use strict";


    //  slider

    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $('.selection_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });
    // shows slider //


    $('.shows_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });


});
