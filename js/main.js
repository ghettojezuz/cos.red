// === Header mobile menu ===
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    if (!menu.classList.contains('transition')) {
        menu.classList.add('transition');
    }
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
    } else {
        menu.classList.add('active');
        menuButton.classList.add('active');
    }
}

menuButton.addEventListener('click', toggleMenu);


// === Swiper ===
const swipersUpcomingClass = '.swiper-upcoming';
const swipersUpcoming = document.querySelectorAll(swipersUpcomingClass);
if (swipersUpcoming.length > 0) {
    const upcomingSlider = new Swiper(swipersUpcomingClass, {
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
}

