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

