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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return darkTheme; });
var constants = {
  /* Typography */
  sansSerif: "'space mono',\nhelvetica,\narial,\nsans-serif;",
  serif: "'Tiempos Headline',\ngeorgia,\nserif",

  /* Colours */
  nearBlack: '#24292e',
  highlightColourOne: '#fdf522',
  background_grey: '#eceef1',
  text_grey_dark: '#302F2F',
  text_grey_dark_two: '#2d303a',
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
var lightTheme = {
  header_background: '#fff',
  main_background: constants.background_grey,
  font_colour_primary: constants.nearBlack,
  card_background: '#fff',
  button_colour: constants.nearBlack,
  button_hover_colour: '#fff',
  mid_grey: '#ccc',
  fade: "linear-gradient(rgba(255, 255, 255, 0.001), #fff)",
  border_colour: constants.text_grey_mid_two
};
var darkTheme = {
  header_background: constants.nearBlack,
  font_colour_primary: '#fff',
  main_background: constants.text_grey_dark_two,
  card_background: constants.nearBlack,
  button_colour: '#fff',
  button_hover_colour: constants.nearBlack,
  mid_grey: '#ccc',
  fade: "linear-gradient(rgba(36,41,46, 0.001), ".concat(constants.nearBlack, ")"),
  border_colour: constants.text_grey_mid_two
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
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

    case 'vuejs':
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
function filterPostsCallback() {
  var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var subreddits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function (post) {
    var data = post.data;
    return (data.title.includes(searchTerm) || data.url.includes(searchTerm)) && subreddits.includes(data.subreddit);
  };
}
function isAlreadyFavourite(postToCheck) {
  return function (post) {
    return postToCheck.data.title === post.data.title && postToCheck.data.id === post.data.id;
  };
}
function sortByNewest(a, b) {
  return b.data.created - a.data.created;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MastheadStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogoStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavItemStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "HeaderStyles",
  componentId: "fr55j3-0"
})(["z-index:350;display:flex;align-items:center;width:100%;background:", ";box-shadow:0 0 0 1px ", ";grid-area:header;position:sticky;top:0;.header__title-wrapper{display:flex;align-items:center;}.header__nav-wrapper{display:flex;justify-content:flex-end;padding-top:0.25rem;> a{margin:0 0.5rem;border-bottom:solid 1px transparent;&:last-of-type{margin-right:0;}&:hover{border-bottom:solid 1px currentColor;}}}ul{display:flex;justify-content:flex-end;flex-grow:1;margin:0.5rem 0;@media (max-width:", "px){justify-content:flex-start;}@media (max-width:", "px){justify-content:flex-end;}}"], function (props) {
  return props.theme.header_background;
}, _constants__WEBPACK_IMPORTED_MODULE_0__[/* constants */ "a"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_0__[/* sizes */ "d"].desktop_sm, _constants__WEBPACK_IMPORTED_MODULE_0__[/* sizes */ "d"].tablet);
var MastheadStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderStyles__MastheadStyles",
  componentId: "fr55j3-1"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;align-items:flex-end;padding:0.25em 0;width:85%;height:auto;margin:0 auto 0 calc(7.5% + 2rem);@media (max-width:", "px){flex-wrap:wrap;justify-content:flex-start;}@media (max-width:", "px){width:95%;margin-left:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_0__[/* sizes */ "d"].desktop_sm, _constants__WEBPACK_IMPORTED_MODULE_0__[/* sizes */ "d"].tablet);
var LogoStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "HeaderStyles__LogoStyles",
  componentId: "fr55j3-2"
})(["font-family:'Tiempos Headline Black';font-size:", ";font-weight:700;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px;z-index:100;color:", ";line-height:1;text-align:left;margin:0;padding:", ";cursor:pointer;@media (max-width:", "px){font-size:2.5rem;}"], function (props) {
  return props.fontSize || '3.75rem';
}, function (props) {
  return props.theme.font_colour_primary;
}, function (props) {
  return props.padding || '0';
}, _constants__WEBPACK_IMPORTED_MODULE_0__[/* sizes */ "d"].tablet);
var NavItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "HeaderStyles__NavItemStyles",
  componentId: "fr55j3-3"
})(["display:flex;align-items:center;margin-left:-2px;padding-left:1em;position:relative;font-weight:bold;li{cursor:pointer;}a,button{display:flex;align-items:center;position:relative;background:none;border:0;cursor:pointer;transition:all 0.2s ease-out;padding:0 1em;line-height:2.4;color:", ";border:solid 2px ", ";&:hover{color:", ";background:", ";}}"], function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_hover_colour;
}, function (props) {
  return props.theme.button_colour;
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



var config = {
  apiKey: "AIzaSyBkHyS6BMFlRBww9mZMsTQgMzjp6P9ml6M",
  authDomain: "redditdev-e11fc.firebaseapp.com",
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: "redditdev-e11fc",
  storageBucket: 'redditdev-e11fc.appspot.com',
  messagingSenderId: '976173547224'
};

var init = function init() {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  }

  var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
  return db;
};

