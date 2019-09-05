webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/firestore */ "./db/firestore.js");
/* harmony import */ var _components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/HeaderStyles */ "./components/styles/HeaderStyles.tsx");
/* harmony import */ var _components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/FormStyles */ "./components/styles/FormStyles.tsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Input */ "./components/Input.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\pages\\register.tsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var redirectToHome = function redirectToHome() {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
};

var Register = function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: '',
    password: '',
    password2: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userInput = _useState2[0],
      setUserInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var createNewUser = function createNewUser(e) {
    if (!userInput.password.length > 5 && userInput.password === userInput.password2) {
      throw new Error('Passwords do not match');
    }

    e.preventDefault();
    _db_firestore__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(userInput.user, userInput.password).then(function (cred) {
      _db_firestore__WEBPACK_IMPORTED_MODULE_2__["default"].collection('users').doc(cred.user.uid);
      redirectToHome();
    }).catch(function (error) {
      // Handle Errors here.
      var code = error.code,
          message = error.message;
      console.log(message);
      setErrorMessage(message); // ...
    });
  };

  var onInputChange = function onInputChange(e) {
    setUserInput(_objectSpread({}, userInput, _defineProperty({}, e.target.name, e.target.value)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["HeaderStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["LogoStyles"], {
    padding: "0.5em",
    fontSize: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "redditDev.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__["FormStyles"], {
    onSubmit: createNewUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Register"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user",
    onChange: onInputChange,
    value: userInput.user,
    type: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "password",
    onChange: onInputChange,
    value: userInput.password,
    type: "password",
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "password2",
    onChange: onInputChange,
    value: userInput.password2,
    type: "password",
    placeholder: "Retype password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__["ErrorMessageStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__["FormSubmitButtonStyles"], {
    onClick: createNewUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Register"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=register.js.d9da376dc0bd1201ae64.hot-update.js.map