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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
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




var Card =
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
          id = _this$props.id;
      var postData = {
        data: {
          subreddit_name_prefixed: subreddit_name_prefixed,
          title: title,
          url: url,
          permalink: permalink,
          num_comments: num_comments,
          created_utc: created_utc,
          id: id
        }
      };

      _this.props.onAddToFavourites(postData);
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowScroll", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (e) {
      return _this.checkVisible(e);
    }, 150));

    _this.cardRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledCard, {
        ref: this.cardRef,
        isAnimated: isAnimated,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubRedditName, {
        colour: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["mapSubsToColours"])(subName),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, subName), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddToFavouritesButton, {
        onClick: this.addToFavourites,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, isFavourite ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        viewBox: "0 0 6.82666 8.533325000000001",
        x: "0px",
        y: "0px",
        fillRule: "evenodd",
        clipRule: "evenodd",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        d: "M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
        fill: "none",
        width: "6.82666",
        height: "6.82666",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PostTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: url,
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardFooter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "short-url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getHostname"])(url)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "card__bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("time", {
        className: "timestamp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getTimeAgo"])(created_utc)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "card__bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "|"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "post-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "https://reddit.com".concat(permalink),
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["numCommentsText"])(num_comments)))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.dc894bce6ab1794e8344.hot-update.js.map