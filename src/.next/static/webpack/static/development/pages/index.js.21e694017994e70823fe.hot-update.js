webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/constants */ "./styles/constants.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Card.tsx";

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





var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "Card__StyledCard",
  componentId: "sc-1rnehka-0"
})(["margin:0 0 1.25em 0;width:100%;background:white;break-inside:avoid;overflow-wrap:break-word;padding:1em 0.75em;-webkit-transform:translateY(200px) scale(0.9);transform:translateY(200px) scale(0.9);-webkit-transition:opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 1s ease-in-out 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 1s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;-webkit-column-break-inside:avoid;"]);
var SubRedditName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Card__SubRedditName",
  componentId: "sc-1rnehka-1"
})(["font-family:", ";padding:0.5em 0.75em;margin:0;display:inline-block;font-weight:700;text-transform:uppercase;font-size:0.75rem;color:#fff;letter-spacing:1px;background:", ";"], _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].sansSerif, function (props) {
  return _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"]["subreddit_colour_".concat(props.colour)];
});
var PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Card__PostTitle",
  componentId: "sc-1rnehka-2"
})(["padding:1.5em 0;font-size:1.5rem;margin:0;-webkit-transition:all 0.15s;transition:all 0.15s;text-align:left;a{font-family:'Tiempos Headline',georgia,serif;font-weight:700;color:", ";text-decoration:none;line-height:1.3;max-width:100%;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-transition:all 0.15s;transition:all 0.15s;}a:hover{color:#000 !important;border-bottom:solid 1px #000;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].text_grey_dark);
var CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "Card__CardFooter",
  componentId: "sc-1rnehka-3"
})(["font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:0.75rem;letter-spacing:0.02em;color:", ";.post-comments{font-family:", ";display:block;text-align:left;white-space:nowrap;padding:0 0.75em;-webkit-transition:all 0.15s;transition:all 0.15s;a{-webkit-transition:all 0.15s;transition:all 0.15s;cursor:pointer;}a:hover{color:", " !important;padding-bottom:0.125em;border-bottom:solid 1px;-webkit-transition:all 0.1s;transition:all 0.1s;}}.post-comments,.short-url,.timestamp{padding:0 0.25em;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].text_grey_mid_two, _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].sansSerif, _styles_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].nearBlack);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Card__Bar",
  componentId: "sc-1rnehka-4"
})(["font-size:0.875em;"]);

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "checkVisible", function (e) {
      console.log(e); // let scrollInAt;
      // window.scrollY < 0
      //   ? scrollInAt = window.innerHeight
      //   : scrollInAt = window.scrollY + window.innerHeight -
      //     window.innerHeight * 0.1;
      // let isShowing = scrollInAt > card.offsetTop;
      // let isNotShowing = window.scrollY < scrollInAt;
      // isShowing && isNotShowing
      //   ? card.classList.add('animate')
      //   : card.classList.remove('animate');
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowScroll", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
      // assuming you're using https://babeljs.io/docs/plugins/transform-class-properties/
      _this.checkVisible();
    }, 100));

    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onWindowScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onWindowScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          subName = _this$props.subName,
          title = _this$props.title,
          url = _this$props.url,
          permalink = _this$props.permalink,
          num_comments = _this$props.num_comments,
          created_utc = _this$props.created_utc;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubRedditName, {
        colour: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["mapSubsToColours"])(subName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, subName), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PostTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: url,
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardFooter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "short-url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getHostname"])(url)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Bar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("time", {
        className: "timestamp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getTimeAgo"])(created_utc)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Bar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "post-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "https://reddit.com".concat(permalink),
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["numCommentsText"])(num_comments)))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.21e694017994e70823fe.hot-update.js.map