/* harmony default export */ __webpack_exports__["b"] = (init());
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SubRedditNameStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PostTitleStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardFooterStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToFavouritesButtonStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var CardStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "CardStyles",
  componentId: "sc-1on57zg-0"
})(["margin:0 0 1.25em 0;width:100%;background:", ";break-inside:avoid;overflow-wrap:break-word;padding:1em 0.75em;-webkit-transform:translateY(200px) scale(0.9);transform:translateY(200px) scale(0.9);opacity:0;-webkit-transition:opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 0.75s ease-in-out 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;-webkit-column-break-inside:avoid;", " .card-header{width:100%;display:flex;justify-content:space-between;}"], function (props) {
  return props.theme.card_background;
}, function (_ref) {
  var isAnimated = _ref.isAnimated;
  return isAnimated && "transform: translateY(0) scale(1);\n      opacity: 1;";
});
var SubRedditNameStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "CardStyles__SubRedditNameStyles",
  componentId: "sc-1on57zg-1"
})(["font-family:", ";padding:0.5em 0.75em;margin:0;display:inline-block;font-weight:700;text-transform:uppercase;font-size:0.75rem;color:#fff;letter-spacing:1px;cursor:pointer;background:", ";"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].sansSerif, function (props) {
  return props.deselected ? _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].background_grey : _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"]["subreddit_colour_".concat(props.colour)];
});
var PostTitleStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "CardStyles__PostTitleStyles",
  componentId: "sc-1on57zg-2"
})(["padding:1.5em 0;font-size:1.25rem;margin:0;-webkit-transition:all 0.15s;transition:all 0.15s;text-align:left;color:", ";@media (max-width:", "px){padding:0.75em 0;}a{font-family:'Tiempos Headline',georgia,serif;font-weight:700;text-decoration:none;line-height:1.3;max-width:100%;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-transition:border 0.15s;transition:border 0.15s;}a:hover{color:inherit;border-bottom:solid 1px #000;}"], function (props) {
  return props.theme.font_colour_primary;
}, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].tablet);
var CardFooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "CardStyles__CardFooterStyles",
  componentId: "sc-1on57zg-3"
})(["font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:0.75rem;letter-spacing:0.02em;color:", ";.post-comments{font-family:", ";display:block;text-align:left;white-space:nowrap;padding:0 0.75em;-webkit-transition:all 0.15s;transition:all 0.15s;a{-webkit-transition:all 0.15s;transition:all 0.15s;cursor:pointer;}a:hover{color:", " !important;padding-bottom:0.125em;border-bottom:solid 1px;-webkit-transition:all 0.1s;transition:all 0.1s;}}.post-comments,.short-url,.timestamp{padding:0 0.25em;}.card__bar{font-size:0.875em;}"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].sansSerif, _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].nearBlack);
var AddToFavouritesButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CardStyles__AddToFavouritesButtonStyles",
  componentId: "sc-1on57zg-4"
})(["cursor:pointer;height:20px;width:auto;line-height:1;display:flex;align-items:center;svg{fill:", ";}@media (max-width:", "px){height:24px;}"], function (props) {
  return props.theme.button_colour;
}, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].tablet);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InputStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormSubmitButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var FormStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "FormStyles",
  componentId: "ebjcw0-0"
})(["border:solid 2px black;padding:2rem 2.5rem;width:380px;margin:auto;margin-top:20vh;background:", ";border:solid 1px ", ";h2{font-family:", ";margin-top:0;}"], function (props) {
  return props.theme.card_background;
}, function (props) {
  return props.theme.border_colour;
}, _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].serif);
var InputStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "FormStyles__InputStyles",
  componentId: "ebjcw0-1"
})(["margin-top:1.25rem;line-height:1.5;display:block;font-family:", ";font-size:1rem;padding:0.25em 0.75em;border:none;height:2.75em;background:", ";border-radius:6px;width:100%;color:inherit;&:focus{&::placeholder{opacity:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].sansSerif, function (props) {
  return props.theme.main_background;
});
var FormSubmitButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "FormStyles__FormSubmitButtonStyles",
  componentId: "ebjcw0-2"
})(["display:flex;align-items:center;position:relative;background:none;border:0;cursor:pointer;transition:all 0.2s ease-out;padding:0 1em;line-height:2.4;color:", ";border:solid 2px ", ";margin-top:1.5rem;&:hover{color:", ";background:", ";}"], function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_hover_colour;
}, function (props) {
  return props.theme.button_colour;
});
var ErrorMessageStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "FormStyles__ErrorMessageStyles",
  componentId: "ebjcw0-3"
})(["display:block;font-family:", ";color:red;margin-top:0.5rem;font-size:0.875rem;min-height:2.5em;line-height:1.2;"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].sansSerif);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



