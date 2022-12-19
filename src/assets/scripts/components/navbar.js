/* eslint-disable no-unused-vars */
let menu = document.querySelector('.flex-box');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
let overlay = document.querySelector('.overlay');

if (menu && hamburger && overlay) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('flex-box-show');
        overlay.classList.toggle('overlay-show');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('flex-box-show');
        overlay.classList.remove('overlay-show');
    });
}

