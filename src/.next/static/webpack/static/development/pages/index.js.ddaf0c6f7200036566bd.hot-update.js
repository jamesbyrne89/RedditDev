webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search */ "./components/Search.tsx");
/* harmony import */ var _styles_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/constants */ "./styles/constants.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\RedditDev\\src\\components\\Header.tsx";





var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1qurmiv-0"
})(["z-index:350;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:140px;background:#fff;-webkit-box-shadow:0 0 0 1px ", ";box-shadow:0 0 0 1px ", ";grid-area:header;a:hover{text-transform:none;border-bottom:0;}.header__title-wrapper{display:flex;align-items:baseline;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].text_grey_mid_two, _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].text_grey_mid_two);
var StyledMasthead = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__StyledMasthead",
  componentId: "sc-1qurmiv-1"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding:0.25em 0;width:85%;height:auto;margin:0 auto;"]);
var StyledHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "Header__StyledHeaderTitle",
  componentId: "sc-1qurmiv-2"
})(["font-family:'Tiempos Headline Black';font-size:3.75rem;font-weight:700;-webkit-box-flex:0;-ms-flex:0 0 200px;flex:0 0 200px;z-index:100;color:$nearBlack;line-height:1;text-align:left;"]);
var StyledHeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2.withConfig({
  displayName: "Header__StyledHeaderDescription",
  componentId: "sc-1qurmiv-3"
})(["font-family:", ";font-size:1rem;padding-bottom:0.25em;color:#495456;font-weight:400;line-height:1.2;-webkit-transition:all 0.3s;transition:all 0.3s;padding-right:1em;margin-left:1rem;"], _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].sansSerif);
var StyledNavItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "Header__StyledNavItem",
  componentId: "sc-1qurmiv-4"
})(["display:flex;align-items:center;margin-left:-2px;padding:0 1em;position:relative;a,button{display:flex;align-items:center;position:relative;background:none;border:0;cursor:pointer;transition:all 0.2s ease-out;&:hover{font-weight:bold;}}&:before,&:after{content:'';width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{left:auto;right:0;}"], _styles_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].text_grey_mid_two);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMasthead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeaderTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "{redditDev}"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeaderDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "The best of frontend web development on Reddit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./favourites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Favourites"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSearchSubmit: props.onSearchSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.ddaf0c6f7200036566bd.hot-update.js.map