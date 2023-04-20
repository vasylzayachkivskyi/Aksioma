
$(function () {

    // burger menu --------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('hidden');
    });

    // slider investment ----- //
    var swiper = new Swiper(".investment__slider", {
        slidesPerView: 1.1,
        centeredSlides: true,
        speed:500,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }

    });

    // slider estate ----- //
    var swiperSmall = new Swiper(".estate__slider-small", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            // when window width is >= 375px
            375: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });
    var swiperBig = new Swiper(".estate__slider-big", {
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperSmall,
        },
    });


    // POPUP --------------------- //

    $('.popup__btn').on('click', function () {
        $('body').addClass('hidden');
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
        $('body').removeClass('hidden');
    });

    //  gallery ----------- //
    if ($('[data-fancybox="gallery-estate"]').length > 0) {
        Fancybox.bind('[data-fancybox="gallery-estate"]', {
            Thumbs: false,
        });
    }

    // slider ---- //

    $('.slider').each(function () {

        var swiper = new Swiper(this, {
            spaceBetween: 10,
            loop:true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // Отримуємо кнопки прокручування для поточного слайдера
        var prevButton = $(this).find('.slider-prev');
        var nextButton = $(this).find('.slider-next');

        // Додаємо обробники подій на кнопки для поточного слайдера
        prevButton.on('click', function () {
            swiper.slidePrev();
        });

        nextButton.on('click', function () {
            swiper.slideNext();
        });
    });


    // filter proposition --- //
    $('.filter__head').on('click', function () {
        $(this).parent('.filter').toggleClass('open');
        $('.filter__inner').slideToggle('fast');
    });

    // custom sellect --- //
    $('.custom-select').each(function () {
        let placeholderSelect = $(this).attr('data-placeholder');
        $(this).select2(
            {
                minimumResultsForSearch: Infinity,
                placeholder: placeholderSelect
            }
        );
    });


















});




// video
if (document.querySelector('.team__video')) {
    const player = new Plyr('#player', {
        hideControls: true
    });
}