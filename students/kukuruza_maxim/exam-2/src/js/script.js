import $ from 'jquery';
import 'slick-carousel';
import galleryBtn from "./gallery"
import 'lightbox2';
import lightbox from 'lightbox2';
import header from "./navMenu"
import menu from "./sidebar";

$('.slider__items').slick({
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    verticalSwiping: false,
    adaptiveHeight: true,
    arrows: false,
});


$('.lt-news__carousel').slick({
    infinite: true,
    arrows: true,
    arrowsClass: "arr",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 22000,
    dots: true,
    dotsClass: "dot",
    appendDots: $('.dots'),
    rows: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }

    ]
});

window.lightbox = lightbox;

window.lightbox.option({
    fadeDuration: 600,
    imageFadeDuration: 600,
    resizeDuration: 700,
    wrapAround: true,
    positionFromTop: 50,
    disableScrolling: true,
    showImageNumberLabel: false
});
