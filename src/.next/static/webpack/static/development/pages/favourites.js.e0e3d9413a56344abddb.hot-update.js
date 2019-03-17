webpackHotUpdate("static\\development\\pages\\favourites.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/constants */ "./styles/constants.ts");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Search.tsx";

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





var SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "Search__SearchWrapper",
  componentId: "sc-1t6j9js-0"
})([".search--opened{width:50%;-webkit-transition:all 0.5s;transition:all 0.5s;}.search-wrapper{display:none;-webkit-transition:cubic-bezier(0.165,0.84,0.44,1);transition:cubic-bezier(0.165,0.84,0.44,1);}.search__close-btn{display:none;font-size:1rem;background:transparent;border:0;margin-left:1em;cursor:pointer;}::-webkit-input-placeholder{color:", ";font-size:1rem;font-weight:300;}:-ms-input-placeholder{color:", ";font-size:1rem;font-weight:300;}::placeholder{color:", ";font-size:1rem;font-weight:300;}.search-term{font-family:$serif;font-weight:bold;font-size:1.5rem;margin:auto;position:relative;}.search-term .wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;}.clear-search{font-family:", ";font-size:1rem;color:", ";margin-top:2em;cursor:pointer;display:block;border-bottom:solid 2px transparent;-webkit-transition:all 0.15s;transition:all 0.15s;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].background_grey, _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].sansSerif, _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].text_grey_mid_two);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1t6j9js-1"
})(["display:block;font-size:1rem;padding:0.25em;border:none;height:3em;"]);

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      input: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onUserEntry", function (e) {
      _this.setState({
        input: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();

      _this.props.onSearchSubmit(_this.state.input);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyup", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (e) {
      return _this.onSubmit(e);
    }, 500));

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchWrapper, {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
        type: "search",
        placeholder: "What are you looking for?",
        value: this.state.input,
        onChange: this.onUserEntry,
        onKeyUp: this.handleKeyup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        id: "search-close-btn",
        className: "search__close-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times fa-2x",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=favourites.js.e0e3d9413a56344abddb.hot-update.js.map