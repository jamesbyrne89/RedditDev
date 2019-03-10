webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ "./components/Layout.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loader */ "./components/Loader.tsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var _lib_subreddits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/subreddits */ "./lib/subreddits.ts");
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/constants */ "./styles/constants.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Home.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "Home__CardsContainer",
  componentId: "sc-1lsv5zx-0"
})(["-webkit-column-count:4;column-count:4;-webkit-column-gap:2.5em;column-gap:2.5em;border-top:solid 1px ", ";padding-top:1.25em;padding-bottom:1em;width:85%;margin:2rem auto;margin-left:calc(7.5% + 2rem);@media (max-width:", "px){column-gap:1.5rem;}@media (max-width:", "px){column-count:3;}@media (max-width:", "px){column-count:2;}@media (max-width:", "px){column-gap:1rem;width:90%;margin-left:calc(5% + 2rem);}@media (max-width:", "px){column-count:1;width:95%;margin-left:auto;}&::after{content:'';width:100%;position:fixed;height:40px;background:-webkit-gradient(linear,left top,left bottom,from(rgba(236,238,241,0.001)),to(white));background:linear-gradient(rgba(236,238,241,0.001),white);pointer-events:none;bottom:0;left:0;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_10__["constants"].text_grey_mid_two, _styles_constants__WEBPACK_IMPORTED_MODULE_10__["sizes"].desktop_lg, _styles_constants__WEBPACK_IMPORTED_MODULE_10__["sizes"].desktop_md, _styles_constants__WEBPACK_IMPORTED_MODULE_10__["sizes"].desktop_sm, _styles_constants__WEBPACK_IMPORTED_MODULE_10__["sizes"].tablet, _styles_constants__WEBPACK_IMPORTED_MODULE_10__["sizes"].mobile);

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      posts: [],
      loading: true
    });

    _defineProperty(_assertThisInitialized(_this), "getPosts",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, cleaned, postsSortedByNewest;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.all(Object.keys(_lib_subreddits__WEBPACK_IMPORTED_MODULE_9__["endpoints"]).map(function (url) {
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_lib_subreddits__WEBPACK_IMPORTED_MODULE_9__["endpoints"][url]);
              }));

            case 2:
              data = _context.sent;
              cleaned = data.reduce(function (acc, curr) {
                return [].concat(_toConsumableArray(curr.data.data.children), _toConsumableArray(acc));
              }, []);
              postsSortedByNewest = cleaned.sort(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["sortByNewest"]);

              _this.setState({
                posts: postsSortedByNewest,
                loading: false
              });

              console.log(postsSortedByNewest.slice(0, 20));
              console.log(_this.state.posts.filter(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["filterPostsCallback"])('hello')));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "onSearchSubmit", function (searchTerm) {
      console.log(searchTerm);
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          posts = _this$state.posts;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "redditDev - the best of frontend development on Reddit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSearchSubmit: this.onSearchSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardsContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }) : posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: post.data.id,
          subName: post.data.subreddit_name_prefixed,
          postData: post.data,
          title: post.data.title,
          url: post.data.url,
          permalink: post.data.permalink,
          num_comments: post.data.num_comments,
          created_utc: post.data.created_utc,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        });
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b6d4d7668e9db389653e.hot-update.js.map