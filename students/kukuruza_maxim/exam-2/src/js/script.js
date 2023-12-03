// import Menu from "../js/navMenu"

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex"
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}


$('.hero').each(function () {
    var $slider = $(this);

    $slider.find('.hero-slider__item:eq(0)').addClass('_active');
    $slider.find('.nav-dot:eq(0)').addClass('active');

    var $activeSlide = $slider.find('.hero-slider__item._active');

    $('.nav-dot').on('click', function () {
        var slideToGo = $(this).data('slide');
        goToSlide(slideToGo);
    });

    $slider.on('slide.changed', function () {
        console.log('slide changed !');
        $('.nav-dot').removeClass('active');
        var $activeDot = $('.nav-dot[data-slide="' + $('.hero-slider__item._active').data('slide') + '"]');
        console.log();
        $activeDot.addClass('active');
    });


    function goToSlide(slideToGo) {
        $('.hero-slider__item._active').removeClass('_active');
        $slider.find('.hero-slider__item').eq(slideToGo - 1).addClass('_active');
        $activeSlide = $slider.find('.hero-slider__item').eq(slideToGo - 1).addClass('_active');
        $slider.trigger('slide.changed');
    }

});

