webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BackToTopButton.tsx":
/*!****************************************!*\
  !*** ./components/BackToTopButton.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\BackToTopButton.tsx";


var BackToTopButton = function BackToTopButton() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "back-to-top",
    class: "back-to-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    class: "heroicon-ui",
    d: "M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.tsx");
/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BackToTopButton */ "./components/BackToTopButton.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Layout.tsx";







var Layout = function Layout(props) {
  var children = props.children,
      _props$title = props.title,
      title = _props$title === void 0 ? 'redditDev' : _props$title,
      onSearchSubmit = props.onSearchSubmit,
      onAddNewFavourite = props.onAddNewFavourite;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSearchSubmit: onSearchSubmit,
    onAddNewFavourite: onAddNewFavourite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackToTopButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.8fe5b7672455bcdd996e.hot-update.js.map