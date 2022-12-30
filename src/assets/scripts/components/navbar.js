/* eslint-disable no-unused-vars */
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
let overlay = document.querySelector('.overlay');
let menuActive = false;

// functions
function toggleDropDown () {
    navbar.classList.toggle('navbar-open');
    overlay.classList.toggle('overlay-show');
    navbar.classList.add('navbar-back-show');
    menuActive = !menuActive;

    if (window.pageYOffset < 200 && !menuActive) {
        navbar.classList.remove('navbar-back-show');
    }
}

// open/close dropdown
if (hamburger && overlay) {
    hamburger.addEventListener('click', toggleDropDown);
    overlay.addEventListener('click', toggleDropDown);
}

// dropdown background-color change
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            navbar.classList.add('navbar-back-show');
        }

        if (window.pageYOffset < 200 && !menuActive) {
            navbar.classList.remove('navbar-back-show');
        }
    });
}