var Input = function Input(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, props.label, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_1__[/* InputStyles */ "d"], {
    name: props.name,
    type: props.type,
    placeholder: props.placeholder,
    validationFunc: props.validationFunc,
    onChange: props.onChange,
    value: props.value
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/styles/constants.ts
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./components/styles/LoaderStyles.tsx


var LoaderStyles = external_styled_components_default.a.div.withConfig({
  displayName: "LoaderStyles",
  componentId: "rqwkb1-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:3.5rem;width:3.5em;color:", ";font-family:", ";user-select:none;font-size:7.5vh;opacity:0.8;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;span{display:inline-block;-webkit-animation:pulse 0.4s alternate infinite ease-in-out;animation:pulse 0.4s alternate infinite ease-in-out;}span:nth-child(odd){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes pulse{to{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}}@keyframes pulse{to{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}}"], function (props) {
  return props.theme.button_colour;
}, constants["a" /* constants */].sansSerif);
/* harmony default export */ var styles_LoaderStyles = (LoaderStyles);
// CONCATENATED MODULE: ./components/Loader.tsx



var Loader_Loader = function Loader() {
  return external_react_default.a.createElement(styles_LoaderStyles, null, external_react_default.a.createElement("span", null, "{"), external_react_default.a.createElement("span", null, "}"));
};

/* harmony default export */ var components_Loader = __webpack_exports__["a"] = (Loader_Loader);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContainerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StatusMessageStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var CardContainerStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "CardContainerStyles",
  componentId: "sc-1d4sp1d-0"
})(["position:relative;-webkit-column-count:4;column-count:4;-webkit-column-gap:2.5em;column-gap:2.5em;border-top:solid 1px ", ";padding-top:1.25em;padding-bottom:1em;width:85%;margin:2rem auto;margin-left:calc(7.5% + 2rem);flex-grow:1;@media (max-width:", "px){column-gap:1.5rem;}@media (max-width:", "px){column-count:3;}@media (max-width:", "px){column-count:2;}@media (max-width:", "px){column-gap:1rem;width:90%;margin-left:calc(5% + 2rem);}@media (max-width:", "px){column-count:1;width:95%;margin-left:auto;}&::after{content:'';width:100%;position:fixed;height:40px;background:", ";pointer-events:none;bottom:0;left:0;}"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].desktop_lg, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].desktop_md, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].desktop_sm, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].tablet, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].mobile, function (props) {
  return props.theme.fade;
});
var StatusMessageStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CardContainerStyles__StatusMessageStyles",
  componentId: "sc-1d4sp1d-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;margin-top:200px;svg{height:56px;}span{display:block;}@media (max-width:", "px){margin-top:120px;}@media (max-width:", "px){margin-top:80px;}"], _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].tablet, _constants__WEBPACK_IMPORTED_MODULE_1__[/* sizes */ "d"].mobile);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml {\n    background: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: ", ";\n    /* opacity: 0; */\n    -webkit-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    margin: 0;\n    padding: 0;\n}\n\n#__next {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\na:link {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\na:visited {\n\tcolor: inherit;\n}\n\nbutton {\n\tbackground: transparent;\n\tborder: 0;\n}\n\nsvg {\n  fill: ", ";\n}\n\n.page-transition-enter {\n            opacity: 0;\n          }\n          .page-transition-enter-active {\n            opacity: 1;\n            transition: opacity 200ms;\n          }\n          .page-transition-exit {\n            opacity: 1;\n          }\n          .page-transition-exit-active {\n            opacity: 0;\n            transition: opacity 200ms;\n          }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.main_background;
}, function (props) {
  return props.theme.font_colour_primary;
}, _constants__WEBPACK_IMPORTED_MODULE_1__[/* constants */ "a"].sansSerif, function (props) {
  return props.theme.button_colour;
});
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyles);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CardContainerStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



var StatusMessage = function StatusMessage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CardContainerStyles__WEBPACK_IMPORTED_MODULE_1__[/* StatusMessageStyles */ "b"], null, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (StatusMessage);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(19);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/styles/GlobalStyles.tsx
var GlobalStyles = __webpack_require__(15);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(11);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(9);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(18);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./components/styles/constants.ts
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./components/styles/SearchStyles.tsx


var SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "SearchStyles",
  componentId: "km8rng-0"
})(["width:300px;position:relative;@media (max-width:", "px){width:auto;}.search__input{display:block;font-size:1rem;padding:0.25em;border:none;height:2.75em;background:", ";border-radius:6px;width:100%;padding-left:3em;font-family:", " position:relative;color:inherit;&:focus{&::placeholder{opacity:0;}}}.search__icon{position:absolute;top:0.575em;left:0.65em;height:2em;fill:", ";}.search__close-btn{display:none;font-size:1rem;background:transparent;border:0;margin-left:1em;cursor:pointer;}::-webkit-input-placeholder{color:", ";font-size:1rem;font-weight:300;}:-ms-input-placeholder{color:", ";font-size:1rem;font-weight:300;}::placeholder{color:", ";font-size:1rem;font-weight:300;}.search-term{font-family:$serif;font-weight:bold;font-size:1.5rem;margin:auto;position:relative;}.search-term .wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;}.clear-search{font-family:", ";font-size:1rem;color:", ";margin-top:2em;cursor:pointer;display:block;border-bottom:solid 2px transparent;-webkit-transition:all 0.15s;transition:all 0.15s;}"], constants["d" /* sizes */].tablet, function (props) {
  return props.theme.main_background;
}, constants["a" /* constants */].sansSerif, function (props) {
  return props.theme.button_colour;
}, constants["a" /* constants */].background_grey, constants["a" /* constants */].background_grey, constants["a" /* constants */].background_grey, constants["a" /* constants */].sansSerif, function (props) {
  return props.theme.button_colour;
});
var SearchDropdownStyles = external_styled_components_default.a.div.withConfig({
  displayName: "SearchStyles__SearchDropdownStyles",
  componentId: "km8rng-1"
})(["padding:0.5em;position:absolute;top:3.5rem;width:300px;background:", ";z-index:2;box-shadow:5px 6px 20px 0 rgba(46,61,73,.15);ul{display:flex;justify-content:flex-start;flex-wrap:wrap;padding-bottom:1rem;}.search__sub-list-title{font-size:0.75rem;}.search__dropdown-list{border-bottom:solid 1px ", ";}li{margin:0.25rem 0.5rem 0.25rem 0;list-style:none;}"], function (props) {
  return props.theme.header_background;
}, constants["a" /* constants */].text_grey_mid_two);
/* harmony default export */ var styles_SearchStyles = (SearchStyles);
// EXTERNAL MODULE: ./components/styles/CardStyles.tsx
var CardStyles = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Search.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





//interface State { input: string }
var subreddits = ['webdev', 'web_design', 'frontend', 'css', 'javascript', 'reactjs', 'graphql', 'node', 'typescript', 'vue'];

