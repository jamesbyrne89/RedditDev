webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ThemeToggler.tsx":
/*!*************************************!*\
  !*** ./components/ThemeToggler.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ThemeTogglerStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ThemeTogglerStyles */ "./components/styles/ThemeTogglerStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\ThemeToggler.tsx";



var ThemeToggleButton = function ThemeToggleButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ThemeTogglerStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.themeName === 'lightTheme' ? 'Dark mode' : 'Light mode', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "toggle-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "switch",
    name: "theme",
    onClick: props.toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Toggle")));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

/***/ })

})
//# sourceMappingURL=index.js.9f021e12944b863118ab.hot-update.js.map