
$(function () {

    if (document.querySelector('.mainscreen')) {
        const documentHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', documentHeight)
        documentHeight();
    }

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
        speed: 600,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 1.9,
            },
            992: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        }

    });

    // slider catalog ----- //
    var swiper = new Swiper(".slider-catalog", {
        slidesPerView: 3.5,
        speed: 500,
        breakpoints: {
            // when window width is >= 375px
            375: {
                slidesPerView: 4.5,
            },
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
            992: {
                slidesPerView: 4,
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

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.popup__body').length) {
          $('.popup__window').removeClass('active');
          $('body').removeClass('hidden');
        }
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
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // Отримуємо кнопки прокручування для поточного слайдера
        var prevButton = $(this).parent('.proposition__item').find('.slider-prev');
        var nextButton = $(this).parent('.proposition__item').find('.slider-next');

        // Додаємо обробники подій на кнопки для поточного слайдера
        prevButton.on('click', function () {
            swiper.slidePrev();
        });

        nextButton.on('click', function () {
            swiper.slideNext();
        });
    });

    $('.save_icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
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


    // sidebar position on desctope --------------------------- //

    function getPosition() {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2);
        $('.sidebar').css('right', paddingContainer);
    };
    getPosition();
    $(window).resize(function () {
        getPosition();
    });

    // footer show ------------------ //
    $('.open-footer').on('click', function () {
        $('.footer').toggleClass('active');
        $('.footer-hide').slideToggle();
    });

    $(window).resize(function () {
        var footerWidth = $(document).width();
        if (footerWidth < 1200) {
            $('.footer-hide').slideDown();
        } else {
            if ($('.footer').hasClass('static-footer')) {
                console.log('done');
                $('.footer-hide').slideDown();
            } else {
                $('.footer-hide').slideUp();
            }
        }
    });

    // hidden sidebar ------------------ //
    $('.hidden-sidebar').on('click', function () {
        $(this).toggleClass('hide');
    });

    // saved/notsaved ------------------ //
    $('.save').on('click', function () {
        $(this).toggleClass('saved');
    });



    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });





});



// video
if (document.querySelector('.team__video')) {
    const player = new Plyr('#player', {
        hideControls: true
    });
}