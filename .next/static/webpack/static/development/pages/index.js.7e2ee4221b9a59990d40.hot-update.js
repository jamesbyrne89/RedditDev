webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CardContainer.tsx":
/*!**************************************!*\
  !*** ./components/CardContainer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var _CardLoadingState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardLoadingState */ "./components/CardLoadingState.tsx");
/* harmony import */ var _styles_CardContainerStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CardContainerStyles */ "./components/styles/CardContainerStyles.tsx");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\components\\CardContainer.tsx";






var CardContainer = function CardContainer(props) {
  var posts = props.posts,
      favourites = props.favourites,
      loading = props.loading,
      EmptyState = props.EmptyState,
      onAddToFavourites = props.onAddToFavourites,
      isAuthenticated = props.isAuthenticated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CardContainerStyles__WEBPACK_IMPORTED_MODULE_4__["CardContainerStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, loading ? Array(50).fill(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardLoadingState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoadingState: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })) : posts.length === 0 && EmptyState ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmptyState, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : isAuthenticated && posts.map(function (post) {
    var favouriteMatch = favourites.filter(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["isAlreadyFavourite"])({
      data: {
        title: post.data.title,
        id: post.data.id
      }
    }));
    var docId = favouriteMatch[0] ? favouriteMatch[0].doc_id : undefined;
    var isInFavourites = !!(favouriteMatch.length > 0);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: post.data.id,
      id: post.data.id,
      doc_id: docId,
      subName: post.data.subreddit_name_prefixed,
      title: post.data.title,
      url: post.data.url,
      permalink: post.data.permalink,
      num_comments: post.data.num_comments,
      created_utc: post.data.created_utc,
      isFavourite: isInFavourites,
      onAddToFavourites: onAddToFavourites,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardContainer);

/***/ })

})
//# sourceMappingURL=index.js.7e2ee4221b9a59990d40.hot-update.js.map