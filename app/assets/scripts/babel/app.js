'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *  Initialise a store to hold the API data
 */
var dataStore = function dataStore() {
  var _data = {};

  var _getData = function _getData() {
    return _data;
  };

  var _updateData = function _updateData(input) {
    _data = input;
  };

  return { setData: _updateData, getData: _getData };
}();

/*
Fetch all data from the Reddit server
 */
var init = function init() {
  // r/webdev
  var fetchWebDev = fetch('https://www.reddit.com/r/webdev.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/webdev');
  });

  // r/web_design
  var fetchWebDesign = fetch('https://www.reddit.com/r/web_design.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/web_design');
  });

  // r/frontend
  var fetchFrontEnd = fetch('https://www.reddit.com/r/frontend.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/frontend');
  });

  // r/css
  var fetchCSS = fetch('https://www.reddit.com/r/css.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/css');
  });

  // r/javascript
  var fetchJavascript = fetch('https://www.reddit.com/r/javascript.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/javascript');
  });

  // r/jquery
  var fetchJQuery = fetch('https://www.reddit.com/r/jquery.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/jquery');
  });

  // r/webdevtutorials
  var fetchWebDevTutorials = fetch('https://www.reddit.com/r/WebdevTutorials.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/webdevtutorials');
  });

  // r/reactjs
  var fetchReactJS = fetch('https://www.reddit.com/r/reactjs.json?').then(function (resp) {
    return resp.json();
  }).catch(function (err) {
    return console.error('Error fetching data from r/reactjs');
  });

  // TODO: simplify fetch using array of endpoint urls
  var urls = ['https://www.reddit.com/r/webdev.json?', 'https://www.reddit.com/r/web_design.json?', 'https://www.reddit.com/r/frontend.json?', 'https://www.reddit.com/r/css.json?', 'https://www.reddit.com/r/javascript.json?', 'https://www.reddit.com/r/jquery.json?', 'https://www.reddit.com/r/WebdevTutorials.json?', 'https://www.reddit.com/r/reactjs.json?'];

  var posts = Promise.all(urls.map(function (endpoint) {
    return fetch(endpoint).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return data;
    });
  }));

  Promise.all([fetchWebDev, fetchWebDesign, fetchFrontEnd, fetchCSS, fetchJavascript, fetchJQuery, fetchWebDevTutorials, fetchReactJS]).then(function (values) {
    var combined = [];
    var allPosts = [];

    values.forEach(function (item) {
      combined.push.apply(combined, _toConsumableArray(item.data.children));
    });
    combined.forEach(function (item) {
      var post = item.data;

      allPosts.push(post);
    });
    // Sort by date
    var sortedByDate = allPosts.sort(function (a, b) {
      return b.created - a.created;
    });
    // Update the datastore with the API data fetched from the server
    dataStore.setData(sortedByDate);

    // Add data to the view
    updateView(sortedByDate);
  }).catch(function () {
    document.getElementById('loading').remove();
    var errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = "<h3 class='error-message__header'>Oops!</h3><span class='error-message__body'>Sorry, looks like there was an error fetching the latest posts.</span>";
    document.getElementById('reddit-content').appendChild(errorMessage);
  });
};

/*
Convert UNIX timestamp into regular format
 */
var convertTimestamp = function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),

  // Convert the passed timestamp to milliseconds
  yyyy = d.getFullYear().toString().substr(2, 2),
      mm = d.getMonth() + 1,

  // Months are zero based. Add leading 0.
  dd = d.getDate(),

  // Add leading 0.
  hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),

  // Add leading 0.
  ampm = 'am',
      time = void 0;

  if (hh > 12) {
    h = hh - 12;
    ampm = 'pm';
  } else if (hh === 12) {
    h = 12;
    ampm = 'pm';
  } else if (hh === 0) {
    h = 12;
  }

  time = h + ':' + min + ampm + ' ' + dd + '/' + mm + '/' + yyyy;
  return time;
};

// Extracts hostname from URL
var getHostname = function getHostname(href) {
  var l = document.createElement('a');
  var shortened;
  l.href = href;
  if (l.hostname.indexOf('www.') === 0) {
    shortened = l.hostname.replace('www.', '');
    return shortened;
  } else {
    return l.hostname;
  }
};

/**
 * Convert the UNIX timestamp provided by the API into human-readable format
 */
