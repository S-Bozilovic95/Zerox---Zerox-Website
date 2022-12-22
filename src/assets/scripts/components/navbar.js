/* eslint-disable no-unused-vars */

let menu = document.querySelector('.flex-box');
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
let closeIcon = document.querySelector('.navbar__small-menu-box__close-icon');
let overlay = document.querySelector('.overlay');

// open dropdown
if (menu && hamburger && overlay && navbar) {
    hamburger.addEventListener('click', () => {
        menu.classList.add('flex-box-show');
        navbar.classList.add('navbar-show');
        overlay.classList.add('overlay-show');
        hamburger.style.transform = 'rotateX(90deg)';
        closeIcon.style.transform = 'rotateX(0deg)';
        closeIcon.style.height = '40px';
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('flex-box-show');
        overlay.classList.remove('overlay-show');
        hamburger.style.transform = 'rotateX(0deg)';
        closeIcon.style.transform = 'rotateX(90deg)';

        if (window.pageYOffset < 200) {
            navbar.classList.remove('navbar-show');
        }
    });
}

// close dropdown
if (menu && closeIcon && overlay && navbar) {
    closeIcon.addEventListener('click', () => {
        menu.classList.remove('flex-box-show');
        overlay.classList.remove('overlay-show');
        hamburger.style.transform = 'rotateX(0deg)';
        closeIcon.style.transform = 'rotateX(90deg)';

        if (window.pageYOffset < 200) {
            navbar.classList.remove('navbar-show');
        }
    });
}

// dropdown background-color change
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            navbar.classList.add('navbar-show');
        } else {
            navbar.classList.remove('navbar-show');
        }
    });
}
