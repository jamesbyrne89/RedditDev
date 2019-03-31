webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: mapSubsToColours, getHostname, numCommentsText, getTimeAgo, debounce, filterPostsCallback, isAlreadyFavourite, sortByNewest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSubsToColours", function() { return mapSubsToColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostname", function() { return getHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numCommentsText", function() { return numCommentsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeAgo", function() { return getTimeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPostsCallback", function() { return filterPostsCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlreadyFavourite", function() { return isAlreadyFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByNewest", function() { return sortByNewest; });
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

    case 'node':
      return 'nine';

    case 'vuejs':
      return 'ten';

    default:
      return 'one';
  }
}
function getHostname(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  return match[2];
}
function numCommentsText(numComments) {
  return numComments === 1 ? "".concat(numComments, " comment") : "".concat(numComments, " comments");
}
/**
 * Convert the UNIX timestamp provided by the API into human-readable format
 */

function getTimeAgo(timestamp) {
  var d = new Date(); // Convert the passed timestamp to milliseconds

  var tNowS = Math.floor(d.getTime() / 1000);
  var seconds = tNowS - timestamp;
  var mins = Math.floor(seconds / 60);
  var hours = Math.floor(mins / 60);
  var days = Math.floor(seconds / 3600 / 24);

  if (days >= 8) {
    return 'A week ago';
  } else if (seconds > 2 * 24 * 3600) {
    return Math.floor(days) + 'd ago';
  } else if (seconds > 24 * 3600) {
    return 'Yesterday';
  } else if (mins > 60) {
    return hours + 'h ago';
  } else if (2 < mins < 60) {
    return mins + 'm ago';
  } else {
    return mins + 'Just now';
  }
}
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function filterPostsCallback(searchTerm) {
  return function (post) {
    return post.data.title.includes(searchTerm) || post.data.url.includes(searchTerm);
  };
}
function isAlreadyFavourite(postToCheck) {
  console.log({
    postToCheck: postToCheck
  });
  return function (post) {
    if (postToCheck.data.title === post.data.title) {
      console.log(postToCheck.data);
      console.log(post.data);
    }

    return postToCheck.data.title === post.data.title && postToCheck.data.id === post.data.id;
  };
}
function sortByNewest(a, b) {
  return b.data.created - a.data.created;
}

/***/ })

})
//# sourceMappingURL=index.js.fe78cec0694396e5c56a.hot-update.js.map