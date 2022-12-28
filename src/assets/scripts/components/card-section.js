/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const swiperDesktop = new Swiper('.card-sec__card-box-desktop', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
});

const swiperMobile = new Swiper('.card-sec__card-box-mobile', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',

    },
});

// style for every second card in slider
let cards = document.querySelectorAll('.card-sec__card-box-desktop__card');
let mobileCards = document.querySelectorAll('.card-sec__card-box-mobile__card');

if (cards) {
    cards.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('second-card');
        }
    });
}

if (mobileCards) {
    mobileCards.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('second-card');
        }
    });
}