var Search_Search = function Search(props) {
  var _useState = Object(external_react_["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setFocus = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(subreddits),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedSubs = _useState6[0],
      setSelectedSubs = _useState6[1];

  var _useState7 = Object(external_react_["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      unSelectedSubs = _useState8[0],
      setUnSelectedSubs = _useState8[1];

  var searchRef = Object(external_react_["useRef"])();

  var onUserEntry = function onUserEntry(e) {
    setInput(e.target.value);
    return Object(utils["a" /* debounce */])(onSubmit(e.target.value, selectedSubs), 200);
  };

  var onSubmit = function onSubmit(input, selectedSubs) {
    props.onSearchSubmit(input, selectedSubs);
  };

  var handleOutsideClick = function handleOutsideClick(e) {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setFocus(false);
    }
  };

  var handleFocus = function handleFocus() {
    setFocus(true);
  };

  var toggleSelectSubreddit = function toggleSelectSubreddit(subName) {
    var newSelectedList;

    if (selectedSubs.includes(subName)) {
      newSelectedList = selectedSubs.filter(function (sub) {
        return sub !== subName;
      });
    } else {
      newSelectedList = [].concat(_toConsumableArray(selectedSubs), [subName]);
    }

    var newUnSelectedList = subreddits.filter(function (sub) {
      return !newSelectedList.includes(sub);
    });
    setSelectedSubs(newSelectedList);
    setUnSelectedSubs(newUnSelectedList);
    onSubmit(input, newSelectedList);
  };

  Object(external_react_["useEffect"])(function () {
    document.addEventListener('mousedown', handleOutsideClick);
    return function () {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(styles_SearchStyles, {
    onSubmit: onSubmit,
    ref: searchRef
  }, external_react_default.a.createElement("input", {
    className: "search__input",
    type: "search",
    placeholder: "Search posts",
    value: input,
    onChange: onUserEntry,
    onFocus: handleFocus
  }), external_react_default.a.createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 125",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    className: "search__icon"
  }, external_react_default.a.createElement("path", {
    d: "M78.129 78.325L65.121 61.063c8.65-8.773 9.834-22.812 2.203-32.938-4.822-6.396-12.186-10.064-20.203-10.064-5.52 0-10.775 1.762-15.195 5.092-11.131 8.393-13.361 24.271-4.975 35.396 4.822 6.396 12.186 10.066 20.205 10.066 4.74 0 9.25-1.373 13.242-3.848l12.938 17.17 4.793-3.612zM31.742 54.938c-6.395-8.484-4.693-20.594 3.793-26.992a19.114 19.114 0 0 1 11.586-3.885c6.117 0 11.734 2.799 15.41 7.676 6.398 8.49 4.697 20.6-3.793 26.996a19.092 19.092 0 0 1-11.582 3.883c-6.117 0-11.736-2.797-15.414-7.678z"
  })), external_react_default.a.createElement("button", {
    type: "button",
    id: "search-close-btn",
    className: "search__close-btn"
  }), isFocused && external_react_default.a.createElement(SearchDropdownStyles, null, external_react_default.a.createElement("div", {
    className: "search__sub-list-title"
  }, "Include subreddits:"), external_react_default.a.createElement("ul", {
    className: "search__dropdown-list"
  }, selectedSubs.map(function (subName, idx) {
    return external_react_default.a.createElement("li", {
      key: idx
    }, external_react_default.a.createElement(CardStyles["e" /* SubRedditNameStyles */], {
      colour: Object(utils["f" /* mapSubsToColours */])(subName),
      onClick: function onClick() {
        return toggleSelectSubreddit(subName);
      }
    }, subName));
  })), unSelectedSubs.length > 0 && external_react_default.a.createElement("ul", null, unSelectedSubs.map(function (subName, idx) {
    return external_react_default.a.createElement("li", {
      key: idx
    }, external_react_default.a.createElement(CardStyles["e" /* SubRedditNameStyles */], {
      deselected: true,
      colour: Object(utils["f" /* mapSubsToColours */])(subName),
      onClick: function onClick() {
        return toggleSelectSubreddit(subName);
      }
    }, subName));
  })))));
};

/* harmony default export */ var components_Search = (Search_Search);
// CONCATENATED MODULE: ./components/styles/ThemeTogglerStyles.tsx


var ThemeTogglerStyles = external_styled_components_default.a.div.withConfig({
  displayName: "ThemeTogglerStyles",
  componentId: "sc-13n4n17-0"
})(["display:flex;color:", ";font-size:0.875rem;margin:0 1rem;.toggle-container{display:flex;cursor:pointer;border-top-right-radius:10px;border-bottom-right-radius:10px;margin-left:1em;}input[type=checkbox]{height:0;width:0;visibility:hidden;cursor:pointer;}label{cursor:pointer;text-indent:-9999px;width:52px;height:20px;background:", ";float:left;border-radius:5px;position:relative;display:flex;justify-content:space-between;div{display:flex;align-items:flex-end;height:100%;padding:0 5px;svg{height:17px;width:auto;fill:", ";}}}label:after{content:'';position:absolute;top:2px;right:2px;width:22px;height:16px;background:", ";border-radius:3px;transition:transform 0.3s;will-change:transform;}input:checked + label{background:", ";}input:checked + label:after{transform:translateX(calc((-100%) - 4px));}html.transition,html.transition *,html.transition *:before,html.transition *:after{transition:all 500ms !important;transition-delay:0 !important;}@media (max-width:", "px){span{display:none;}}"], function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_hover_colour;
}, function (props) {
  return props.theme.button_hover_colour;
}, function (props) {
  return props.theme.button_colour;
}, constants["d" /* sizes */].tablet);
/* harmony default export */ var styles_ThemeTogglerStyles = (ThemeTogglerStyles);
// CONCATENATED MODULE: ./components/ThemeToggler.tsx



var ThemeToggler_ThemeToggleButton = function ThemeToggleButton(props) {
  return external_react_default.a.createElement(styles_ThemeTogglerStyles, null, external_react_default.a.createElement("span", null, props.themeName === 'light' ? 'Dark mode' : 'Light mode'), external_react_default.a.createElement("div", {
    className: "toggle-container"
  }, external_react_default.a.createElement("input", {
    type: "checkbox",
    id: "switch",
    name: "theme",
    onClick: props.toggle,
    defaultChecked: !!(props.themeName === 'dark')
  }), external_react_default.a.createElement("label", {
    htmlFor: "switch"
  }, external_react_default.a.createElement("div", {
    className: "mode-icon--dark-mode"
  }, external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 640"
  }, external_react_default.a.createElement("path", {
    d: "M413.9,407.2c28.6-28.6,47.6-63.3,57.1-99.8c-74.3,55.9-180.3,50-247.9-17.6c-67.9-67.9-73.6-174.5-16.9-248.9 C169.1,50.1,134,69.2,105,98.2c-85.3,85.3-85.3,223.6,0,309C190.3,492.5,328.6,492.5,413.9,407.2z"
  }))), external_react_default.a.createElement("div", {
    className: "mode-icon--light-mode"
  }, external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 125"
  }, external_react_default.a.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "23.896"
  }), external_react_default.a.createElement("path", {
    d: "M50,100c-1.827,0-3.308-1.481-3.308-3.308V79.619c0-1.827,1.48-3.308,3.308-3.308s3.308,1.48,3.308,3.308 v17.073C53.308,98.519,51.827,100,50,100z"
  }), external_react_default.a.createElement("path", {
    d: "M50,23.688c-1.827,0-3.308-1.481-3.308-3.308V3.308C46.692,1.481,48.173,0,50,0s3.308,1.481,3.308,3.308 v17.073C53.308,22.208,51.827,23.688,50,23.688z"
  }), external_react_default.a.createElement("path", {
    d: "M20.381,53.308H3.308C1.481,53.308,0,51.827,0,50c0-1.827,1.481-3.308,3.308-3.308h17.073 c1.827,0,3.308,1.48,3.308,3.308C23.688,51.827,22.208,53.308,20.381,53.308z"
  }), external_react_default.a.createElement("path", {
    d: "M96.692,53.308H79.619c-1.827,0-3.308-1.481-3.308-3.308c0-1.827,1.48-3.308,3.308-3.308h17.073 c1.826,0,3.308,1.48,3.308,3.308C100,51.827,98.519,53.308,96.692,53.308z"
  }), external_react_default.a.createElement("path", {
    d: "M13.254,90.054c-0.847,0-1.693-0.323-2.339-0.969c-1.292-1.292-1.292-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.678,0s1.292,3.386,0,4.678L15.593,89.085C14.947,89.731,14.101,90.054,13.254,90.054z"
  }), external_react_default.a.createElement("path", {
    d: "M73.311,29.998c-0.847,0-1.693-0.323-2.34-0.969c-1.291-1.292-1.291-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.679,0c1.291,1.292,1.291,3.386,0,4.678L75.649,29.029C75.003,29.675,74.157,29.998,73.311,29.998z"
  }), external_react_default.a.createElement("path", {
    d: "M26.69,29.999c-0.847,0-1.692-0.323-2.339-0.969L10.915,15.593c-1.292-1.292-1.292-3.386,0-4.678 c1.293-1.292,3.387-1.292,4.678,0l13.437,13.437c1.292,1.292,1.292,3.386,0,4.678C28.384,29.676,27.537,29.999,26.69,29.999z"
  }), external_react_default.a.createElement("path", {
    d: "M86.746,90.054c-0.847,0-1.692-0.323-2.339-0.969L70.971,75.648c-1.292-1.292-1.292-3.386,0-4.678 c1.292-1.292,3.386-1.292,4.678,0l13.438,13.437c1.291,1.292,1.291,3.386,0,4.678C88.439,89.731,87.593,90.054,86.746,90.054z"
  }))))));
};

