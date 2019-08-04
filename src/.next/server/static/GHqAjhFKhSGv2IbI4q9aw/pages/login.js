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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
/* 3 */,
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
/* 7 */,
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
/* 10 */,
/* 11 */,
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
/* 14 */,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);


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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__[/* LogoStyles */ "b"], {
    padding: "1em",
    fontSize: "1.5rem"
  }, "redditDev."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__[/* FormStyles */ "b"], {
    onSubmit: signInUser
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    name: "user",
    onChange: onInputChange,
    value: userInput.user,
    type: "email",
    placeholder: "Email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    name: "password",
    onChange: onInputChange,
    value: userInput.password,
    type: "password",
    placeholder: "Password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__[/* FormSubmitButtonStyles */ "c"], {
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ })
/******/ ]);