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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsic3dpcGVyRGVza3RvcCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJzd2lwZXJNb2JpbGUiLCJwYWdpbmF0aW9uIiwiZWwiLCJjYXJkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vYmlsZUNhcmRzIiwiZm9yRWFjaCIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZyIsIkxPQURFRF9DTEFTUyIsIlJFVkVBTF9DTEFTUyIsImFsdCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwid2luZG93IiwibGxJbnN0YW5jZSIsImxsRGlzY29ubmVjdCIsIm1lbnUiLCJuYXZiYXIiLCJoYW1idXJnZXIiLCJvdmVybGF5IiwibWVudUFjdGl2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsIm9uIiwic2xpZGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInRleHQiLCJhY3RpdmVJbmRleCIsInBhcnNlSW50IiwidHlwZSIsInByb2dyZXNzYmFyRmlsbENsYXNzIiwibW9kaWZpZXJDbGFzcyIsInJlbmRlclByb2dyZXNzYmFyIiwiY2F0ZWdvcnlTbGlkZXIiLCJzZXR1cENhdGVnb3J5U2xpZGVyIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIndhcm4iLCJ0aHJvdHRsZSIsImxpbWl0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwiRGF0ZSIsIm5vdyIsImxlcnAiLCJzdGFydCIsImVuZCIsImFtdCIsInZhbCIsImlyYW5kb20iLCJmbG9vciIsInJhbmRvbSIsInNlY29uZHMiLCJtcyIsIm1lZGlhUXVlcnkiLCJxdWVyeSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3RiU2Nyb2xsVG8iLCJzcGVlZCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInNjcm9sbFRvIiwieSIsIm9mZnNldCIsInRvcCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicmVxdWlyZSIsImluY2x1ZGVDb21wb25lbnQiLCJzY3Jp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QjtBQUNBQSxnQkFBZ0IsQ0FBQyxRQUFELENBQWhCO0FBQ0FBLGdCQUFnQixDQUFDLGNBQUQsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUNuQkEsc0I7Ozs7Ozs7Ozs7O0FDQUEsd0I7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FyZC1zZWN0aW9uLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jYXJkLXNlY3Rpb24uanNcIixcblx0XCIuL2hlbHBlcnMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanNcIixcblx0XCIuL2xhenlpbWFnZWxvYWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzXCIsXG5cdFwiLi9uYXZiYXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qc1wiLFxuXHRcIi4vcmVzb3VyY2UuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzXCIsXG5cdFwiLi9zbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qc1wiLFxuXHRcIi4vdXRpbHMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuY29uc3Qgc3dpcGVyRGVza3RvcCA9IG5ldyBTd2lwZXIoJy5jc19fY2FyZC1ib3gtZGVza3RvcCcsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlck1vYmlsZSA9IG5ldyBTd2lwZXIoJy5jc19fY2FyZC1ib3gtbW9iaWxlJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG4vLyBzdHlsZSBmb3IgZXZlcnkgc2Vjb25kIGNhcmQgaW4gc2xpZGVyXHJcbmxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jc19fY2FyZC1ib3gtZGVza3RvcF9fY2FyZCcpO1xyXG5sZXQgbW9iaWxlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3NfX2NhcmQtYm94LW1vYmlsZV9fY2FyZCcpO1xyXG5cclxuaWYgKGNhcmRzKSB7XHJcbiAgICBjYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1jYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChtb2JpbGVDYXJkcykge1xyXG4gICAgbW9iaWxlQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtY2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9JbWFnZVByZWxvYWQgPSB1cmwgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cbmNvbnN0IGFzc2VydCA9IChwcmVkaWNhdGUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXNzZXJ0LCBjbGFtcCwgZG9JbWFnZVByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIExhenlJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGdldCBPQlNFUlZFUl9TVVBQT1JURUQgKCkge1xuICAgICAgICByZXR1cm4gKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFBFTkRJTkdfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLXBlbmRpbmcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgSEFORExFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tbG9hZGVkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IExPQURFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZV9fYWN0dWFsJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFJFVkVBTF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZS1pbic7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUSFJFU0hPTEQgKCkge1xuICAgICAgICByZXR1cm4gMC4xO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGxJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5sbEluc3RhbmNlLmxsRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sbEluc3RhbmNlID0gbmV3IExhenlJbWFnZUxvYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0xhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTfWApO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzYwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogTGF6eUltYWdlTG9hZGVyLlRIUkVTSE9MRFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghTGF6eUltYWdlTG9hZGVyLk9CU0VSVkVSX1NVUFBPUlRFRCkge1xuICAgICAgICAgICAgdGhpcy5sbExvYWRJbWFnZXNEZWZhdWx0KGltYWdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmxsSW50ZXJzZWN0ZWQgPSB0aGlzLmxsSW50ZXJzZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sbE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMubGxJbnRlcnNlY3RlZCwgY29uZmlnKTtcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsbERpc2Nvbm5lY3QgKCkge1xuICAgICAgICBpZiAoIXRoaXMubGxPYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbEludGVyc2VjdGVkIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxsQ291bnQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsUHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5sbENvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbFByZWxvYWRJbWFnZSAoaW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSGVscGVycy5kb0ltYWdlUHJlbG9hZChzcmMpLnRoZW4oKCkgPT4gdGhpcy5sbFRhZ0ltYWdlKGltYWdlLCBzcmMpKTtcbiAgICB9XG5cbiAgICBsbExvYWRJbWFnZXNEZWZhdWx0IChpbWFnZXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4gdGhpcy5sbFByZWxvYWRJbWFnZShpbWFnZSkpO1xuICAgIH1cblxuICAgIGxsVGFnSW1hZ2UgKGltZywgc3JjKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW1nLnF1ZXJ5U2VsZWN0b3IoJy5sYXp5LWltYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5MT0FERURfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuc3Jjc2V0ID0gc3JjO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuUkVWRUFMX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLmFsdCA9IGVsLmFsdDtcbiAgICAgICAgaW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XG5cbiAgICAgICAgaW1nLmRhdGFzZXQuc3Jjc2V0ID0gJyc7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKExhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eUltYWdlTG9hZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1ib3gnKTtcclxubGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxubGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX3NtYWxsLW1lbnUtYm94X19tZW51LWljb24nKTtcclxubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5sZXQgbWVudUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuLy8gb3BlbiBkcm9wZG93blxyXG5pZiAobWVudSAmJiBoYW1idXJnZXIgJiYgb3ZlcmxheSAmJiBuYXZiYXIpIHtcclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2ZsZXgtYm94LXNob3cnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktc2hvdycpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXNob3cnKTtcclxuICAgICAgICBtZW51QWN0aXZlID0gIW1lbnVBY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCAyMDAgJiYgIW1lbnVBY3RpdmUpIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtYm94LXNob3cnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktc2hvdycpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcclxuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1tZW51Jyk7XHJcbiAgICAgICAgbWVudUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgMjAwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBkcm9wZG93biBiYWNrZ3JvdW5kLWNvbG9yIGNoYW5nZVxyXG5pZiAobmF2YmFyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgMjAwICYmICFtZW51QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmlmIChTd2lwZXIpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XG4gICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgICAgIGJpZzogICAgICAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc3dpcGVyU3RhdGUgPSAoc2xpZGVyLCBzd2lwZXJJbnN0YW5jZSwgc2V0dXApID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA5OTFweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1pbi13aWR0aDogOTkycHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gIEJJRyBTTElERVIgLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBiaWdTbGlkZXIgPSAkKCcuYmlnLXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBCaWdTbGlkZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9ICQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpO1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYmlnU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJykuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE51bWJlci50ZXh0KHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UuYWN0aXZlSW5kZXggJSBwYXJzZUludChjdXJyZW50TnVtYmVyLmF0dHIoJ2RhdGEtbGVuZ3RoJykpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuYmlnLXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2JpZy1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdiaWctc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpZ1NsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYmlnU2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQmlnU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSBDQVRFR09SWSBTTElERVIgLS0tLS0tLS1cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTbGlkZXIgPSAkKCcuY2F0ZWdvcnktc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cENhdGVnb3J5U2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5jYXRlZ29yeS5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoY2F0ZWdvcnlTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5jYXRlZ29yeS1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXRlZ29yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoY2F0ZWdvcnlTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBDYXRlZ29yeVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBEZWJvdW5jZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIGxpbWl0KSA9PiB7XG4gICAgbGV0IGxhc3RGdW5jO1xuICAgIGxldCBsYXN0UmFuO1xuXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgVGhyb3R0bGUgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtdCkgPT4ge1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIHZhbCwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpcmFuZG9tID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gKG1zKSA9PiBtcyAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpKS5tYXRjaGVzO1xuXG5leHBvcnQgY29uc3Qgc3RiU2Nyb2xsVG8gPSAoZWxlLCBzcGVlZCA9IDIwMCkgPT4ge1xuICAgIGlmIChnc2FwKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCAvIDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIzLmVhc2VPdXQnLFxuICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICB5OiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG5jb25zdCBpbmNsdWRlQ29tcG9uZW50ID0gKHNjcmlwdCkgPT4gcmVxdWlyZShgLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzLyR7c2NyaXB0fS5qc2ApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuaW5jbHVkZUNvbXBvbmVudCgnc2xpZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCduYXZiYXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2NhcmQtc2VjdGlvbicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBnc2FwOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gU3dpcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=