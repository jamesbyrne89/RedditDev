webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./db/firestore.js":
/*!*************************!*\
  !*** ./db/firestore.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  apiKey: 'AIzaSyBkHyS6BMFlRBww9mZMsTQgMzjp6P9ml6M',
  authDomain: 'redditdev-e11fc.firebaseapp.com',
  databaseURL: 'https://redditdev-e11fc.firebaseio.com',
  projectId: 'redditdev-e11fc',
  storageBucket: 'redditdev-e11fc.appspot.com',
  messagingSenderId: '976173547224'
};

var initDB = function initDB() {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  }

  var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
  return db;
};

/* harmony default export */ __webpack_exports__["default"] = (initDB());

/***/ }),

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/database/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/functions/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/messaging/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(/*! @firebase/polyfill */ "./node_modules/@firebase/polyfill/dist/index.esm.js");
var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/dist/index.cjs.js":
false

})
//# sourceMappingURL=_app.js.fc3ffcccfb80b5926d2f.hot-update.js.map