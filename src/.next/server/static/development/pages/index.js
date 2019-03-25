module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/CardStyles */ "./components/styles/CardStyles.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Card.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "checkVisible", function (e) {
      if (_this.state.isAnimated) {
        return false;
      }

      var card = _this.cardRef.current;
      var scrollInAt;
      window.scrollY < 0 ? scrollInAt = window.innerHeight : scrollInAt = window.scrollY + window.innerHeight - window.innerHeight * 0.1;
      var isShowing = scrollInAt > card.offsetTop;
      var isNotShowing = window.scrollY < scrollInAt;

      if (isShowing && isNotShowing && !_this.state.isAnimated) {
        _this.setState({
          isAnimated: true
        });

        window.removeEventListener('scroll', _this.onWindowScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addToFavourites", function () {
      var _this$props = _this.props,
          subreddit_name_prefixed = _this$props.subName,
          title = _this$props.title,
          url = _this$props.url,
          permalink = _this$props.permalink,
          num_comments = _this$props.num_comments,
          created_utc = _this$props.created_utc,
          id = _this$props.id;
      var postData = {
        data: {
          subreddit_name_prefixed: subreddit_name_prefixed,
          title: title,
          url: url,
          permalink: permalink,
          num_comments: num_comments,
          created_utc: created_utc,
          id: id
        }
      };

      _this.props.onAddToFavourites(postData);
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowScroll", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (e) {
      return _this.checkVisible(e);
    }, 150));

    _this.cardRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.state = {
      isAnimated: false
    };
    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onWindowScroll();
      window.addEventListener('scroll', this.onWindowScroll);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onWindowScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onWindowScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          subName = _this$props2.subName,
          title = _this$props2.title,
          url = _this$props2.url,
          permalink = _this$props2.permalink,
          num_comments = _this$props2.num_comments,
          created_utc = _this$props2.created_utc,
          isFavourite = _this$props2.isFavourite;
      var isAnimated = this.state.isAnimated;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__["CardStyles"], {
        ref: this.cardRef,
        isAnimated: isAnimated,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__["SubRedditNameStyles"], {
        colour: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["mapSubsToColours"])(subName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, subName), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__["AddToFavouritesButtonStyles"], {
        onClick: this.addToFavourites,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, isFavourite ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__["PostTitleStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: url,
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_CardStyles__WEBPACK_IMPORTED_MODULE_1__["CardFooterStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "short-url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getHostname"])(url)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "card__bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("time", {
        className: "timestamp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getTimeAgo"])(created_utc)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "card__bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "post-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "https://reddit.com".concat(permalink),
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["numCommentsText"])(num_comments)))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search */ "./components/Search.tsx");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Header.tsx";







var onRouteChangeStart = function onRouteChangeStart() {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

var onRouteChangeComplete = function onRouteChangeComplete() {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var onRouteChangeError = function onRouteChangeError() {
  console.log('routeChangeError');
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', onRouteChangeStart);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', onRouteChangeComplete);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', onRouteChangeError);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledMasthead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledHeaderTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "{redditDev}"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledHeaderDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "The best of frontend web development on Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledNavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./favourites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Favourites"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["StyledNavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSearchSubmit: props.onSearchSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/constants */ "./components/styles/constants.ts");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ "./components/Loader.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Home.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.main.withConfig({
  displayName: "Home__CardsContainer",
  componentId: "sc-1lsv5zx-0"
})(["-webkit-column-count:4;column-count:4;-webkit-column-gap:2.5em;column-gap:2.5em;border-top:solid 1px ", ";padding-top:1.25em;padding-bottom:1em;width:85%;margin:2rem auto;margin-left:calc(7.5% + 2rem);@media (max-width:", "px){column-gap:1.5rem;}@media (max-width:", "px){column-count:3;}@media (max-width:", "px){column-count:2;}@media (max-width:", "px){column-gap:1rem;width:90%;margin-left:calc(5% + 2rem);}@media (max-width:", "px){column-count:1;width:95%;margin-left:auto;}&::after{content:'';width:100%;position:fixed;height:40px;background:-webkit-gradient(linear,left top,left bottom,from(rgba(236,238,241,0.001)),to(white));background:linear-gradient(rgba(236,238,241,0.001),white);pointer-events:none;bottom:0;left:0;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].text_grey_mid_two, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].desktop_lg, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].desktop_md, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].desktop_sm, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].tablet, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].mobile);

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          posts = _this$props.posts,
          favourites = _this$props.favourites,
          onSearchSubmit = _this$props.onSearchSubmit,
          onAddNewFavourite = _this$props.onAddNewFavourite;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSearchSubmit: onSearchSubmit,
        onAddNewFavourite: onAddNewFavourite,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardsContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }) : posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: post.data.id,
          id: post.data.id,
          subName: post.data.subreddit_name_prefixed,
          title: post.data.title,
          url: post.data.url,
          permalink: post.data.permalink,
          num_comments: post.data.num_comments,
          created_utc: post.data.created_utc,
          isFavourite: favourites.filter(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["isAlreadyFavourite"])({
            data: {
              title: post.data.title,
              created_utc: post.data.created_utc
            }
          })).length > 0,
          onAddToFavourites: _this.props.onAddToFavourites,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        });
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Layout.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? 'redditDev' : _this$props$title;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, title)), children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loader.tsx":
/*!*******************************!*\
  !*** ./components/Loader.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_LoaderStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/LoaderStyles */ "./components/styles/LoaderStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Loader.tsx";



