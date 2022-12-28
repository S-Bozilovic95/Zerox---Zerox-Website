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

var swiperDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.card-sec__card-box-desktop', {
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true
});
var swiperMobile = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.card-sec__card-box-mobile', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination'
  }
}); // style for every second card in slider

var cards = document.querySelectorAll('.card-sec__card-box-desktop__card');
var mobileCards = document.querySelectorAll('.card-sec__card-box-mobile__card');

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
var overlay = document.querySelector('.overlay');
var menuActive = false; // open dropdown

if (menu && hamburger && overlay && navbar) {
  hamburger.addEventListener('click', function () {
    menu.classList.toggle('flex-box-show');
    overlay.classList.toggle('overlay-show');
    hamburger.classList.toggle('open-menu');
    navbar.classList.add('navbar-show');
    menuActive = !menuActive;

    if (window.pageYOffset < 200 && !menuActive) {
      navbar.classList.remove('navbar-show');
    }
  });
  overlay.addEventListener('click', function () {
    menu.classList.remove('flex-box-show');
    overlay.classList.remove('overlay-show');
    hamburger.classList.remove('menu-open');
    hamburger.classList.remove('open-menu');
    menuActive = false;

    if (window.pageYOffset < 200) {
      navbar.classList.remove('navbar-show');
    }
  });
} // dropdown background-color change


