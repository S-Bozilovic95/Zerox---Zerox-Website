/* eslint-disable no-unused-vars */
let menu = document.querySelector('.flex-box');
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
let closeIcon = document.querySelector('.navbar__small-menu-box__close-icon');
let overlay = document.querySelector('.overlay');

// open dropdowns
if (menu && hamburger && overlay && navbar) {
    hamburger.addEventListener('click', () => {
        menu.classList.add('flex-box-show');
        navbar.classList.add('navbar-show');
        overlay.classList.add('overlay-show');
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('flex-box-show');
        navbar.classList.remove('navbar-show');
        overlay.classList.remove('overlay-show');
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
    });
}

// close dropdown
if (menu && closeIcon && overlay && navbar) {
    closeIcon.addEventListener('click', () => {
        menu.classList.remove('flex-box-show');
        navbar.classList.remove('navbar-show');
        overlay.classList.remove('overlay-show');
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
    });
}