var Loader = function Loader() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_LoaderStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "{"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "}"));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _styles_SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/SearchStyles */ "./components/styles/SearchStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Search.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var onUserEntry = function onUserEntry(e) {
    setInput(e.target.value);
  };

  var onSubmit = function onSubmit(e) {
    onSearchSubmit(input);
  };

  var handleKeyup = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (e) {
    return onSubmit(e);
  }, 500);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SearchStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "search__input",
    type: "search",
    placeholder: "Search posts",
    value: input,
    onChange: onUserEntry,
    onKeyUp: handleKeyup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 125",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    className: "search__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#000",
    d: "M78.129 78.325L65.121 61.063c8.65-8.773 9.834-22.812 2.203-32.938-4.822-6.396-12.186-10.064-20.203-10.064-5.52 0-10.775 1.762-15.195 5.092-11.131 8.393-13.361 24.271-4.975 35.396 4.822 6.396 12.186 10.066 20.205 10.066 4.74 0 9.25-1.373 13.242-3.848l12.938 17.17 4.793-3.612zM31.742 54.938c-6.395-8.484-4.693-20.594 3.793-26.992a19.114 19.114 0 0 1 11.586-3.885c6.117 0 11.734 2.799 15.41 7.676 6.398 8.49 4.697 20.6-3.793 26.996a19.092 19.092 0 0 1-11.582 3.883c-6.117 0-11.736-2.797-15.414-7.678z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    id: "search-close-btn",
    className: "search__close-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SidebarStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/SidebarStyles */ "./components/styles/SidebarStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Sidebar.tsx";



var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SidebarStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Created in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "loc-icon",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 19.674 19.674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "London"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.804,7.278L9.843,8.237L9.836,8.236c-0.005,0-0.007,0.005-0.013,0.005L9.121,7.535l-0.19,0.193L9.64,8.435\r c0,0.111,0.089,0.2,0.197,0.2c0.11,0,0.199-0.089,0.199-0.2c0-0.001-0.002-0.003-0.002-0.005l0.961-0.96L10.804,7.278z\r M12.017,18.66v-8.442h0.163V6.774h0.057V6.508h-0.379v-0.4l0,0L10.97,4.447h0.004V3.292h-0.017C10.888,3.132,9.95,0.416,9.883,0\r H9.79C9.724,0.416,8.783,3.132,8.718,3.292h-0.02v1.154l0,0l-0.88,1.662H7.816v0.4h-0.38v0.266h0.06v3.443h0.162v8.443h-0.69v1.014\r h5.738V18.66H12.017z M9.836,10.138c-0.939,0-1.701-0.763-1.701-1.703c0-0.939,0.762-1.702,1.701-1.702s1.702,0.762,1.702,1.702\r S10.777,10.138,9.836,10.138z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), "by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://jamestbyrne.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "James Byrne"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/styles/CardStyles.tsx":
/*!******************************************!*\
  !*** ./components/styles/CardStyles.tsx ***!
  \******************************************/