function getTimeAgo(timestamp) {
  var d = new Date();
  // Convert the passed timestamp to milliseconds
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

/*
Place into HTML
 */
var redditContent = document.getElementById('card-container'),
    loadingSpinner = document.getElementById('loading'),
    modal = document.querySelector('.modal'),
    header = document.querySelector('.header'),
    body = document.getElementsByTagName('body')[0];

function updateView(data) {
  // Clear content from card container
  redditContent.innerHTML = null;

  function isLoading(loadState) {
    var loading = loadState;
    loading ? loadingSpinner.style.display = 'block' : loadingSpinner.style.display = 'none';
  }

  isLoading(true);

  var combinedCards = document.createDocumentFragment();

  data.forEach(function (post) {
    var title = post.title,
        created_utc = post.created_utc,
        num_comments = post.num_comments,
        subreddit = post.subreddit,
        url = post.url,
        permalink = post.permalink;

    var time = getTimeAgo(created_utc);
    var numCommentsText = num_comments === 1 ? num_comments + ' comment' : numCommentsText = num_comments + ' comments';

    var card = document.createElement('div');
    card.className = 'reddit-card reddit-card-' + post.subreddit.toLowerCase();
    card.setAttribute('data-sr', subreddit.toLowerCase());
    card.innerHTML = '<div class="reddit-card-inner">\n        <div class=\'subreddit-wrapper\'>\n            <h3 class="reddit-card__subreddit subreddit-' + subreddit.toLowerCase() + '">r/' + subreddit + '</h3>\n        </div>            \n                      <div class="reddit-card__post-title"><a href="' + url + '" target="blank">\n                      ' + title + '</a></div>\n                      <div class="card-footer">\n                      <span class="short-url">' + getHostname(url) + '</span><span class=\'bar\'>|</span> \n                      <time class="timestamp">' + time + '</time></span><span class=\'bar\'>|</span>\n                        <span class="post-comments">\n                          <a href="http://reddit.com' + permalink + '" target="blank">\n                          ' + numCommentsText + '</a>\n                        </span>     \n                      </div></div>';

    combinedCards.appendChild(card);
  });

  var endMsg = document.createElement('span');
  endMsg.classList.add('end-message');
  endMsg.textContent = "That's all, folks!";

  // Add cards to the container element
  redditContent.appendChild(combinedCards);
  redditContent.appendChild(endMsg);
  isLoading(false);

  // Check that newly loaded cards are in view
  checkVisible();
}

var showMessage = function showMessage() {
  // Set up messages
  var _emptyMessage = document.createElement('div');
  _emptyMessage.className = 'empty-message';
  _emptyMessage.innerHTML = "<h3 class='empty-message__header'>Nothing to see here.</h3><span class='empty-message__body'>Please use the filter button to select which subreddits to display</span>";

  // Create a 'clear search' button 
  var _clearSearchBtn = document.createElement('button');
  _clearSearchBtn.className = 'clear-search';
  _clearSearchBtn.innerHTML = 'Clear search';
  _clearSearchBtn.addEventListener('click', function () {
    init();
    $('.search-wrapper').removeClass('search-wrapper--opened');
    $('.search__close-btn').fadeOut('slow');
    $('.search').removeClass('search--opened');
  });

  var _searchResult = document.createElement('div');

  var _empty = function _empty() {
    redditContent.appendChild(_emptyMessage);
  };

  var _search = function _search(term) {
    _searchResult.className = 'search-term';
    _searchResult.innerHTML = 'Results for "' + term + '":';
    _searchResult.appendChild(_clearSearchBtn);
    contentInfo.appendChild(_searchResult);
  };

  var _noResults = function __noResults(term) {
    _searchResult.className = 'search-term';
    _searchResult.innerHTML = 'No results for "' + term + '".';
    _searchResult.appendChild(_clearSearchBtn);
    contentInfo.appendChild(_searchResult);
  };

  var _clear = function _clear() {
    contentInfo.innerHTML = '';
  };

  return {
    empty: _empty,
    search: _search,
    noResults: _noResults,
    clear: _clear
  };
}();

// Debounce scroll function to prevent too many triggers
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout = void 0;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
  };
}

