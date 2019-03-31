webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./db/firestore.js":
/*!*************************!*\
  !*** ./db/firestore.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  apiKey: 'AIzaSyBkHyS6BMFlRBww9mZMsTQgMzjp6P9ml6M',
  authDomain: 'redditdev-e11fc.firebaseapp.com',
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: 'redditdev-e11fc',
  storageBucket: 'redditdev-e11fc.appspot.com',
  messagingSenderId: '976173547224'
};

var initDB = function initDB() {
  if (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
    Object(firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(config);
  }

  var db = Object(firebase__WEBPACK_IMPORTED_MODULE_0__["firestore"])();
  return db;
};

/* harmony default export */ __webpack_exports__["default"] = (initDB());

/***/ })

})
//# sourceMappingURL=_app.js.5bd578aaa19704d3910a.hot-update.js.map