document.addEventListener('DOMContentLoaded', () => {
    const discountEnd = new Date('Feb 25 2022 09:00:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = discountEnd - now;
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };

    timeCount();
    setInterval(timeCount, 1000);
});

$( document ).ready(function() {
    $('#nav_main').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.header').offset().top }, 600);
    })

    $('#nav_desc').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__description-section').offset().top }, 600);
    })

    $('#nav_ben').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__benefits').offset().top }, 600);
    })
    
    $('#nav_disc').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__get-dicount').offset().top }, 600);
    })

    $('.info-btn__main-btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__get-dicount').offset().top }, 600);
    })

    $('.popup__text').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__get-dicount').offset().top }, 600);
    })

    $('#nav_yard').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__yard-desc').offset().top }, 600);
    })

    $('#nav_glr').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.gallery').offset().top }, 600);
    })

    $('#popup-offer').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__offer').offset().top }, 600);
    })

    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        easing: 'ease',
        speed: 1000,
        responsive: [
                {
                breakpoint: 1300,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 1299,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 990,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    dots: false
                }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        arrows: false
                    }
            },
                {
                breakpoint: 320,
                settings: {
                    dots: false
                }
                },
                    ]
    });

    // $('.slider-popup').slick({
    //     arrows: true,

    // });

    // $('.slider__item>img').on('click', function (e) {
    //     e.preventDefault();
    //     $('.gallery-popup').fadeIn();
    // })

    // $('.gallery-popup_close').on('click', function (e) {
    //     e.preventDefault();
    //     $('.gallery-popup').fadeOut();
    // })

    // $('.gallery-popup__body').on('click', function (e) {
    //     e.preventDefault();
    //     $('.gallery-popup').fadeOut();
    // })

    $('.send-btn').on('click', function (e) {
        e.preventDefault();

        let tel = ('.form-tel').val().trim();
        let name = ('.form-name').val().trim();
        

        $.ajax({
            url: 'ajax/telegram.php',
            type: 'POST',
            cache: false,
            data: { 'tel': tel, 'name': name },
            dataType: 'html',
            success: function (){
                alert('its ok')
            }
        })
    })
});