// Check which cards are visible on scroll
function checkVisible(e) {
  var redditCards = document.querySelectorAll('.reddit-card');
  redditCards.forEach(function (card) {
    var scrollInAt = void 0;

    window.scrollY < 0 ? scrollInAt = window.innerHeight : scrollInAt = window.scrollY + window.innerHeight - window.innerHeight * 0.1;

    var isShowing = scrollInAt > card.offsetTop;
    var isNotShowing = window.scrollY < scrollInAt;
    var scrolled = window.scrollY > 10;

    isShowing && isNotShowing ? card.classList.add('animate') : card.classList.remove('animate');
  });
}

/**
 * Sticky header that slides into view only when the user scrolls up
 */
function stickyHeader() {
  var previous = window.scrollY;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 180) {
      header.classList.add('sticky-header');
      if (window.scrollY >= previous) {
        header.classList.remove('is-sticky');
        previous = window.scrollY;
      } else if (window.scrollY < previous) {
        header.classList.add('is-sticky');
        previous = window.scrollY;
      }
    } else if (window.scrollY < 180) {
      header.classList.remove('is-sticky');
      header.classList.remove('sticky-header');
      previous = window.scrollY;
    } else {
      return;
    }
  });
}

// Event listeners for scroll events
window.addEventListener('scroll', checkVisible);
window.addEventListener('scroll', stickyHeader);

// Close and open filters list modal
var toggleModal = function toggleModal() {
  $(modal).fadeToggle('fast');
  $('.filter-overlay').fadeToggle(100);
  modal.classList.toggle('modal--opened');
  document.body.classList.toggle('no-scroll');
  if (header.classList.contains('is-sticky')) {
    modal.classList.add('modal--opened--stuck');
  } else {
    modal.classList.remove('modal--opened--stuck');
  }
};

var filterBtn = document.querySelector('.filter-btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var filterOverlay = document.getElementById('filter-overlay');

filterBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

/* Mobile touch events */
var filterOverlayTap = new Hammer(filterOverlay);

filterOverlayTap.on('tap', function (ev) {
  toggleModal();
});

var filters = {};

filters.all = document.querySelector('.all-filter');

// Check if no subreddits are selected then show a message
var handleVisible = function handleVisible() {
  var _numberOfVisible = function () {
    var subreddits = Array.from(document.querySelectorAll('.filters__list-item'));
    var selected = subreddits.filter(function (sub) {
      return sub.classList.contains('subreddit--selected');
    });
    return selected.length;
  }();

  var _updateCards = function _updateCards(num) {
    if (_numberOfVisible === 0) {
      filters.all.classList.remove('subreddit--selected');
      filters.all.classList.add('subreddit--deselected');
      showMessage.empty();
    } else if (_numberOfVisible > 0 && _numberOfVisible < 8) {
      filters.all.classList.remove('subreddit--selected');
      filters.all.classList.add('subreddit--deselected');
      showMessage.clear();
    } else {
      filters.all.classList.remove('subreddit--deselected');
      filters.all.classList.add('subreddit--selected');
    }

    return _numberOfVisible;
  };

  return { numberOfVisible: _numberOfVisible, updateCards: _updateCards };
}();

function removeSubreddit() {
  var subReds = document.getElementsByClassName('filters__list-item');
  for (var i = 0; i < subReds.length; i++) {
    subReds[i].classList.remove('subreddit--selected');
    subReds[i].classList.add('subreddit--deselected');
    handleShow(subReds[i], subReds[i].getAttribute('data-sr'));
  }
}

function addSubreddit() {
  var subReds = document.getElementsByClassName('filters__list-item');
  for (var i = 0; i < subReds.length; i++) {
    subReds[i].classList.add('subreddit--selected');
    subReds[i].classList.remove('subreddit--deselected');
    handleShow(subReds[i], subReds[i].getAttribute('data-sr'));
  }
}

/**
 * Toggles the 'select all' button
 */
filters.all.addEventListener('click', function (e) {
  e.stopPropagation();

  if (handleVisible.updateCards() === 0) {
    this.classList.remove('subreddit--deselected');
    this.classList.add('subreddit--selected');
    addSubreddit();
  } else if (handleVisible.updateCards() === 8) {
    this.classList.add('subreddit--deselected');
    this.classList.remove('subreddit--selected');
    removeSubreddit();
  } else {
    this.classList.add('subreddit--selected');
    this.classList.remove('subreddit--deselected');
    addSubreddit();
  }
});

/**
 *  Handles showing and hiding the selected category.
 *  Takes in the chosen category and the subreddit of the element on the page to be shown/hidden. The function targets the data attribute of the cards to select which to hide or show
 */
function handleShow(target, sr) {
  if (target.classList.contains('subreddit--deselected')) {
    $('.reddit-card-' + sr).hide();
  } else {
    $('.reddit-card-' + sr).fadeIn('fast');
  }

  $('.end-message').fadeIn('fast');
  handleVisible.updateCards();
}

/**
 *  Add event handlers to all subreddits in list to handle hiding and showing
 */
filters.webDesign = document.querySelector('.web_design-filter');
filters.frontend = document.querySelector('.frontend-filter');
filters.webDev = document.querySelector('.webdev-filter');
filters.css = document.querySelector('.css-filter');
filters.javascript = document.querySelector('.javascript-filter');
filters.jquery = document.querySelector('.jquery-filter');
filters.webdevTutorials = document.querySelector('.webdevtutorials-filter');
filters.react = document.querySelector('.reactjs-filter');

for (var filter in filters) {
  filters[filter].addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, this.getAttribute('data-sr'));
  });
}