/*! exports provided: CardStyles, SubRedditNameStyles, PostTitleStyles, CardFooterStyles, AddToFavouritesButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStyles", function() { return CardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRedditNameStyles", function() { return SubRedditNameStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTitleStyles", function() { return PostTitleStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooterStyles", function() { return CardFooterStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavouritesButtonStyles", function() { return AddToFavouritesButtonStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");


var CardStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "CardStyles",
  componentId: "sc-1on57zg-0"
})(["margin:0 0 1.25em 0;width:100%;background:white;break-inside:avoid;overflow-wrap:break-word;padding:1em 0.75em;-webkit-transform:translateY(200px) scale(0.9);transform:translateY(200px) scale(0.9);opacity:0;-webkit-transition:opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 1s ease-in-out 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;-webkit-column-break-inside:avoid;", " .card-header{width:100%;display:flex;justify-content:space-between;}"], function (_ref) {
  var isAnimated = _ref.isAnimated;
  return isAnimated && "transform: translateY(0) scale(1);\n      opacity: 1;";
});
var SubRedditNameStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "CardStyles__SubRedditNameStyles",
  componentId: "sc-1on57zg-1"
})(["font-family:", ";padding:0.5em 0.75em;margin:0;display:inline-block;font-weight:700;text-transform:uppercase;font-size:0.75rem;color:#fff;letter-spacing:1px;background:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, function (props) {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["constants"]["subreddit_colour_".concat(props.colour)];
});
var PostTitleStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "CardStyles__PostTitleStyles",
  componentId: "sc-1on57zg-2"
})(["padding:1.5em 0;font-size:1.25rem;margin:0;-webkit-transition:all 0.15s;transition:all 0.15s;text-align:left;a{font-family:'Tiempos Headline',georgia,serif;font-weight:700;color:", ";text-decoration:none;line-height:1.3;max-width:100%;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-transition:all 0.15s;transition:all 0.15s;}a:hover{color:#000 !important;border-bottom:solid 1px #000;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].text_grey_dark);
var CardFooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "CardStyles__CardFooterStyles",
  componentId: "sc-1on57zg-3"
})(["font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:0.75rem;letter-spacing:0.02em;color:", ";.post-comments{font-family:", ";display:block;text-align:left;white-space:nowrap;padding:0 0.75em;-webkit-transition:all 0.15s;transition:all 0.15s;a{-webkit-transition:all 0.15s;transition:all 0.15s;cursor:pointer;}a:hover{color:", " !important;padding-bottom:0.125em;border-bottom:solid 1px;-webkit-transition:all 0.1s;transition:all 0.1s;}}.post-comments,.short-url,.timestamp{padding:0 0.25em;}.card__bar{font-size:0.875em;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].nearBlack);
var AddToFavouritesButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CardStyles__AddToFavouritesButtonStyles",
  componentId: "sc-1on57zg-4"
})(["cursor:pointer;height:16px;line-height:1;display:flex;align-items:center;"]);

/***/ }),

/***/ "./components/styles/GlobalStyles.tsx":
/*!********************************************!*\
  !*** ./components/styles/GlobalStyles.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml {\n    background: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: ", ";\n    /* opacity: 0; */\n    -webkit-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    margin: 0;\n    padding: 0;\n}\n\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\na:link {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\na:visited {\n\tcolor: inherit;\n}\n\nbutton {\n\tbackground: transparent;\n\tborder: 0;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].background_grey, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].text_grey_dark, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./components/styles/HeaderStyles.tsx":
/*!********************************************!*\
  !*** ./components/styles/HeaderStyles.tsx ***!
  \********************************************/
