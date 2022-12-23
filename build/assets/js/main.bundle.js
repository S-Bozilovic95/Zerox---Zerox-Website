/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/svg/newsletter.svg": "./src/assets/images/svg/newsletter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/images/svg/newsletter.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/newsletter.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../images/svg/newsletter.svg";

/***/ }),

/***/ "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components sync ^\.\/.*\.js$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./card-section.js": "./src/assets/scripts/components/card-section.js",
	"./helpers.js": "./src/assets/scripts/components/helpers.js",
	"./lazyimageloader.js": "./src/assets/scripts/components/lazyimageloader.js",
	"./navbar.js": "./src/assets/scripts/components/navbar.js",
	"./resource.js": "./src/assets/scripts/components/resource.js",
	"./slider.js": "./src/assets/scripts/components/slider.js",
	"./utils.js": "./src/assets/scripts/components/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/assets/scripts/components/card-section.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/components/card-section.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-unused-vars */

var swiperDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.cs__card-box-desktop', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiperMobile = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.cs__card-box-mobile', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination'
  }
}); // style for every second card in slider

var cards = document.querySelectorAll('.cs__card-box-desktop__card');
var mobileCards = document.querySelectorAll('.cs__card-box-mobile__card');

if (cards) {
  cards.forEach(function (el, index) {
    if (index % 2 === 0) {
      el.classList.add('second-card');
    }
  });
}

if (mobileCards) {
  mobileCards.forEach(function (el, index) {
    if (index % 2 === 0) {
      el.classList.add('second-card');
    }
  });
}

/***/ }),

/***/ "./src/assets/scripts/components/helpers.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/components/helpers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var doImagePreload = function doImagePreload(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.srcset = url;
    image.onload = resolve;
    image.onerror = reject;
  });
};

var clamp = function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
};

var assert = function assert(predicate, message) {
  if (predicate) {
    return;
  }

  throw new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  assert: assert,
  clamp: clamp,
  doImagePreload: doImagePreload
});

/***/ }),

/***/ "./src/assets/scripts/components/lazyimageloader.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/components/lazyimageloader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/assets/scripts/components/helpers.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LazyImageLoader = /*#__PURE__*/function () {
  function LazyImageLoader() {
    var _this = this;

    _classCallCheck(this, LazyImageLoader);

    var images = document.querySelectorAll(".".concat(LazyImageLoader.PENDING_CLASS));
    var config = {
      root: null,
      rootMargin: '60px 0px',
      threshold: LazyImageLoader.THRESHOLD
    };

    if (!LazyImageLoader.OBSERVER_SUPPORTED) {
      this.llLoadImagesDefault(images);
      return;
    }

    this.llCount = images.length;
    this.llIntersected = this.llIntersected.bind(this);
    this.llObserver = new IntersectionObserver(this.llIntersected, config);
    images.forEach(function (image) {
      if (image.classList.contains(LazyImageLoader.HANDLED_CLASS)) {
        return;
      }

      _this.llObserver.observe(image);
    });
  }

  _createClass(LazyImageLoader, [{
    key: "llDisconnect",
    value: function llDisconnect() {
      if (!this.llObserver) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llIntersected",
    value: function llIntersected(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 0) {
          return;
        }

        if (entry.isIntersecting) {
          _this2.llCount--;

          _this2.llPreloadImage(entry.target);

          _this2.llObserver.unobserve(entry.target);
        }
      });

      if (this.llCount > 0) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llPreloadImage",
    value: function llPreloadImage(image) {
      var _this3 = this;

      var src = image.dataset.srcset;

      if (!src) {
        return;
      }

      return _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].doImagePreload(src).then(function () {
        return _this3.llTagImage(image, src);
      });
    }
  }, {
    key: "llLoadImagesDefault",
    value: function llLoadImagesDefault(images) {
      var _this4 = this;

      Array.from(images).forEach(function (image) {
        return _this4.llPreloadImage(image);
      });
    }
  }, {
    key: "llTagImage",
    value: function llTagImage(img, src) {
      var el = img.querySelector('.lazy-image__content');

      if (!el) {
        return;
      }

      if (!img) {
        return;
      }

      var newImg = new Image();
      newImg.classList.add(LazyImageLoader.LOADED_CLASS);
      newImg.srcset = src;
      newImg.classList.add(LazyImageLoader.REVEAL_CLASS);
      newImg.alt = el.alt;
      img.appendChild(newImg);
      img.dataset.srcset = '';
      img.classList.remove(LazyImageLoader.PENDING_CLASS);
      img.classList.add(LazyImageLoader.HANDLED_CLASS);
    }
  }], [{
    key: "OBSERVER_SUPPORTED",
    get: function get() {
      return 'IntersectionObserver' in window;
    }
  }, {
    key: "PENDING_CLASS",
    get: function get() {
      return 'lazy-image--pending';
    }
  }, {
    key: "HANDLED_CLASS",
    get: function get() {
      return 'lazy-image--loaded';
    }
  }, {
    key: "LOADED_CLASS",
    get: function get() {
      return 'lazy-image__actual';
    }
  }, {
    key: "REVEAL_CLASS",
    get: function get() {
      return 'fade-in';
    }
  }, {
    key: "THRESHOLD",
    get: function get() {
      return 0.1;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.llInstance) {
        this.llInstance.llDisconnect();
      }

      this.llCount = 0;
      this.llInstance = new LazyImageLoader();
    }
  }]);

  return LazyImageLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (LazyImageLoader);

