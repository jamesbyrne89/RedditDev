webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardContainer */ "./components/CardContainer.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_StatusMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StatusMessage */ "./components/StatusMessage.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\index.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var IndexPage = function IndexPage(_ref) {
  var onSearchSubmit = _ref.onSearchSubmit,
      onAddNewFavourite = _ref.onAddNewFavourite,
      toggleTheme = _ref.toggleTheme,
      themeName = _ref.themeName,
      props = _objectWithoutProperties(_ref, ["onSearchSubmit", "onAddNewFavourite", "toggleTheme", "themeName"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "RedditDev - the best of frontend web development on Reddit.",
    onSearchSubmit: onSearchSubmit,
    onAddNewFavourite: onAddNewFavourite,
    toggleTheme: toggleTheme,
    themeName: themeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_CardContainer__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    emptyState: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_StatusMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 125",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M43.241,40.677l3.315-7.292c-2.651-4.751-7.724-7.966-13.551-7.966c-8.567,0-15.513,6.945-15.513,15.513 c0,17.471,27.078,32.54,29,33.588l-3.25-13.814l6.676-9.537L43.241,40.677z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M66.996,25.418c-5.864,0-10.966,3.254-13.604,8.054c-0.016-0.03-0.035-0.058-0.052-0.088l-3.315,7.292l6.676,10.491 l-6.676,9.537l3.25,13.814c0.071,0.039,0.116,0.063,0.116,0.063s29.116-15.537,29.116-33.651 C82.509,32.364,75.563,25.418,66.996,25.418z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "No posts.")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.002b7b34fd08bb5c20c3.hot-update.js.map