var backToTopBtn = document.getElementById('back-to-top');

// Scroll progress bar
window.addEventListener('scroll', function () {
  var scrolledBar = document.getElementById('scrolled-bar');
  var scrolled = document.body.clientHeight - window.innerHeight,
      scrolledTotal = (window.scrollY / scrolled * 100).toFixed(0);
  scrolledBar.style.width = scrolledTotal + '%';
  scrolledTotal > 2 ? $(backToTopBtn).fadeIn('fast') : $(backToTopBtn).fadeOut('fast');
});

var backToTopTap = new Hammer(backToTopBtn);

backToTopTap.on('tap', function (ev) {
  window.scrollTo(0, 0);
});

/**
 * [isSearched description]
 * @param  {[type]}  searchTerm [description]
 * @return {Boolean}            [description]
 */
function isSearched(searchTerm) {
  return function (item) {
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

var search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchCloseBtn = document.getElementById('search-close-btn');

var searchTap = new Hammer(searchBtn);

searchTap.on('tap', function (ev) {
  $('.search-wrapper').toggleClass('search-wrapper--opened');
  $('.search__close-btn').fadeIn('fast');
  $('.search').toggleClass('search--opened');
  document.getElementById('search').focus();
});

var searchCloseTap = new Hammer(searchCloseBtn);

searchCloseTap.on('tap', function (ev) {
  search.value = '';
  $('.search-wrapper').removeClass('search-wrapper--opened');
  $('.search__close-btn').fadeOut('fast');
  $('.search').removeClass('search--opened');
});

/**
 * Listens for a mousemove to remove the focus ring from elements if the user is using a mouse.
 */
function checkForMouseUse() {
  document.body.classList.add('mouse-user');
  document.body.removeEventListener('mousemove', checkForMouseUse);
}
document.body.addEventListener('mousemove', checkForMouseUse);

search.addEventListener('keyup', function (e) {
  var filtered = void 0;
  console.log(e.target.value);
  if (e.target.value.length > 0) {
    filtered = dataStore.getData().filter(isSearched(e.target.value));
    updateView(filtered);
    showMessage.search(e.target.value);
    if (!filtered.length) {
      showMessage.noResults(e.target.value);
    }

    e.target.value = '';
  }
});

/**
 * Button that toggles between grid and row view
 */
(function switchLayout() {
  var viewBtn = document.getElementById('view-btn');

  viewBtn.addEventListener('click', function () {
    if (this.classList.contains('grid')) {
      this.classList.add('rows');
      this.classList.remove('grid');
      this.innerHTML = 'View<i class=\'fa fa-list\'>';
    } else {
      this.classList.remove('rows');
      this.classList.add('grid');
      this.innerHTML = 'View<i class=\'fa fa-th-large\'>';
    }
    redditContent.classList.toggle('card-container--rows');
    checkVisible();
  });
})();

window.onload = function () {
  document.body.style.opacity = 0;
  document.body.style.opacity = 1;
  init();
};

window.addEventListener('resize', checkVisible);

/* Service Worker */
// if ('serviceWorker' in navigator) {
//   // Check whether the browser supports the  service worker api
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/serviceworker.js').then(function(
//       registration,
//     ) {
//       // Registration was successful
//       console.log('Service Worker registered');
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
document.querySelector('.header').addEventListener('mouseover', function () {
  document.querySelector('.modal').style.willChange = 'transform';
});