/***/ }),

/***/ "./src/assets/scripts/components/navbar.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/navbar.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-unused-vars */
var menu = document.querySelector('.flex-box');
var navbar = document.querySelector('.navbar');
var hamburger = document.querySelector('.navbar__small-menu-box__menu-icon');
var closeIcon = document.querySelector('.navbar__small-menu-box__close-icon');
var overlay = document.querySelector('.overlay'); // open dropdown

if (menu && hamburger && overlay && navbar) {
  hamburger.addEventListener('click', function () {
    menu.classList.add('flex-box-show');
    navbar.classList.add('navbar-show');
    overlay.classList.add('overlay-show');
    hamburger.style.transform = 'rotateX(90deg)';
    closeIcon.style.transform = 'rotateX(0deg)';
    closeIcon.style.height = '40px';
  });
  overlay.addEventListener('click', function () {
    menu.classList.remove('flex-box-show');
    overlay.classList.remove('overlay-show');
    hamburger.style.transform = 'rotateX(0deg)';
    closeIcon.style.transform = 'rotateX(90deg)';

    if (window.pageYOffset < 200) {
      navbar.classList.remove('navbar-show');
    }
  });
} // close dropdown


if (menu && closeIcon && overlay && navbar) {
  closeIcon.addEventListener('click', function () {
    menu.classList.remove('flex-box-show');
    overlay.classList.remove('overlay-show');
    hamburger.style.transform = 'rotateX(0deg)';
    closeIcon.style.transform = 'rotateX(90deg)';

    if (window.pageYOffset < 200) {
      navbar.classList.remove('navbar-show');
    }
  });
} // dropdown background-color change


if (navbar) {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      navbar.classList.add('navbar-show');
    } else {
      navbar.classList.remove('navbar-show');
    }
  });
}

/***/ }),

/***/ "./src/assets/scripts/components/resource.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/components/resource.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);




