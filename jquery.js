$(document).ready(function () {
    let link = $('.nav > a')
    link.hover(function () {
        $(this).css({"border": "1px solid red", "padding": "10px"});
    }, function () {
        $(this).css({"border": "none", "padding": "none"});
    });

    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function () {
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    let slider = $("#sliderSlick");
    slider.slick({
        prevArrow: '.slide-arrow_left',
        nextArrow: $('.slide-arrow_right'),
    });

    slider.slick('slickGoTo', 'data-id', true);

    $('.slide-btn').on('click', function () {
        let x = $(this).data('id')
        slider.slick('slickGoTo', x);
    });

    slider.on('beforeChange', function (event, slick, currentSlide) {
        $('.slide-btn').removeClass('active')
        $(`.slide-btn[data-id="${currentSlide}"]`).addClass('active')
    });

    $('.btn.btn-red.btn-big.btn-after-grey').on('click', function () {
        $.fancybox.open('<div class="message"><h2>Приветствуем!</h2><p>Ваш заказ принят!</p></div>');
    });


});