/* harmony default export */ var ThemeToggler = (ThemeToggler_ThemeToggleButton);
// EXTERNAL MODULE: ./components/styles/HeaderStyles.tsx
var HeaderStyles = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Header.tsx









var Header_onRouteChangeStart = function onRouteChangeStart() {
  external_nprogress_default.a.start();
};

var Header_onRouteChangeComplete = function onRouteChangeComplete() {
  external_nprogress_default.a.done();
};

var onRouteChangeError = function onRouteChangeError() {
  console.log('routeChangeError');
};

router_default.a.events.on('routeChangeStart', Header_onRouteChangeStart);
router_default.a.events.on('routeChangeComplete', Header_onRouteChangeComplete);
router_default.a.events.on('routeChangeError', onRouteChangeError);

var Header_Header = function Header(props) {
  return external_react_default.a.createElement(HeaderStyles["a" /* HeaderStyles */], null, external_react_default.a.createElement(HeaderStyles["c" /* MastheadStyles */], null, external_react_default.a.createElement("div", {
    className: "header__title-wrapper"
  }, external_react_default.a.createElement(HeaderStyles["b" /* LogoStyles */], null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "redditDev.")))), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "header__nav-wrapper"
  }, external_react_default.a.createElement(ThemeToggler, {
    themeName: props.themeName,
    toggle: props.toggle
  }), props.isAuthenticated ? external_react_default.a.createElement(link_default.a, {
    href: "."
  }, external_react_default.a.createElement("a", {
    onClick: props.onLogoutClick
  }, "Logout")) : external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(link_default.a, {
    href: "/login"
  }, external_react_default.a.createElement("a", null, "Login")), external_react_default.a.createElement(link_default.a, {
    href: "/register"
  }, external_react_default.a.createElement("a", null, "Sign Up")))), external_react_default.a.createElement("ul", null, props.isAuthenticated && external_react_default.a.createElement(HeaderStyles["d" /* NavItemStyles */], null, external_react_default.a.createElement(link_default.a, {
    href: "/favourites"
  }, external_react_default.a.createElement("a", null, "Favourites"))), external_react_default.a.createElement(HeaderStyles["d" /* NavItemStyles */], null, external_react_default.a.createElement(components_Search, {
    onSearchSubmit: props.onSearchSubmit
  }))))));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/styles/SidebarStyles.tsx


