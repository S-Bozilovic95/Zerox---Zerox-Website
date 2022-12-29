/* eslint-disable no-unused-vars */
let menu = document.querySelectorAll('.drop');
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
let overlay = document.querySelector('.overlay');
let menuActive = false;

// open dropdown
if (menu && hamburger && overlay && navbar) {
    hamburger.addEventListener('click', () => {
        menu.forEach(el => {
            el.classList.toggle('drop-show');
        });
        overlay.classList.toggle('overlay-show');
        hamburger.classList.toggle('open-menu');
        navbar.classList.add('navbar-show');
        menuActive = !menuActive;

        if (window.pageYOffset < 200 && !menuActive) {
            navbar.classList.remove('navbar-show');
        }
    });

    overlay.addEventListener('click', () => {
        menu.forEach(el => {
            el.classList.toggle('drop-show');
        });
        overlay.classList.remove('overlay-show');
        hamburger.classList.remove('open-menu');
        menuActive = false;

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
        }

        if (window.pageYOffset < 200 && !menuActive) {
            navbar.classList.remove('navbar-show');
        }
    });
}

