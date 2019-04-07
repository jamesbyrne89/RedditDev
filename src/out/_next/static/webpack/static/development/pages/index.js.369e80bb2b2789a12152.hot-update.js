webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _styles_SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/SearchStyles */ "./components/styles/SearchStyles.tsx");
/* harmony import */ var _styles_CardStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CardStyles */ "./components/styles/CardStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Search.tsx";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var subreddits = ['webdev', 'web_design', 'frontend', 'css', 'javascript', 'reactjs', 'graphql', 'node', 'typescript', 'vue'];

var Search = function Search(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setFocus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(subreddits),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedSubs = _useState6[0],
      setSelectedSubs = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      unSelectedSubs = _useState8[0],
      setUnSelectedSubs = _useState8[1];

  var onUserEntry = function onUserEntry(e) {
    setInput(e.target.value);
  };

  var onSubmit = function onSubmit(input, selectedSubs) {
    props.onSearchSubmit(input, selectedSubs);
  };

  var handleKeyup = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (e) {
    return onSubmit(e);
  }, 500);

  var handleFocus = function handleFocus() {
    setFocus(true);
  };

  var handleBlur = function handleBlur(e) {
    console.log(e.target);
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SearchStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: onSubmit,
    onBlur: handleBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "search__input",
    type: "search",
    placeholder: "Search posts",
    value: input,
    onChange: onUserEntry,
    onKeyUp: handleKeyup,
    onFocus: handleFocus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#000",
    d: "M78.129 78.325L65.121 61.063c8.65-8.773 9.834-22.812 2.203-32.938-4.822-6.396-12.186-10.064-20.203-10.064-5.52 0-10.775 1.762-15.195 5.092-11.131 8.393-13.361 24.271-4.975 35.396 4.822 6.396 12.186 10.066 20.205 10.066 4.74 0 9.25-1.373 13.242-3.848l12.938 17.17 4.793-3.612zM31.742 54.938c-6.395-8.484-4.693-20.594 3.793-26.992a19.114 19.114 0 0 1 11.586-3.885c6.117 0 11.734 2.799 15.41 7.676 6.398 8.49 4.697 20.6-3.793 26.996a19.092 19.092 0 0 1-11.582 3.883c-6.117 0-11.736-2.797-15.414-7.678z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    id: "search-close-btn",
    className: "search__close-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), isFocused && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SearchStyles__WEBPACK_IMPORTED_MODULE_2__["SearchDropdownStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search__sub-list-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Include subreddits:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "search__dropdown-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, selectedSubs.map(function (subName, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CardStyles__WEBPACK_IMPORTED_MODULE_3__["SubRedditNameStyles"], {
      key: idx,
      colour: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["mapSubsToColours"])(subName),
      onClick: function onClick() {
        return toggleSelectSubreddit(subName);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, subName));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, unSelectedSubs.map(function (subName, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CardStyles__WEBPACK_IMPORTED_MODULE_3__["SubRedditNameStyles"], {
      key: idx,
      colour: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["mapSubsToColours"])(subName),
      onClick: function onClick() {
        return toggleSelectSubreddit(subName);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, subName));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.369e80bb2b2789a12152.hot-update.js.map