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
var _jsxFileName = "C:\\Users\\james.byrne\\Documents\\personal\\RedditDev\\src\\components\\ThemeToggler.tsx";



var ThemeToggleButton = function ThemeToggleButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ThemeTogglerStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.themeName === 'light' ? 'Dark mode' : 'Light mode'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toggle-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "switch",
    name: "theme",
    onClick: props.toggle,
    defaultChecked: !!props.themeName === 'dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mode-icon--dark-mode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M413.9,407.2c28.6-28.6,47.6-63.3,57.1-99.8c-74.3,55.9-180.3,50-247.9-17.6c-67.9-67.9-73.6-174.5-16.9-248.9 C169.1,50.1,134,69.2,105,98.2c-85.3,85.3-85.3,223.6,0,309C190.3,492.5,328.6,492.5,413.9,407.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mode-icon--light-mode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 125",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "23.896",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M50,100c-1.827,0-3.308-1.481-3.308-3.308V79.619c0-1.827,1.48-3.308,3.308-3.308s3.308,1.48,3.308,3.308 v17.073C53.308,98.519,51.827,100,50,100z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M50,23.688c-1.827,0-3.308-1.481-3.308-3.308V3.308C46.692,1.481,48.173,0,50,0s3.308,1.481,3.308,3.308 v17.073C53.308,22.208,51.827,23.688,50,23.688z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.381,53.308H3.308C1.481,53.308,0,51.827,0,50c0-1.827,1.481-3.308,3.308-3.308h17.073 c1.827,0,3.308,1.48,3.308,3.308C23.688,51.827,22.208,53.308,20.381,53.308z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M96.692,53.308H79.619c-1.827,0-3.308-1.481-3.308-3.308c0-1.827,1.48-3.308,3.308-3.308h17.073 c1.826,0,3.308,1.48,3.308,3.308C100,51.827,98.519,53.308,96.692,53.308z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.254,90.054c-0.847,0-1.693-0.323-2.339-0.969c-1.292-1.292-1.292-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.678,0s1.292,3.386,0,4.678L15.593,89.085C14.947,89.731,14.101,90.054,13.254,90.054z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M73.311,29.998c-0.847,0-1.693-0.323-2.34-0.969c-1.291-1.292-1.291-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.679,0c1.291,1.292,1.291,3.386,0,4.678L75.649,29.029C75.003,29.675,74.157,29.998,73.311,29.998z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M26.69,29.999c-0.847,0-1.692-0.323-2.339-0.969L10.915,15.593c-1.292-1.292-1.292-3.386,0-4.678 c1.293-1.292,3.387-1.292,4.678,0l13.437,13.437c1.292,1.292,1.292,3.386,0,4.678C28.384,29.676,27.537,29.999,26.69,29.999z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M86.746,90.054c-0.847,0-1.692-0.323-2.339-0.969L70.971,75.648c-1.292-1.292-1.292-3.386,0-4.678 c1.292-1.292,3.386-1.292,4.678,0l13.438,13.437c1.291,1.292,1.291,3.386,0,4.678C88.439,89.731,87.593,90.054,86.746,90.054z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

/***/ })

})
//# sourceMappingURL=index.js.86f54feede3f9e38497e.hot-update.js.map