/*! exports provided: StyledHeader, StyledMasthead, StyledHeaderTitle, StyledHeaderDescription, StyledNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMasthead", function() { return StyledMasthead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeaderTitle", function() { return StyledHeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeaderDescription", function() { return StyledHeaderDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavItem", function() { return StyledNavItem; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "HeaderStyles__StyledHeader",
  componentId: "fr55j3-0"
})(["z-index:350;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:140px;background:#fff;-webkit-box-shadow:0 0 0 1px ", ";box-shadow:0 0 0 1px ", ";grid-area:header;.header__title-wrapper{display:flex;align-items:baseline;}"], _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].text_grey_mid_two);
var StyledMasthead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderStyles__StyledMasthead",
  componentId: "fr55j3-1"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding:0.25em 0;width:85%;height:auto;margin:0 auto 0 10%;"]);
var StyledHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "HeaderStyles__StyledHeaderTitle",
  componentId: "fr55j3-2"
})(["font-family:'Tiempos Headline Black';font-size:3.75rem;font-weight:700;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px;z-index:100;color:$nearBlack;line-height:1;text-align:left;"]);
var StyledHeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "HeaderStyles__StyledHeaderDescription",
  componentId: "fr55j3-3"
})(["font-family:", ";font-size:1rem;padding-bottom:0.25em;color:#495456;font-weight:400;line-height:1.2;-webkit-transition:all 0.3s;transition:all 0.3s;padding-right:1em;margin-left:1rem;"], _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].sansSerif);
var StyledNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "HeaderStyles__StyledNavItem",
  componentId: "fr55j3-4"
})(["display:flex;align-items:center;margin-left:-2px;padding-left:1em;position:relative;font-weight:bold;a,button{display:flex;align-items:center;position:relative;background:none;border:0;cursor:pointer;transition:all 0.2s ease-out;padding:0 1em;line-height:2.4;border:solid 2px ", ";&:hover{color:white;background:", ";}}"], _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].nearBlack, _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].nearBlack);

/***/ }),

/***/ "./components/styles/LoaderStyles.tsx":
/*!********************************************!*\
  !*** ./components/styles/LoaderStyles.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/constants */ "./components/styles/constants.ts");


var LoaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LoaderStyles",
  componentId: "rqwkb1-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:3.5em;height:2rem;color:", ";font-family:", ";font-size:2rem;opacity:0.8;margin:auto;position:absolute;top:calc(30vh - 180px);left:0;right:0;bottom:0;span{display:inline-block;-webkit-animation:pulse 0.4s alternate infinite ease-in-out;animation:pulse 0.4s alternate infinite ease-in-out;}span:nth-child(odd){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes pulse{to{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}}@keyframes pulse{to{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}}"], _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].nearBlack, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif);
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyles);

/***/ }),

/***/ "./components/styles/SearchStyles.tsx":
/*!********************************************!*\
  !*** ./components/styles/SearchStyles.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/constants */ "./components/styles/constants.ts");


var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchStyles",
  componentId: "km8rng-0"
})(["width:300px;position:relative;.search__input{display:block;font-size:1rem;padding:0.25em;border:none;height:2.75em;background:", ";border-radius:6px;width:100%;padding-left:3em;font-family:", " &:focus{&::placeholder{opacity:0;}}}.search__icon{position:absolute;top:0.575em;left:0.65em;height:2em;}.search__close-btn{display:none;font-size:1rem;background:transparent;border:0;margin-left:1em;cursor:pointer;}::-webkit-input-placeholder{color:", ";font-size:1rem;font-weight:300;}:-ms-input-placeholder{color:", ";font-size:1rem;font-weight:300;}::placeholder{color:", ";font-size:1rem;font-weight:300;}.search-term{font-family:$serif;font-weight:bold;font-size:1.5rem;margin:auto;position:relative;}.search-term .wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;}.clear-search{font-family:", ";font-size:1rem;color:", ";margin-top:2em;cursor:pointer;display:block;border-bottom:solid 2px transparent;-webkit-transition:all 0.15s;transition:all 0.15s;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, _styles_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].text_grey_mid_two);
/* harmony default export */ __webpack_exports__["default"] = (SearchStyles);

/***/ }),

/***/ "./components/styles/SidebarStyles.tsx":
/*!*********************************************!*\
  !*** ./components/styles/SidebarStyles.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");


var SidebarStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside.withConfig({
  displayName: "SidebarStyles",
  componentId: "sc-1qdeyni-0"
})(["font-size:0.75rem;border-bottom:0;transform:rotate(-90deg);transform-origin:0 0;position:fixed;top:50vh;left:1.25rem;&::before{content:'';display:block;height:1px;width:3rem;right:4rem;bottom:-0.8rem;background:currentColor;position:relative;}@media (max-width:", "px){display:none;}.loc-icon{height:1rem;}"], _constants__WEBPACK_IMPORTED_MODULE_1__["sizes"].mobile);
/* harmony default export */ __webpack_exports__["default"] = (SidebarStyles);

