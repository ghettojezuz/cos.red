// === Swiper ===
const upcomingSlider = new Swiper('.swiper-upcoming', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-upcoming-button-next',
        prevEl: '.swiper-upcoming-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 29
        }
    }
});
