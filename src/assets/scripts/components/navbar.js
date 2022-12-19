/* eslint-disable no-unused-vars */
let menu = document.querySelector('.flex-box');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');

if (menu && hamburger) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('flex-box-show');
    });
}

