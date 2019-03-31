webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../node_modules/axios/index.js":
false,

/***/ "../node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "../node_modules/axios/lib/axios.js":
false,

/***/ "../node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "../node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "../node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "../node_modules/axios/lib/core/Axios.js":
false,

/***/ "../node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "../node_modules/axios/lib/core/createError.js":
false,

/***/ "../node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "../node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "../node_modules/axios/lib/core/settle.js":
false,

/***/ "../node_modules/axios/lib/core/transformData.js":
false,

/***/ "../node_modules/axios/lib/defaults.js":
false,

/***/ "../node_modules/axios/lib/helpers/bind.js":
false,

/***/ "../node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "../node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "../node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "../node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "../node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "../node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "../node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "../node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "../node_modules/axios/lib/helpers/spread.js":
false,

/***/ "../node_modules/axios/lib/utils.js":
false,

/***/ "../node_modules/is-buffer/index.js":
false,

/***/ "./lib/subreddits.ts":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ "./components/Home.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "RedditDev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
//# sourceMappingURL=index.js.7f3a961804f29d91ebd7.hot-update.js.map