var SidebarStyles = external_styled_components_default.a.aside.withConfig({
  displayName: "SidebarStyles",
  componentId: "sc-1qdeyni-0"
})(["font-size:0.75rem;border-bottom:0;transform:rotate(-90deg);transform-origin:0 0;position:fixed;top:50vh;left:1.25rem;&::before{content:'';display:block;height:1px;width:3rem;right:4rem;bottom:-0.8rem;background:currentColor;position:relative;}@media (max-width:", "px){display:none;}.loc-icon{height:1rem;}"], constants["d" /* sizes */].mobile);
/* harmony default export */ var styles_SidebarStyles = (SidebarStyles);
// CONCATENATED MODULE: ./components/Sidebar.tsx



var Sidebar_Sidebar = function Sidebar() {
  return external_react_default.a.createElement(styles_SidebarStyles, null, "Created in", external_react_default.a.createElement("svg", {
    className: "loc-icon",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 19.674 19.674"
  }, external_react_default.a.createElement("title", null, "London"), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M10.804,7.278L9.843,8.237L9.836,8.236c-0.005,0-0.007,0.005-0.013,0.005L9.121,7.535l-0.19,0.193L9.64,8.435\r c0,0.111,0.089,0.2,0.197,0.2c0.11,0,0.199-0.089,0.199-0.2c0-0.001-0.002-0.003-0.002-0.005l0.961-0.96L10.804,7.278z\r M12.017,18.66v-8.442h0.163V6.774h0.057V6.508h-0.379v-0.4l0,0L10.97,4.447h0.004V3.292h-0.017C10.888,3.132,9.95,0.416,9.883,0\r H9.79C9.724,0.416,8.783,3.132,8.718,3.292h-0.02v1.154l0,0l-0.88,1.662H7.816v0.4h-0.38v0.266h0.06v3.443h0.162v8.443h-0.69v1.014\r h5.738V18.66H12.017z M9.836,10.138c-0.939,0-1.701-0.763-1.701-1.703c0-0.939,0.762-1.702,1.701-1.702s1.702,0.762,1.702,1.702\r S10.777,10.138,9.836,10.138z"
  }))), "by", external_react_default.a.createElement("a", {
    href: "http://jamestbyrne.com"
  }, "James Byrne"));
};

/* harmony default export */ var components_Sidebar = (Sidebar_Sidebar);
// CONCATENATED MODULE: ./components/styles/BackToTopStyles.tsx

var BackToTopStyles = external_styled_components_default.a.button.withConfig({
  displayName: "BackToTopStyles",
  componentId: "yyrt1m-0"
})(["font-weight:bold;padding:0.75em;color:", ";cursor:pointer;position:fixed;border:solid 2px currentColor;margin:1px;bottom:2em;right:1.5vw;text-align:center;padding:1em 0.5em;-webkit-transition:all 0.15s;transition:all 0.15s;line-height:1;", ";svg{position:relative;top:0;left:0;height:1rem;}}&:hover,&:active{color:", ";background:", ";border:solid 2px ", ";svg{fill:", ";}}&:active{-webkit-transform:translateY(4px);transform:translateY(4px);}"], function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.show ? 'opacity: 1' : 'opacity: 0';
}, function (props) {
  return props.theme.button_hover_colour;
}, function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_colour;
}, function (props) {
  return props.theme.button_hover_colour;
});
/* harmony default export */ var styles_BackToTopStyles = (BackToTopStyles);
// CONCATENATED MODULE: ./components/BackToTopButton.tsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var BackToTopButton_BackToTopButton = function BackToTopButton(props) {
  var handleClick = function handleClick() {
    window.scrollTo(0, 0);
  };

  return external_react_default.a.createElement(styles_BackToTopStyles, _extends({}, props, {
    onClick: handleClick
  }), external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, external_react_default.a.createElement("path", {
    d: "M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"
  })));
};

/* harmony default export */ var components_BackToTopButton = (BackToTopButton_BackToTopButton);
// CONCATENATED MODULE: ./components/Layout.tsx
function Layout_slicedToArray(arr, i) { return Layout_arrayWithHoles(arr) || Layout_iterableToArrayLimit(arr, i) || Layout_nonIterableRest(); }

