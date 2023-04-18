
$(function () {

    // burger menu --------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('hidden');
    });

    // slider investment ----- //
    var swiper = new Swiper(".investment__slider", {
        // effect: "cards",
        // grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // slider estate ----- //
    var swiperSmall = new Swiper(".estate__slider-small", {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiperBig = new Swiper(".estate__slider-big", {
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
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    //  gallery ----------- //
    Fancybox.bind('[data-fancybox="gallery-estate"]', {
        Thumbs: false,
    });

    // slider ---- //

    $('.slider').each(function(){

        var swiper = new Swiper(this, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        
        // Отримуємо кнопки прокручування для поточного слайдера
        var prevButton = $(this).find('.slider-prev');
        var nextButton = $(this).find('.slider-next');
        
        // Додаємо обробники подій на кнопки для поточного слайдера
        prevButton.on('click', function(){
          swiper.slidePrev();
        });
      
        nextButton.on('click', function(){
          swiper.slideNext();
        });
      });


    // filter proposition --- //
    $('.filter').on('click', function(){
        $(this).toggleClass('open');
        $('.filter__inner').slideToggle('fast');
    });

















});




// video
if (document.querySelector('video')) {
    // const player = new Plyr('#player');
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', {
            controls
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}