if (navbar) {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      navbar.classList.add('navbar-show');
    }

    if (window.pageYOffset < 200 && !menuActive) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsic3dpcGVyRGVza3RvcCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsInN3aXBlck1vYmlsZSIsImxvb3AiLCJwYWdpbmF0aW9uIiwiZWwiLCJjYXJkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vYmlsZUNhcmRzIiwiZm9yRWFjaCIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZyIsIkxPQURFRF9DTEFTUyIsIlJFVkVBTF9DTEFTUyIsImFsdCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwid2luZG93IiwibGxJbnN0YW5jZSIsImxsRGlzY29ubmVjdCIsIm1lbnUiLCJuYXZiYXIiLCJoYW1idXJnZXIiLCJvdmVybGF5IiwibWVudUFjdGl2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsIm9uIiwic2xpZGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInRleHQiLCJhY3RpdmVJbmRleCIsInBhcnNlSW50IiwidHlwZSIsInByb2dyZXNzYmFyRmlsbENsYXNzIiwibW9kaWZpZXJDbGFzcyIsInJlbmRlclByb2dyZXNzYmFyIiwiY2F0ZWdvcnlTbGlkZXIiLCJzZXR1cENhdGVnb3J5U2xpZGVyIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIndhcm4iLCJ0aHJvdHRsZSIsImxpbWl0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwiRGF0ZSIsIm5vdyIsImxlcnAiLCJzdGFydCIsImVuZCIsImFtdCIsInZhbCIsImlyYW5kb20iLCJmbG9vciIsInJhbmRvbSIsInNlY29uZHMiLCJtcyIsIm1lZGlhUXVlcnkiLCJxdWVyeSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3RiU2Nyb2xsVG8iLCJzcGVlZCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInNjcm9sbFRvIiwieSIsIm9mZnNldCIsInRvcCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicmVxdWlyZSIsImluY2x1ZGVDb21wb25lbnQiLCJzY3Jp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RCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxjQUFELENBQWhCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHNCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHN2Z3xwbmd8anBlP2cpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2NhcmQtc2VjdGlvbi5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzXCIsXG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vbmF2YmFyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9uYXZiYXIuanNcIixcblx0XCIuL3Jlc291cmNlLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qc1wiLFxuXHRcIi4vc2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanNcIixcblx0XCIuL3V0aWxzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3AgPSBuZXcgU3dpcGVyKCcuY2FyZC1zZWNfX2NhcmQtYm94LWRlc2t0b3AnLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTW9iaWxlID0gbmV3IFN3aXBlcignLmNhcmQtc2VjX19jYXJkLWJveC1tb2JpbGUnLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8vIHN0eWxlIGZvciBldmVyeSBzZWNvbmQgY2FyZCBpbiBzbGlkZXJcclxubGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtc2VjX19jYXJkLWJveC1kZXNrdG9wX19jYXJkJyk7XHJcbmxldCBtb2JpbGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXNlY19fY2FyZC1ib3gtbW9iaWxlX19jYXJkJyk7XHJcblxyXG5pZiAoY2FyZHMpIHtcclxuICAgIGNhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWNhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKG1vYmlsZUNhcmRzKSB7XHJcbiAgICBtb2JpbGVDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1jYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWJveCcpO1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudS1ib3hfX21lbnUtaWNvbicpO1xyXG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbmxldCBtZW51QWN0aXZlID0gZmFsc2U7XHJcblxyXG4vLyBvcGVuIGRyb3Bkb3duXHJcbmlmIChtZW51ICYmIGhhbWJ1cmdlciAmJiBvdmVybGF5ICYmIG5hdmJhcikge1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnZmxleC1ib3gtc2hvdycpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1zaG93Jyk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tbWVudScpO1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIG1lbnVBY3RpdmUgPSAhbWVudUFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDIwMCAmJiAhbWVudUFjdGl2ZSkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1ib3gtc2hvdycpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1zaG93Jyk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICBtZW51QWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIGJhY2tncm91bmQtY29sb3IgY2hhbmdlXHJcbmlmIChuYXZiYXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDIwMCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCAyMDAgJiYgIW1lbnVBY3RpdmUpIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmlmIChnc2FwKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gJCgnLnJlc291cmNlJyk7XG4gICAgICAgIC8vIGxldCBzd2FwID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoYW5nZUNsYXNzZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJlZCA9ICQoJy5yZXNvdXJjZV9fYmxvY2stcmVkJylbMF07XG4gICAgICAgICAgICAvLyAgICAgbGV0IGJsYWNrID0gJCgnLnJlc291cmNlX19ibG9jay1ibGFjaycpWzBdO1xuXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFzd2FwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHN3YXAgPSAhc3dhcDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5yZXNvdXJjZV9fYmxvY2snLFxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICAgICAgICAvLyAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAvLyBlbmQ6IGRvY3VtZW50LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgLy8gICAgIG9uVG9nZ2xlOiAoKSA9PiBjaGFuZ2VDbGFzc2VzKCksXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcblxuaWYgKFN3aXBlcikge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5oYXNDbGFzcygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICAgICAgYmlnOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBzd2lwZXJTdGF0ZSA9IChzbGlkZXIsIHN3aXBlckluc3RhbmNlLCBzZXR1cCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKG1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDk5MXB4KScpKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXR1cCgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA5OTJweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5pdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgQklHIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGJpZ1NsaWRlciA9ICQoJy5iaWctc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEJpZ1NsaWRlciAoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJyk7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlID0gbmV3IFN3aXBlcihiaWdTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcuYmlnLXNsaWRlcl9fY3VycmVudC1hY3RpdmUnKS5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TnVtYmVyLnRleHQoc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZS5hY3RpdmVJbmRleCAlIHBhcnNlSW50KGN1cnJlbnROdW1iZXIuYXR0cignZGF0YS1sZW5ndGgnKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5iaWctc2xpZGVyX19wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnYmlnLXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2JpZy1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmlnU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChiaWdTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBCaWdTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIENBVEVHT1JZIFNMSURFUiAtLS0tLS0tLVxuICAgICAgICBjb25zdCBjYXRlZ29yeVNsaWRlciA9ICQoJy5jYXRlZ29yeS1zbGlkZXJfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ2F0ZWdvcnlTbGlkZXIgKCkge1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmNhdGVnb3J5Lmluc3RhbmNlID0gbmV3IFN3aXBlcihjYXRlZ29yeVNsaWRlclswXSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmNhdGVnb3J5LXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyLS0nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogZnVuY3Rpb24gKHByb2dyZXNzYmFyRmlsbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIHByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5U2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChjYXRlZ29yeVNsaWRlcikpIHtcbiAgICAgICAgICAgICAgICBzZXR1cENhdGVnb3J5U2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcbiAgICB2YXIgdGltZW91dDtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIERlYm91bmNlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbGltaXQpID0+IHtcbiAgICBsZXQgbGFzdEZ1bmM7XG4gICAgbGV0IGxhc3RSYW47XG5cbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsYXN0RnVuYyk7XG5cbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbGltaXQgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBUaHJvdHRsZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxlcnAgPSAoc3RhcnQsIGVuZCwgYW10KSA9PiB7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlyYW5kb20gPSAobWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xuZXhwb3J0IGNvbnN0IHNlY29uZHMgPSAobXMpID0+IG1zICogMTAwMDtcblxuZXhwb3J0IGNvbnN0IG1lZGlhUXVlcnkgPSAocXVlcnkpID0+ICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkpLm1hdGNoZXM7XG5cbmV4cG9ydCBjb25zdCBzdGJTY3JvbGxUbyA9IChlbGUsIHNwZWVkID0gMjAwKSA9PiB7XG4gICAgaWYgKGdzYXApIHtcbiAgICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgICAgICAgZHVyYXRpb246IHNwZWVkIC8gMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjMuZWFzZU91dCcsXG4gICAgICAgICAgICBzY3JvbGxUbzoge1xuICAgICAgICAgICAgICAgIHk6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0gSW1hZ2UgLyBjc3MgYXNzZXRzIC0tLS0tLS0tLS0tLVxuXG5yZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzLycsIHRydWUsIC9cXC4oc3ZnfHBuZ3xqcGU/ZykkLyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJyk7XG5cbmNvbnN0IGluY2x1ZGVDb21wb25lbnQgPSAoc2NyaXB0KSA9PiByZXF1aXJlKGAuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvJHtzY3JpcHR9LmpzYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tIExhenkgbG9hZCAtLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICogaW1wb3J0IExhenlJbWFnZUxvYWRlciBmcm9tICcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzJztcbiAqIExhenlJbWFnZUxvYWRlci5pbml0KCk7XG4gKi9cblxuLy8gLS0tLS0tLS0tLS0gQ3VzdG9tIHNjcmlwdHMgLS0tLS0tLS0tLS0tLS0tXG5pbmNsdWRlQ29tcG9uZW50KCdzbGlkZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ25hdmJhcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnY2FyZC1zZWN0aW9uJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGdzYXA7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwibW9kdWxlLmV4cG9ydHMgPSBTd2lwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==