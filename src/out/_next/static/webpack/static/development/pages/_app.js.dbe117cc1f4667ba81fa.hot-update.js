webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_subreddits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/subreddits */ "./lib/subreddits.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _db_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../db/firestore */ "./db/firestore.js");

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\_app.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      posts: [],
      filteredPosts: [],
      isFiltered: false,
      favourites: []
    });

    _defineProperty(_assertThisInitialized(_this), "filterPosts", function () {
      var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!searchTerm) {
        return _this.setState({
          filteredPosts: _this.props.posts,
          isFiltered: false
        });
      }

      _this.setState({
        loading: true
      });

      var filtered = _this.props.posts.filter(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["filterPostsCallback"])(searchTerm));

      _this.setState({
        filteredPosts: filtered,
        loading: false,
        isFiltered: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addToFavourites", function (postToAdd) {
      console.log(postToAdd);

      if (postToAdd.doc_id) {
        return _this.removeFromFavourites(postToAdd);
      }

      _db_firestore__WEBPACK_IMPORTED_MODULE_6__["default"].collection('favourites').doc('my-favourites').add(postToAdd).then(function (docRef) {
        console.log(_objectSpread({}, postToAdd, {
          doc_id: docRef.id
        }));

        var newFavourite = _objectSpread({}, postToAdd, {
          doc_id: docRef.id
        });

        _this.setState({
          favourites: [].concat(_toConsumableArray(_this.state.favourites), [newFavourite])
        });
      }).catch(function (error) {
        console.error('Error adding document: ', error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeFromFavourites", function (postToRemove) {
      console.log('favourites before', _this.state.favourites);
      console.log({
        postToRemove: postToRemove
      });
      _db_firestore__WEBPACK_IMPORTED_MODULE_6__["default"].collection('favourites').doc('my-favourites').doc(postToRemove.doc_id).delete();

      var newFavouritesList = _this.state.favourites.filter(function (fav) {
        return postToRemove.data.title !== fav.data.title && postToRemove.doc_id !== fav.doc_id;
      });

      console.log(newFavouritesList);

      _this.setState({
        favourites: newFavouritesList
      });
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, _this$props$posts, posts, _this$props$favourite, favourites;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.props);
                _this$props = this.props, _this$props$posts = _this$props.posts, posts = _this$props$posts === void 0 ? [] : _this$props$posts, _this$props$favourite = _this$props.favourites, favourites = _this$props$favourite === void 0 ? [] : _this$props$favourite;
                this.setState({
                  loading: false,
                  posts: posts,
                  favourites: favourites
                }); // db.collection('favourites').docsforEach.onSnapshot(function(doc) {
                //   console.log('Current data: ', doc.data());
                // });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          posts = _this$state.posts,
          filteredPosts = _this$state.filteredPosts,
          isFiltered = _this$state.isFiltered;
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          pageProps = _this$props2.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({
        posts: isFiltered ? filteredPosts : posts,
        loading: this.state.loading,
        onSearchSubmit: this.filterPosts,
        onAddToFavourites: this.addToFavourites,
        favourites: this.state.favourites
      }, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var Component, ctx, pageProps, data, cleaned, postsSortedByNewest;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                pageProps = _context2.sent;

              case 5:
                _context2.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.all(Object.keys(_lib_subreddits__WEBPACK_IMPORTED_MODULE_4__["endpoints"]).map(function (url) {
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_lib_subreddits__WEBPACK_IMPORTED_MODULE_4__["endpoints"][url]);
                }));

              case 7:
                data = _context2.sent;
                cleaned = data.reduce(function (acc, curr) {
                  return [].concat(_toConsumableArray(curr.data.data.children), _toConsumableArray(acc));
                }, []);
                postsSortedByNewest = cleaned.sort(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["sortByNewest"]);
                console.log(_objectSpread({
                  posts: postsSortedByNewest
                }, pageProps));
                return _context2.abrupt("return", _objectSpread({
                  posts: postsSortedByNewest
                }, pageProps));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.dbe117cc1f4667ba81fa.hot-update.js.map