/***/ }),

/***/ "./components/styles/constants.ts":
/*!****************************************!*\
  !*** ./components/styles/constants.ts ***!
  \****************************************/
/*! exports provided: constants, sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
var constants = {
  /* Typography */
  sansSerif: "'space mono',\nhelvetica,\narial,\nsans-serif;",
  serif: "'Tiempos Headline',\ngeorgia,\nserif",

  /* Colours */
  nearBlack: '#24292e',
  highlightColourOne: '#fdf522',
  background_grey: '#eceef1',
  text_grey_dark: '#302F2F',
  text_grey_mid_one: '#c9c9c9',
  text_grey_mid_two: '#ccc',
  subreddit_colour_one: '#CAD3C8',
  subreddit_colour_two: '#3B3B98',
  subreddit_colour_three: '#EAB543',
  subreddit_colour_four: '#FEA47F',
  subreddit_colour_five: '#ff6b81',
  subreddit_colour_six: '#55E6C1',
  subreddit_colour_seven: '#D6A2E8',
  subreddit_colour_eight: '#25CCF7',
  subreddit_colour_nine: '#006266',
  subreddit_colour_ten: '#535c68'
};
var sizes = {
  desktop_lg: 1600,
  desktop_md: 1376,
  desktop_sm: 1024,
  tablet: 768,
  mobile: 576
};

/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: mapSubsToColours, getHostname, numCommentsText, getTimeAgo, debounce, filterPostsCallback, isAlreadyFavourite, sortByNewest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSubsToColours", function() { return mapSubsToColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostname", function() { return getHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numCommentsText", function() { return numCommentsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeAgo", function() { return getTimeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPostsCallback", function() { return filterPostsCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlreadyFavourite", function() { return isAlreadyFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByNewest", function() { return sortByNewest; });
function mapSubsToColours(sub) {
  switch (sub.replace('r/', '').toLowerCase()) {
    case 'css':
      return 'one';

    case 'webdev':
      return 'two';

    case 'web_design':
      return 'three';

    case 'typescript':
      return 'four';

    case 'javascript':
      return 'five';

    case 'frontend':
      return 'six';

    case 'graphql':
      return 'seven';

    case 'reactjs':
      return 'eight';

    case 'node':
      return 'nine';

    case 'vue':
      return 'ten';

    default:
      return 'one';
  }
}
function getHostname(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  return match[2];
}
function numCommentsText(numComments) {
  return numComments === 1 ? "".concat(numComments, " comment") : "".concat(numComments, " comments");
}
/**
 * Convert the UNIX timestamp provided by the API into human-readable format
 */

function getTimeAgo(timestamp) {
  var d = new Date(); // Convert the passed timestamp to milliseconds

  var tNowS = Math.floor(d.getTime() / 1000);
  var seconds = tNowS - timestamp;
  var mins = Math.floor(seconds / 60);
  var hours = Math.floor(mins / 60);
  var days = Math.floor(seconds / 3600 / 24);

  if (days >= 8) {
    return 'A week ago';
  } else if (seconds > 2 * 24 * 3600) {
    return Math.floor(days) + 'd ago';
  } else if (seconds > 24 * 3600) {
    return 'Yesterday';
  } else if (mins > 60) {
    return hours + 'h ago';
  } else if (2 < mins < 60) {
    return mins + 'm ago';
  } else {
    return mins + 'Just now';
  }
}
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function filterPostsCallback(searchTerm) {
  return function (post) {
    return post.data.title.includes(searchTerm) || post.data.url.includes(searchTerm);
  };
}
function isAlreadyFavourite(postToCheck) {
  return function (post) {
    return postToCheck.data.title === post.data.title && postToCheck.data.created_utc === post.data.created_utc;
  };
}
function sortByNewest(a, b) {
  return b.data.created - a.data.created;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ "./components/Home.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\index.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var IndexPage = function IndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "RedditDev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map