function Layout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Layout_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Layout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Layout_Layout = function Layout(props) {
  var children = props.children,
      _props$title = props.title,
      title = _props$title === void 0 ? 'redditDev' : _props$title,
      onSearchSubmit = props.onSearchSubmit,
      onAddNewFavourite = props.onAddNewFavourite,
      toggleTheme = props.toggleTheme,
      themeName = props.themeName,
      isAuthenticated = props.isAuthenticated,
      onLogoutClick = props.onLogoutClick;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Layout_slicedToArray(_useState, 2),
      showBackToTopBtn = _useState2[0],
      setShowBackToTopBtn = _useState2[1];

  var onScroll = function onScroll() {
    if (window.scrollY > 500 && !showBackToTopBtn) {
      return setShowBackToTopBtn(true);
    }

    return setShowBackToTopBtn(false);
  };

  Object(external_react_["useEffect"])(function () {
    window.addEventListener('scroll', Object(utils["a" /* debounce */])(onScroll));
    return function () {
      window.removeEventListener('scroll', Object(utils["a" /* debounce */])(onScroll));
    };
  }, []);
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(GlobalStyles["a" /* default */], props), external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title)), external_react_default.a.createElement(components_Header, {
    onSearchSubmit: onSearchSubmit,
    onAddNewFavourite: onAddNewFavourite,
    toggle: toggleTheme,
    themeName: themeName,
    isAuthenticated: isAuthenticated,
    onLogoutClick: onLogoutClick
  }), external_react_default.a.createElement(components_Sidebar, null), children, external_react_default.a.createElement(components_BackToTopButton, {
    show: showBackToTopBtn
  }));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Object(external_styled_components_["withTheme"])(Layout_Layout));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./components/styles/CardStyles.tsx
var CardStyles = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Card.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Card_Card =
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

      if (!_this.cardRef.current) {
        return;
      }

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
          id = _this$props.id,
          doc_id = _this$props.doc_id;
      console.log({
        doc_id: doc_id
      });

      var postData = _objectSpread({}, doc_id && {
        doc_id: doc_id
      }, {
        data: {
          subreddit_name_prefixed: subreddit_name_prefixed,
          title: title,
          url: url,
          permalink: permalink,
          num_comments: num_comments,
          created_utc: created_utc,
          id: id
        }
      });

      console.log({
        postData: postData
      });

      _this.props.onAddToFavourites(postData);
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowScroll", Object(utils["a" /* debounce */])(function (e) {
      return _this.checkVisible(e);
    }, 150));

    _this.cardRef = external_react_default.a.createRef();
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
      return external_react_default.a.createElement(CardStyles["c" /* CardStyles */], {
        ref: this.cardRef,
        isAnimated: isAnimated
      }, external_react_default.a.createElement("header", {
        className: "card-header"
      }, external_react_default.a.createElement(CardStyles["e" /* SubRedditNameStyles */], {
        colour: Object(utils["f" /* mapSubsToColours */])(subName)
      }, external_react_default.a.createElement("a", {
        href: "https://reddit.com/".concat(subName)
      }, subName)), external_react_default.a.createElement(CardStyles["a" /* AddToFavouritesButtonStyles */], {
        onClick: this.addToFavourites
      }, isFavourite ? external_react_default.a.createElement("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "100%"
      }, external_react_default.a.createElement("defs", null), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078z"
      })), external_react_default.a.createElement("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666"
      })) : external_react_default.a.createElement("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "100%"
      }, external_react_default.a.createElement("defs", null), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z"
      })), external_react_default.a.createElement("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666"
      })))), external_react_default.a.createElement(CardStyles["d" /* PostTitleStyles */], null, external_react_default.a.createElement("a", {
        href: url,
        target: "blank"
      }, title)), external_react_default.a.createElement(CardStyles["b" /* CardFooterStyles */], null, external_react_default.a.createElement("span", {
        className: "short-url"
      }, Object(utils["c" /* getHostname */])(url)), external_react_default.a.createElement("span", {
        className: "card__bar"
      }, "|"), external_react_default.a.createElement("time", {
        className: "timestamp"
      }, Object(utils["d" /* getTimeAgo */])(created_utc)), external_react_default.a.createElement("span", {
        className: "card__bar"
      }, "|"), external_react_default.a.createElement("span", {
        className: "post-comments"
      }, external_react_default.a.createElement("a", {
        href: "https://reddit.com".concat(permalink),
        target: "blank"
      }, Object(utils["g" /* numCommentsText */])(num_comments)))));
    }
  }]);

  return Card;
}(external_react_default.a.Component);

/* harmony default export */ var components_Card = (Card_Card);
// EXTERNAL MODULE: ./components/Loader.tsx + 1 modules
var Loader = __webpack_require__(13);

// EXTERNAL MODULE: ./components/styles/CardContainerStyles.tsx
var CardContainerStyles = __webpack_require__(14);

// CONCATENATED MODULE: ./components/CardContainer.tsx






var CardContainer_CardContainer = function CardContainer(props) {
  var posts = props.posts,
      favourites = props.favourites,
      loading = props.loading,
      EmptyState = props.EmptyState,
      onAddToFavourites = props.onAddToFavourites,
      isAuthenticated = props.isAuthenticated;
  return external_react_default.a.createElement(CardContainerStyles["a" /* CardContainerStyles */], null, loading ? external_react_default.a.createElement(Loader["a" /* default */], null) : posts.length === 0 && EmptyState ? external_react_default.a.createElement(EmptyState, null) : isAuthenticated && posts.map(function (post) {
    var favouriteMatch = favourites.filter(Object(utils["e" /* isAlreadyFavourite */])({
      data: {
        title: post.data.title,
        id: post.data.id
      }
    }));
    var docId = favouriteMatch[0] ? favouriteMatch[0].doc_id : undefined;
    var isInFavourites = !!(favouriteMatch.length > 0);
    return external_react_default.a.createElement(components_Card, {
      key: post.data.id,
      id: post.data.id,
      doc_id: docId,
      subName: post.data.subreddit_name_prefixed,
      title: post.data.title,
      url: post.data.url,
      permalink: post.data.permalink,
      num_comments: post.data.num_comments,
      created_utc: post.data.created_utc,
      isFavourite: isInFavourites,
      onAddToFavourites: onAddToFavourites
    });
  }));
};

