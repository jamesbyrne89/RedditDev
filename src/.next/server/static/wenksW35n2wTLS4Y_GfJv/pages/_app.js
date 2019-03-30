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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mapSubsToColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return numCommentsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTimeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterPostsCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isAlreadyFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sortByNewest; });
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(12);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(13);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./lib/subreddits.ts
var endpoints = {
  webdev: 'https://www.reddit.com/r/webdev.json?',
  web_design: 'https://www.reddit.com/r/web_design.json?',
  frontend: 'https://www.reddit.com/r/frontend.json?',
  css: 'https://www.reddit.com/r/css.json?',
  javascript: 'https://www.reddit.com/r/javascript.json?',
  react_js: 'https://www.reddit.com/r/reactjs.json?',
  graphql: 'https://www.reddit.com/r/graphql.json?',
  node: 'https://www.reddit.com/r/node.json?',
  typescript: 'https://www.reddit.com/r/typescript.json?',
  vue: 'https://www.reddit.com/r/vue.json?'
};
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_app.tsx



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      posts: [],
      filteredPosts: [],
      isFiltered: false,
      favourites: []
    });

    _defineProperty(_assertThisInitialized(_this), "filterPosts", function () {
      var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!searchTerm) {
        return _this.setState({
          filteredPosts: _this.state.posts,
          isFiltered: false
        });
      }

      _this.setState({
        loading: true
      });

      var filtered = _this.state.posts.filter(Object(utils["b" /* filterPostsCallback */])(searchTerm));

      _this.setState({
        filteredPosts: filtered,
        loading: false,
        isFiltered: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addToFavourites", function (postToAdd) {
      if (_this.state.favourites.filter(Object(utils["e" /* isAlreadyFavourite */])(postToAdd)).length > 0) {
        return _this.removeFromFavourites(postToAdd);
      }

      var newFavouritesList = [].concat(_toConsumableArray(_this.state.favourites), [postToAdd]);

      _this.setState({
        favourites: newFavouritesList
      }, function () {
        localStorage.setItem('favourite-reddit-posts', JSON.stringify(_this.state.favourites));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeFromFavourites", function (postToRemove) {
      var newFavouritesList = _this.state.favourites.filter(function (fav) {
        return postToRemove.data.title !== fav.data.title && postToRemove.data.created_utc !== fav.data.created_utc;
      });

      _this.setState({
        favourites: newFavouritesList
      }, function () {
        localStorage.setItem('favourite-reddit-posts', JSON.stringify(_this.state.favourites));
      });
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      localStorage.setItem('reddit-posts', JSON.stringify(this.props.posts));
      var cachedFavourites = JSON.parse(localStorage.getItem('favourite-reddit-posts')) || [];
      this.setState({
        loading: false,
        posts: this.props.posts,
        favourites: cachedFavourites
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          posts = _this$state.posts,
          filteredPosts = _this$state.filteredPosts,
          isFiltered = _this$state.isFiltered;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(Component, _extends({
        posts: isFiltered ? filteredPosts : posts,
        loading: this.state.loading,
        onSearchSubmit: this.filterPosts,
        onAddToFavourites: this.addToFavourites,
        favourites: this.state.favourites
      }, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var data, cleaned, filterFunc, postsSortedByNewest, postsToDisplay;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.all(Object.keys(endpoints).map(function (url) {
                  return external_axios_default.a.get(endpoints[url]);
                }));

              case 2:
                data = _context.sent;
                cleaned = data.reduce(function (acc, curr) {
                  return [].concat(_toConsumableArray(curr.data.data.children), _toConsumableArray(acc));
                }, []);
                postsSortedByNewest = cleaned.sort(utils["h" /* sortByNewest */]);
                postsToDisplay = filterFunc ? postsSortedByNewest.filter(filterFunc) : postsSortedByNewest;
                return _context.abrupt("return", {
                  posts: postsToDisplay
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ })
/******/ ]);