if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    var resource = $('.resource'); // let swap = false;

    if (resource.length > 0) {// const changeClasses = () => {
      //     let red = $('.resource__block-red')[0];
      //     let black = $('.resource__block-black')[0];
      //     if (!swap) {
      //         red.classList.add('swap');
      //         black.classList.add('swap');
      //     } else {
      //         red.classList.remove('swap');
      //         black.classList.remove('swap');
      //     }
      //     swap = !swap;
      // }
      // ScrollTrigger.create({
      //     target: '.resource__block',
      //     start: 'top top',
      //     markers: true,
      //     // end: document.innerHeight,
      //     onToggle: () => changeClasses(),
      // });
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);


 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    var sliderMomentumRatio = 0.455;

    var IsInitialized = function IsInitialized(ele) {
      return ele.hasClass('swiper-container-initialized');
    };

    var swiperInstances = {
      category: {
        instance: null,
        init: false
      },
      big: {
        instance: null,
        init: false
      }
    }; // const swiperState = (slider, swiperInstance, setup) => {
    //     if (mediaQuery('(max-width: 991px)')) {
    //         if (!swiperInstance.init) {
    //             swiperInstance.init = true;
    //             setup();
    //         }
    //     }
    //     if (mediaQuery('(min-width: 992px)')) {
    //         if (swiperInstance.init) {
    //             swiperInstance.instance.destroy();
    //             swiperInstance.init = false;
    //         }
    //     }
    // };
    // --------  BIG SLIDER --------

    var bigSlider = $('.big-slider__slider');

    function setupBigSlider() {
      var currentNumber = $('.big-slider__current-active');
      swiperInstances.big.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(bigSlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        spaceBetween: 50,
        freeMode: false,
        freeModeMomentumRatio: sliderMomentumRatio,
        centeredSlides: true,
        loop: true,
        on: {
          slideChange: function slideChange() {
            if (swiperInstances.big.instance) {
              console.log($('.big-slider__current-active').attr('data-length'));
              currentNumber.text(swiperInstances.big.instance.activeIndex % parseInt(currentNumber.attr('data-length')) + 1);
            }
          }
        },
        pagination: {
          el: '.big-slider__progress',
          type: 'progressbar',
          progressbarFillClass: 'big-slider__bar',
          modifierClass: 'big-slider__bar--',
          renderProgressbar: function renderProgressbar(progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          }
        }
      });
    }

    if (bigSlider.length > 0) {
      if (!IsInitialized(bigSlider)) {
        setupBigSlider();
      }
    } // -------- CATEGORY SLIDER --------


    var categorySlider = $('.category-slider__slider');

    function setupCategorySlider() {
      swiperInstances.category.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(categorySlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentumRatio: sliderMomentumRatio,
        pagination: {
          el: '.category-slider__progress',
          type: 'progressbar',
          progressbarFillClass: 'category-slider__bar',
          modifierClass: 'category-slider__bar--',
          renderProgressbar: function renderProgressbar(progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          }
        }
      });
    }

    if (categorySlider.length > 0) {
      if (!IsInitialized(categorySlider)) {
        setupCategorySlider();
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/utils.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/utils.js ***!
  \************************************************/
/*! exports provided: debounce, throttle, lerp, clamp, irandom, seconds, mediaQuery, stbScrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irandom", function() { return irandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stbScrollTo", function() { return stbScrollTo; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);



var debounce = function debounce(func, wait, immediate) {
  var timeout;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  } else {
    console.warn('A function is undefined! Debounce might not work as intended: ', func);
  }
};
var throttle = function throttle(func, limit) {
  var lastFunc;
  var lastRan;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  } else {
    console.warn('A function is undefined! Throttle might not work as intended: ', func);
  }
};
var lerp = function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
};
var clamp = function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
};
var irandom = function irandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var seconds = function seconds(ms) {
  return ms * 1000;
};
var mediaQuery = function mediaQuery(query) {
  return window.matchMedia(query).matches;
};
var stbScrollTo = function stbScrollTo(ele) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.registerPlugin(ScrollToPlugin); // eslint-disable-line

    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.to(window, {
      duration: speed / 1000,
      ease: 'Power3.easeOut',
      scrollTo: {
        y: $(ele).offset().top
      }
    });
  } else {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(ele).offset().top
    }, speed);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ---------- Image / css assets ------------

__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss");

var includeComponent = function includeComponent(script) {
  return __webpack_require__("./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$")("./".concat(script, ".js"));
}; // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


includeComponent('slider');
includeComponent('navbar');
includeComponent('card-section');

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = gsap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsic3dpcGVyRGVza3RvcCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyTW9iaWxlIiwicGFnaW5hdGlvbiIsImVsIiwiY2FyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2JpbGVDYXJkcyIsImZvckVhY2giLCJpbmRleCIsImNsYXNzTGlzdCIsImFkZCIsImRvSW1hZ2VQcmVsb2FkIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwic3Jjc2V0Iiwib25sb2FkIiwib25lcnJvciIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiYXNzZXJ0IiwicHJlZGljYXRlIiwibWVzc2FnZSIsIkVycm9yIiwiTGF6eUltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiUEVORElOR19DTEFTUyIsImNvbmZpZyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiVEhSRVNIT0xEIiwiT0JTRVJWRVJfU1VQUE9SVEVEIiwibGxMb2FkSW1hZ2VzRGVmYXVsdCIsImxsQ291bnQiLCJsZW5ndGgiLCJsbEludGVyc2VjdGVkIiwiYmluZCIsImxsT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNvbnRhaW5zIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWciLCJMT0FERURfQ0xBU1MiLCJSRVZFQUxfQ0xBU1MiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsIndpbmRvdyIsImxsSW5zdGFuY2UiLCJsbERpc2Nvbm5lY3QiLCJtZW51IiwibmF2YmFyIiwiaGFtYnVyZ2VyIiwiY2xvc2VJY29uIiwib3ZlcmxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsInRyYW5zZm9ybSIsImhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiZ3NhcCIsIiQiLCJyZXNvdXJjZSIsInNsaWRlck1vbWVudHVtUmF0aW8iLCJJc0luaXRpYWxpemVkIiwiZWxlIiwiaGFzQ2xhc3MiLCJzd2lwZXJJbnN0YW5jZXMiLCJjYXRlZ29yeSIsImluc3RhbmNlIiwiaW5pdCIsImJpZyIsImJpZ1NsaWRlciIsInNldHVwQmlnU2xpZGVyIiwiY3VycmVudE51bWJlciIsImZyZWVNb2RlIiwiZnJlZU1vZGVNb21lbnR1bVJhdGlvIiwib24iLCJzbGlkZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhdHRyIiwidGV4dCIsImFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJ0eXBlIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJtb2RpZmllckNsYXNzIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjYXRlZ29yeVNsaWRlciIsInNldHVwQ2F0ZWdvcnlTbGlkZXIiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2FybiIsInRocm90dGxlIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJEYXRlIiwibm93IiwibGVycCIsInN0YXJ0IiwiZW5kIiwiYW10IiwidmFsIiwiaXJhbmRvbSIsImZsb29yIiwicmFuZG9tIiwic2Vjb25kcyIsIm1zIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdGJTY3JvbGxUbyIsInNwZWVkIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUb1BsdWdpbiIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1h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RCxNQVVPO0FBQ0gxRSxLQUFDLENBQUMsQ0FBQ2xGLFFBQVEsQ0FBQzZKLGVBQVYsRUFBMkI3SixRQUFRLENBQUM4SixJQUFwQyxDQUFELENBQUQsQ0FBNkNDLE9BQTdDLENBQXFEO0FBQ2pEQyxlQUFTLEVBQUU5RSxDQUFDLENBQUNJLEdBQUQsQ0FBRCxDQUFPcUUsTUFBUCxHQUFnQkM7QUFEc0IsS0FBckQsRUFFR1QsS0FGSDtBQUdIO0FBQ0osQ0FoQk0sQzs7Ozs7Ozs7Ozs7O0FDakVQLHVDOzs7Ozs7Ozs7Ozs7Q0NFQTs7QUFFQWMsc0VBQUE7O0FBQ0FBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE1BQUQ7QUFBQSxTQUFZRixzRkFBUSxZQUErQkUsTUFBaEMsU0FBbkI7QUFBQSxDQUF6QixDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FELGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxjQUFELENBQWhCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHNCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHN2Z3xwbmd8anBlP2cpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2NhcmQtc2VjdGlvbi5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzXCIsXG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vbmF2YmFyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9uYXZiYXIuanNcIixcblx0XCIuL3Jlc291cmNlLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qc1wiLFxuXHRcIi4vc2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanNcIixcblx0XCIuL3V0aWxzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3AgPSBuZXcgU3dpcGVyKCcuY3NfX2NhcmQtYm94LWRlc2t0b3AnLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJNb2JpbGUgPSBuZXcgU3dpcGVyKCcuY3NfX2NhcmQtYm94LW1vYmlsZScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuLy8gc3R5bGUgZm9yIGV2ZXJ5IHNlY29uZCBjYXJkIGluIHNsaWRlclxyXG5sZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3NfX2NhcmQtYm94LWRlc2t0b3BfX2NhcmQnKTtcclxubGV0IG1vYmlsZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNzX19jYXJkLWJveC1tb2JpbGVfX2NhcmQnKTtcclxuXHJcbmlmIChjYXJkcykge1xyXG4gICAgY2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtY2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobW9iaWxlQ2FyZHMpIHtcclxuICAgIG1vYmlsZUNhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWNhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvSW1hZ2VQcmVsb2FkID0gdXJsID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmNzZXQgPSB1cmw7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xuXG5jb25zdCBhc3NlcnQgPSAocHJlZGljYXRlLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFzc2VydCwgY2xhbXAsIGRvSW1hZ2VQcmVsb2FkXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuXG5jbGFzcyBMYXp5SW1hZ2VMb2FkZXIge1xuICAgIHN0YXRpYyBnZXQgT0JTRVJWRVJfU1VQUE9SVEVEICgpIHtcbiAgICAgICAgcmV0dXJuICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBQRU5ESU5HX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1wZW5kaW5nJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEhBTkRMRURfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLWxvYWRlZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBMT0FERURfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2VfX2FjdHVhbCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBSRVZFQUxfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUtaW4nO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVEhSRVNIT0xEICgpIHtcbiAgICAgICAgcmV0dXJuIDAuMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubGxJbnN0YW5jZS5sbERpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubGxJbnN0YW5jZSA9IG5ldyBMYXp5SW1hZ2VMb2FkZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtMYXp5SW1hZ2VMb2FkZXIuUEVORElOR19DTEFTU31gKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICc2MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IExhenlJbWFnZUxvYWRlci5USFJFU0hPTERcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIUxhenlJbWFnZUxvYWRlci5PQlNFUlZFUl9TVVBQT1JURUQpIHtcbiAgICAgICAgICAgIHRoaXMubGxMb2FkSW1hZ2VzRGVmYXVsdChpbWFnZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5sbEludGVyc2VjdGVkID0gdGhpcy5sbEludGVyc2VjdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGxPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmxsSW50ZXJzZWN0ZWQsIGNvbmZpZyk7XG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucyhMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGxPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGxEaXNjb25uZWN0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxsT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgbGxJbnRlcnNlY3RlZCAoZW50cmllcykge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sbENvdW50LS07XG4gICAgICAgICAgICAgICAgdGhpcy5sbFByZWxvYWRJbWFnZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGxPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGxDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgbGxQcmVsb2FkSW1hZ2UgKGltYWdlKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IGltYWdlLmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEhlbHBlcnMuZG9JbWFnZVByZWxvYWQoc3JjKS50aGVuKCgpID0+IHRoaXMubGxUYWdJbWFnZShpbWFnZSwgc3JjKSk7XG4gICAgfVxuXG4gICAgbGxMb2FkSW1hZ2VzRGVmYXVsdCAoaW1hZ2VzKSB7XG4gICAgICAgIEFycmF5LmZyb20oaW1hZ2VzKS5mb3JFYWNoKGltYWdlID0+IHRoaXMubGxQcmVsb2FkSW1hZ2UoaW1hZ2UpKTtcbiAgICB9XG5cbiAgICBsbFRhZ0ltYWdlIChpbWcsIHNyYykge1xuICAgICAgICBjb25zdCBlbCA9IGltZy5xdWVyeVNlbGVjdG9yKCcubGF6eS1pbWFnZV9fY29udGVudCcpO1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWltZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuTE9BREVEX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLnNyY3NldCA9IHNyYztcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLlJFVkVBTF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5hbHQgPSBlbC5hbHQ7XG4gICAgICAgIGltZy5hcHBlbmRDaGlsZChuZXdJbWcpO1xuXG4gICAgICAgIGltZy5kYXRhc2V0LnNyY3NldCA9ICcnO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShMYXp5SW1hZ2VMb2FkZXIuUEVORElOR19DTEFTUyk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhenlJbWFnZUxvYWRlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWJveCcpO1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudS1ib3hfX21lbnUtaWNvbicpO1xyXG5sZXQgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudS1ib3hfX2Nsb3NlLWljb24nKTtcclxubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5cclxuLy8gb3BlbiBkcm9wZG93blxyXG5pZiAobWVudSAmJiBoYW1idXJnZXIgJiYgb3ZlcmxheSAmJiBuYXZiYXIpIHtcclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtYm94LXNob3cnKTtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc2hvdycpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCg5MGRlZyknO1xyXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgwZGVnKSc7XHJcbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLmhlaWdodCA9ICc0MHB4JztcclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWJveC1zaG93Jyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LXNob3cnKTtcclxuICAgICAgICBoYW1idXJnZXIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknO1xyXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCg5MGRlZyknO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgMjAwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBjbG9zZSBkcm9wZG93blxyXG5pZiAobWVudSAmJiBjbG9zZUljb24gJiYgb3ZlcmxheSAmJiBuYXZiYXIpIHtcclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtYm94LXNob3cnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktc2hvdycpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgwZGVnKSc7XHJcbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDkwZGVnKSc7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIGJhY2tncm91bmQtY29sb3IgY2hhbmdlXHJcbmlmIChuYXZiYXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDIwMCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmlmIChTd2lwZXIpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XG4gICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgICAgIGJpZzogICAgICAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc3dpcGVyU3RhdGUgPSAoc2xpZGVyLCBzd2lwZXJJbnN0YW5jZSwgc2V0dXApID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA5OTFweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1pbi13aWR0aDogOTkycHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gIEJJRyBTTElERVIgLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBiaWdTbGlkZXIgPSAkKCcuYmlnLXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBCaWdTbGlkZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9ICQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpO1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYmlnU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJykuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE51bWJlci50ZXh0KHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UuYWN0aXZlSW5kZXggJSBwYXJzZUludChjdXJyZW50TnVtYmVyLmF0dHIoJ2RhdGEtbGVuZ3RoJykpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuYmlnLXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2JpZy1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdiaWctc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpZ1NsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYmlnU2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQmlnU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSBDQVRFR09SWSBTTElERVIgLS0tLS0tLS1cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTbGlkZXIgPSAkKCcuY2F0ZWdvcnktc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cENhdGVnb3J5U2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5jYXRlZ29yeS5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoY2F0ZWdvcnlTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5jYXRlZ29yeS1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXRlZ29yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoY2F0ZWdvcnlTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBDYXRlZ29yeVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBEZWJvdW5jZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIGxpbWl0KSA9PiB7XG4gICAgbGV0IGxhc3RGdW5jO1xuICAgIGxldCBsYXN0UmFuO1xuXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgVGhyb3R0bGUgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtdCkgPT4ge1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIHZhbCwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpcmFuZG9tID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gKG1zKSA9PiBtcyAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpKS5tYXRjaGVzO1xuXG5leHBvcnQgY29uc3Qgc3RiU2Nyb2xsVG8gPSAoZWxlLCBzcGVlZCA9IDIwMCkgPT4ge1xuICAgIGlmIChnc2FwKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCAvIDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIzLmVhc2VPdXQnLFxuICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICB5OiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG5jb25zdCBpbmNsdWRlQ29tcG9uZW50ID0gKHNjcmlwdCkgPT4gcmVxdWlyZShgLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzLyR7c2NyaXB0fS5qc2ApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuaW5jbHVkZUNvbXBvbmVudCgnc2xpZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCduYXZiYXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2NhcmQtc2VjdGlvbicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBnc2FwOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gU3dpcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=