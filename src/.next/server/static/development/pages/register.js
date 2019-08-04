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

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/FormStyles */ "./components/styles/FormStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Input.tsx";



var Input = function Input(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.label, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_1__["InputStyles"], {
    name: props.name,
    type: props.type,
    placeholder: props.placeholder,
    validationFunc: props.validationFunc,
    onChange: props.onChange,
    value: props.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/styles/FormStyles.tsx":
/*!******************************************!*\
  !*** ./components/styles/FormStyles.tsx ***!
  \******************************************/
/*! exports provided: FormStyles, InputStyles, FormSubmitButtonStyles, ErrorMessageStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStyles", function() { return FormStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputStyles", function() { return InputStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitButtonStyles", function() { return FormSubmitButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageStyles", function() { return ErrorMessageStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");


var FormStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "FormStyles",
  componentId: "ebjcw0-0"
})(["border:solid 2px black;padding:2rem 2.5rem;width:380px;margin:auto;margin-top:20vh;background:", ";border:solid 1px ", ";h2{font-family:", ";margin-top:0;}"], function (props) {
  return props.theme.card_background;
}, function (props) {
  return props.theme.border_colour;
}, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].serif);
var InputStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "FormStyles__InputStyles",
  componentId: "ebjcw0-1"
})(["margin-top:1.25rem;line-height:1.5;display:block;font-family:", ";font-size:1rem;padding:0.25em 0.75em;border:none;height:2.75em;background:", ";border-radius:6px;width:100%;color:inherit;&:focus{&::placeholder{opacity:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, function (props) {
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
})(["display:block;font-family:", ";color:red;margin-top:0.5rem;font-size:0.875rem;min-height:2.5em;line-height:1.2;"], _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif);

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
}, _constants__WEBPACK_IMPORTED_MODULE_1__["constants"].sansSerif, function (props) {
  return props.theme.button_colour;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./components/styles/HeaderStyles.tsx":
/*!********************************************!*\
  !*** ./components/styles/HeaderStyles.tsx ***!
  \********************************************/
/*! exports provided: HeaderStyles, MastheadStyles, LogoStyles, NavItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyles", function() { return HeaderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastheadStyles", function() { return MastheadStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoStyles", function() { return LogoStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemStyles", function() { return NavItemStyles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/styles/constants.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "HeaderStyles",
  componentId: "fr55j3-0"
})(["z-index:350;display:flex;align-items:center;width:100%;background:", ";box-shadow:0 0 0 1px ", ";grid-area:header;position:sticky;top:0;.header__title-wrapper{display:flex;align-items:center;}.header__nav-wrapper{display:flex;justify-content:flex-end;padding-top:0.25rem;> a{margin:0 0.5rem;border-bottom:solid 1px transparent;&:last-of-type{margin-right:0;}&:hover{border-bottom:solid 1px currentColor;}}}ul{display:flex;justify-content:flex-end;flex-grow:1;margin:0.5rem 0;@media (max-width:", "px){justify-content:flex-start;}@media (max-width:", "px){justify-content:flex-end;}}"], function (props) {
  return props.theme.header_background;
}, _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].text_grey_mid_two, _constants__WEBPACK_IMPORTED_MODULE_0__["sizes"].desktop_sm, _constants__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet);
var MastheadStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderStyles__MastheadStyles",
  componentId: "fr55j3-1"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;align-items:flex-end;padding:0.25em 0;width:85%;height:auto;margin:0 auto 0 calc(7.5% + 2rem);@media (max-width:", "px){flex-wrap:wrap;justify-content:flex-start;}@media (max-width:", "px){width:95%;margin-left:auto;}"], _constants__WEBPACK_IMPORTED_MODULE_0__["sizes"].desktop_sm, _constants__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet);
var LogoStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "HeaderStyles__LogoStyles",
  componentId: "fr55j3-2"
})(["font-family:'Tiempos Headline Black';font-size:", ";font-weight:700;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px;z-index:100;color:", ";line-height:1;text-align:left;margin:0;padding:", ";cursor:pointer;@media (max-width:", "px){font-size:2.5rem;}"], function (props) {
  return props.fontSize || '3.75rem';
}, function (props) {
  return props.theme.font_colour_primary;
}, function (props) {
  return props.padding || '0';
}, _constants__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet);
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

/***/ "./components/styles/constants.ts":
/*!****************************************!*\
  !*** ./components/styles/constants.ts ***!
  \****************************************/
/*! exports provided: constants, sizes, lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
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

/***/ "./db/firestore.js":
/*!*************************!*\
  !*** ./db/firestore.js ***!
  \*************************/
/*! exports provided: default, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
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

/* harmony default export */ __webpack_exports__["default"] = (init());
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();

/***/ }),

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/firestore */ "./db/firestore.js");
/* harmony import */ var _components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/GlobalStyles */ "./components/styles/GlobalStyles.tsx");
/* harmony import */ var _components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/HeaderStyles */ "./components/styles/HeaderStyles.tsx");
/* harmony import */ var _components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/FormStyles */ "./components/styles/FormStyles.tsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Input */ "./components/Input.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\register.tsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var redirectToHome = function redirectToHome() {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
};

var Register = function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: '',
    password: '',
    password2: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userInput = _useState2[0],
      setUserInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var createNewUser = function createNewUser(e) {
    if (!userInput.password.length > 5 && userInput.password === userInput.password2) {
      throw new Error('Passwords do not match');
    }

    e.preventDefault();
    _db_firestore__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(userInput.user, userInput.password).then(function (cred) {
      _db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection('users').doc(cred.user.uid);
      redirectToHome();
    }).catch(function (error) {
      // Handle Errors here.
      var code = error.code,
          message = error.message;
      console.log(message);
      setErrorMessage(message); // ...
    });
  };

  var onInputChange = function onInputChange(e) {
    setUserInput(_objectSpread({}, userInput, _defineProperty({}, e.target.name, e.target.value)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__["HeaderStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__["LogoStyles"], {
    padding: "0.5em",
    fontSize: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "redditDev.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__["FormStyles"], {
    onSubmit: createNewUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Register"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "user",
    onChange: onInputChange,
    value: userInput.user,
    type: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "password",
    onChange: onInputChange,
    value: userInput.password,
    type: "password",
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "password2",
    onChange: onInputChange,
    value: userInput.password2,
    type: "password",
    placeholder: "Retype password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__["FormSubmitButtonStyles"], {
    onClick: createNewUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Register"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/register.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/register.tsx */"./pages/register.tsx");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=register.js.map