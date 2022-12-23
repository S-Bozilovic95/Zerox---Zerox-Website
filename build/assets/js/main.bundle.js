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
  slidesPerView: 4,
  loop: true,
  spaceBetween: 0,
  centeredSlides: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsic3dpcGVyRGVza3RvcCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJzd2lwZXJNb2JpbGUiLCJwYWdpbmF0aW9uIiwiZWwiLCJjYXJkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vYmlsZUNhcmRzIiwiZm9yRWFjaCIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZyIsIkxPQURFRF9DTEFTUyIsIlJFVkVBTF9DTEFTUyIsImFsdCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwid2luZG93IiwibGxJbnN0YW5jZSIsImxsRGlzY29ubmVjdCIsIm1lbnUiLCJuYXZiYXIiLCJoYW1idXJnZXIiLCJvdmVybGF5IiwibWVudUFjdGl2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsIm9uIiwic2xpZGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInRleHQiLCJhY3RpdmVJbmRleCIsInBhcnNlSW50IiwidHlwZSIsInByb2dyZXNzYmFyRmlsbENsYXNzIiwibW9kaWZpZXJDbGFzcyIsInJlbmRlclByb2dyZXNzYmFyIiwiY2F0ZWdvcnlTbGlkZXIiLCJzZXR1cENhdGVnb3J5U2xpZGVyIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIndhcm4iLCJ0aHJvdHRsZSIsImxpbWl0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwiRGF0ZSIsIm5vdyIsImxlcnAiLCJzdGFydCIsImVuZCIsImFtdCIsInZhbCIsImlyYW5kb20iLCJmbG9vciIsInJhbmRvbSIsInNlY29uZHMiLCJtcyIsIm1lZGlhUXVlcnkiLCJxdWVyeSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3RiU2Nyb2xsVG8iLCJzcGVlZCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInNjcm9sbFRvIiwieSIsIm9mZnNldCIsInRvcCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicmVxdWlyZSIsImluY2x1ZGVDb21wb25lbnQiLCJzY3Jp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Y0FBRCxDQUFoQixDOzs7Ozs7Ozs7OztBQ25CQSxzQjs7Ozs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJhc3NldHMvanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihzdmd8cG5nfGpwZT9nKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYXJkLXNlY3Rpb24uanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2NhcmQtc2VjdGlvbi5qc1wiLFxuXHRcIi4vaGVscGVycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qc1wiLFxuXHRcIi4vbGF6eWltYWdlbG9hZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanNcIixcblx0XCIuL25hdmJhci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzXCIsXG5cdFwiLi9yZXNvdXJjZS5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanNcIixcblx0XCIuL3NsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzXCIsXG5cdFwiLi91dGlscy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5jb25zdCBzd2lwZXJEZXNrdG9wID0gbmV3IFN3aXBlcignLmNzX19jYXJkLWJveC1kZXNrdG9wJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTW9iaWxlID0gbmV3IFN3aXBlcignLmNzX19jYXJkLWJveC1tb2JpbGUnLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8vIHN0eWxlIGZvciBldmVyeSBzZWNvbmQgY2FyZCBpbiBzbGlkZXJcclxubGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNzX19jYXJkLWJveC1kZXNrdG9wX19jYXJkJyk7XHJcbmxldCBtb2JpbGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jc19fY2FyZC1ib3gtbW9iaWxlX19jYXJkJyk7XHJcblxyXG5pZiAoY2FyZHMpIHtcclxuICAgIGNhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWNhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKG1vYmlsZUNhcmRzKSB7XHJcbiAgICBtb2JpbGVDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1jYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWJveCcpO1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudS1ib3hfX21lbnUtaWNvbicpO1xyXG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbmxldCBtZW51QWN0aXZlID0gZmFsc2U7XHJcblxyXG4vLyBvcGVuIGRyb3Bkb3duXHJcbmlmIChtZW51ICYmIGhhbWJ1cmdlciAmJiBvdmVybGF5ICYmIG5hdmJhcikge1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnZmxleC1ib3gtc2hvdycpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1zaG93Jyk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tbWVudScpO1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIG1lbnVBY3RpdmUgPSAhbWVudUFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDIwMCAmJiAhbWVudUFjdGl2ZSkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1ib3gtc2hvdycpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1zaG93Jyk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xyXG4gICAgICAgIG1lbnVBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDIwMCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gZHJvcGRvd24gYmFja2dyb3VuZC1jb2xvciBjaGFuZ2VcclxuaWYgKG5hdmJhcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMjAwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IDIwMCAmJiAhbWVudUFjdGl2ZSkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuaWYgKGdzYXApIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSAkKCcucmVzb3VyY2UnKTtcbiAgICAgICAgLy8gbGV0IHN3YXAgPSBmYWxzZTtcblxuICAgICAgICBpZiAocmVzb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29uc3QgY2hhbmdlQ2xhc3NlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmVkID0gJCgnLnJlc291cmNlX19ibG9jay1yZWQnKVswXTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgYmxhY2sgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLWJsYWNrJylbMF07XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoIXN3YXApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc3dhcCA9ICFzd2FwO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiAnLnJlc291cmNlX19ibG9jaycsXG4gICAgICAgICAgICAvLyAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgIC8vICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIC8vIGVuZDogZG9jdW1lbnQuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAvLyAgICAgb25Ub2dnbGU6ICgpID0+IGNoYW5nZUNsYXNzZXMoKSxcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pZiAoU3dpcGVyKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cbiAgICAgICAgY29uc3Qgc2xpZGVyTW9tZW50dW1SYXRpbyA9IDAuNDU1O1xuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmhhc0NsYXNzKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJyk7XG4gICAgICAgIGNvbnN0IHN3aXBlckluc3RhbmNlcyA9IHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgICAgICBiaWc6ICAgICAgICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnN0IHN3aXBlclN0YXRlID0gKHNsaWRlciwgc3dpcGVySW5zdGFuY2UsIHNldHVwKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1heC13aWR0aDogOTkxcHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXN3aXBlckluc3RhbmNlLmluaXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5pdCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHVwKCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKG1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDk5MnB4KScpKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHN3aXBlckluc3RhbmNlLmluaXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIC0tLS0tLS0tICBCSUcgU0xJREVSIC0tLS0tLS0tXG5cbiAgICAgICAgY29uc3QgYmlnU2xpZGVyID0gJCgnLmJpZy1zbGlkZXJfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQmlnU2xpZGVyICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROdW1iZXIgPSAkKCcuYmlnLXNsaWRlcl9fY3VycmVudC1hY3RpdmUnKTtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGJpZ1NsaWRlclswXSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpLmF0dHIoJ2RhdGEtbGVuZ3RoJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROdW1iZXIudGV4dChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlLmFjdGl2ZUluZGV4ICUgcGFyc2VJbnQoY3VycmVudE51bWJlci5hdHRyKCdkYXRhLWxlbmd0aCcpKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmJpZy1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdiaWctc2xpZGVyX19iYXInLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllckNsYXNzOiAnYmlnLXNsaWRlcl9fYmFyLS0nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogZnVuY3Rpb24gKHByb2dyZXNzYmFyRmlsbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIHByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaWdTbGlkZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFJc0luaXRpYWxpemVkKGJpZ1NsaWRlcikpIHtcbiAgICAgICAgICAgICAgICBzZXR1cEJpZ1NsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gQ0FURUdPUlkgU0xJREVSIC0tLS0tLS0tXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5U2xpZGVyID0gJCgnLmNhdGVnb3J5LXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBDYXRlZ29yeVNsaWRlciAoKSB7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuY2F0ZWdvcnkuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGNhdGVnb3J5U2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuY2F0ZWdvcnktc2xpZGVyX19wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnY2F0ZWdvcnktc2xpZGVyX19iYXInLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllckNsYXNzOiAnY2F0ZWdvcnktc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2F0ZWdvcnlTbGlkZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFJc0luaXRpYWxpemVkKGNhdGVnb3J5U2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQ2F0ZWdvcnlTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgRGVib3VuY2UgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgIGxldCBsYXN0RnVuYztcbiAgICBsZXQgbGFzdFJhbjtcblxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcblxuICAgICAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW4pID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIFRocm90dGxlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbXQpID0+IHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCB2YWwsIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXJhbmRvbSA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG5leHBvcnQgY29uc3Qgc2Vjb25kcyA9IChtcykgPT4gbXMgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSkubWF0Y2hlcztcblxuZXhwb3J0IGNvbnN0IHN0YlNjcm9sbFRvID0gKGVsZSwgc3BlZWQgPSAyMDApID0+IHtcbiAgICBpZiAoZ3NhcCkge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQgLyAxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMy5lYXNlT3V0JyxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgICAgICAgeTogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLSBJbWFnZSAvIGNzcyBhc3NldHMgLS0tLS0tLS0tLS0tXG5cbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuY29uc3QgaW5jbHVkZUNvbXBvbmVudCA9IChzY3JpcHQpID0+IHJlcXVpcmUoYC4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy8ke3NjcmlwdH0uanNgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xuICogTGF6eUltYWdlTG9hZGVyLmluaXQoKTtcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLSBDdXN0b20gc2NyaXB0cyAtLS0tLS0tLS0tLS0tLS1cbmluY2x1ZGVDb21wb25lbnQoJ3NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnbmF2YmFyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdjYXJkLXNlY3Rpb24nKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9