/* harmony default export */ var components_CardContainer = __webpack_exports__["a"] = (CardContainer_CardContainer);

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Login = function Login(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      loading = _ref.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: '',
    password: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userInput = _useState2[0],
      setUserInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isAuthenticated) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }, [isAuthenticated]);

  var signInUser = function signInUser(e) {
    e.preventDefault();
    var user = userInput.user,
        password = userInput.password;
    _db_firestore__WEBPACK_IMPORTED_MODULE_2__[/* auth */ "a"].signInWithEmailAndPassword(user, password).catch(function (error) {
      console.error(error.code);
      setErrorMessage(error.message);
    });
  };

  var onInputChange = function onInputChange(e) {
    setUserInput(_objectSpread({}, userInput, _defineProperty({}, e.target.name, e.target.value)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyles, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__[/* LogoStyles */ "b"], {
    padding: "1em",
    fontSize: "1.5rem"
  }, "redditDev."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__[/* FormStyles */ "b"], {
    onSubmit: signInUser
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    name: "user",
    onChange: onInputChange,
    value: userInput.user,
    type: "email",
    placeholder: "Email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    name: "password",
    onChange: onInputChange,
    value: userInput.password,
    type: "password",
    placeholder: "Password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__[/* FormSubmitButtonStyles */ "c"], {
    onClick: signInUser
  }, "Log in"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.tsx + 9 modules
var Layout = __webpack_require__(21);

// EXTERNAL MODULE: ./components/CardContainer.tsx + 1 modules
var CardContainer = __webpack_require__(22);

// EXTERNAL MODULE: ./components/StatusMessage.tsx
var StatusMessage = __webpack_require__(20);

// EXTERNAL MODULE: ./db/firestore.js
var firestore = __webpack_require__(6);

// EXTERNAL MODULE: ./pages/login.tsx
var login = __webpack_require__(24);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Helpers.tsx

var Centred = external_styled_components_default.a.div.withConfig({
  displayName: "Helpers__Centred",
  componentId: "adekrl-0"
})(["display:flex;justify-content:center;align-items:center;height:100%;"]);
// CONCATENATED MODULE: ./pages/favourites.tsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









function getFavourites() {
  return _getFavourites.apply(this, arguments);
}

function _getFavourites() {
  _getFavourites = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2() {
    var dbSnapshot, favourites;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return firestore["b" /* default */].collection('favourites').get();

          case 2:
            dbSnapshot = _context2.sent;
            favourites = dbSnapshot.docs.map(function (doc) {
              return {
                doc_id: doc.id,
                data: doc.data().data
              };
            });
            return _context2.abrupt("return", {
              favourites: favourites
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFavourites.apply(this, arguments);
}

var favourites_FavouritesPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FavouritesPage, _React$Component);

  function FavouritesPage() {
    _classCallCheck(this, FavouritesPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(FavouritesPage).apply(this, arguments));
  }

  _createClass(FavouritesPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onAddNewFavourite = _this$props.onAddNewFavourite,
          onSearchSubmit = _this$props.onSearchSubmit,
          favourites = _this$props.favourites,
          toggleTheme = _this$props.toggleTheme,
          themeName = _this$props.themeName,
          loading = _this$props.loading,
          isAuthenticated = _this$props.isAuthenticated,
          onLogoutClick = _this$props.onLogoutClick;
      return external_react_default.a.createElement(Layout["a" /* default */], {
        title: "Favourites | RedditDev - the best of frontend web development on Reddit.",
        onSearchSubmit: onSearchSubmit,
        onAddNewFavourite: onAddNewFavourite,
        toggleTheme: toggleTheme,
        themeName: themeName,
        onLogoutClick: onLogoutClick,
        isAuthenticated: isAuthenticated
      }, isAuthenticated && external_react_default.a.createElement(CardContainer["a" /* default */], _extends({}, this.props, {
        posts: favourites,
        EmptyState: function EmptyState() {
          return external_react_default.a.createElement(StatusMessage["a" /* default */], null, external_react_default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 125"
          }, external_react_default.a.createElement("path", {
            d: "M43.241,40.677l3.315-7.292c-2.651-4.751-7.724-7.966-13.551-7.966c-8.567,0-15.513,6.945-15.513,15.513 c0,17.471,27.078,32.54,29,33.588l-3.25-13.814l6.676-9.537L43.241,40.677z"
          }), external_react_default.a.createElement("path", {
            d: "M66.996,25.418c-5.864,0-10.966,3.254-13.604,8.054c-0.016-0.03-0.035-0.058-0.052-0.088l-3.315,7.292l6.676,10.491 l-6.676,9.537l3.25,13.814c0.071,0.039,0.116,0.063,0.116,0.063s29.116-15.537,29.116-33.651 C82.509,32.364,75.563,25.418,66.996,25.418z"
          })), external_react_default.a.createElement("span", null, "You have no favourites. Show some love and add one."));
        }
      })), !isAuthenticated && !loading && external_react_default.a.createElement(Centred, null, external_react_default.a.createElement(login["default"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", getFavourites());

              case 1:
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

  return FavouritesPage;
}(external_react_default.a.Component);

/* harmony default export */ var pages_favourites = __webpack_exports__["default"] = (favourites_FavouritesPage);

/***/ })
/******/ ]);