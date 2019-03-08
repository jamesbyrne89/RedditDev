webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: mapSubsToColours, getHostname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSubsToColours", function() { return mapSubsToColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostname", function() { return getHostname; });
function mapSubsToColours(sub) {
  switch (sub.replace('r/', '').toLowerCase()) {
    case 'css':
      return 'one';

    case 'webdev':
      return 'two';

    case 'web_design':
      return 'three';

    case 'typescript':
      return 'four';

    case 'javascript':
      return 'five';

    case 'frontend':
      return 'six';

    case 'graphql':
      return 'seven';

    case 'reactjs':
      return 'eight';

    case 'nodejs':
      return 'nine';

    default:
      return 'one';
  }
}
function getHostname(href) {
  console.log(href.hostname);
  var shortened;

  if (href.hostname.indexOf('www.') === 0) {
    shortened = href.hostname.replace('www.', '');
    return shortened;
  } else {
    return href.hostname;
  }
}

/***/ })

})
//# sourceMappingURL=index.js.9e3aacf6952e87a7b3d9.hot-update.js.map