"use strict";

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

    return {
        setData: _updateData,
        getData: _getData
    };
}();

/*
Fetch all data from the Reddit server
 */
var init = function init() {

    // r/webdev
    var fetchWebDev = fetch("https://www.reddit.com/r/webdev.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/webdev');
    });

    // r/web_design
    var fetchWebDesign = fetch("https://www.reddit.com/r/web_design.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/web_design');
    });

    // r/frontend
    var fetchFrontEnd = fetch("https://www.reddit.com/r/frontend.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/frontend');
    });

    // r/css
    var fetchCSS = fetch("https://www.reddit.com/r/css.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/css');
    });

    // r/javascript
    var fetchJavascript = fetch("https://www.reddit.com/r/javascript.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/javascript');
    });

    // r/jquery
    var fetchJQuery = fetch("https://www.reddit.com/r/jquery.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/jquery');
    });

    // r/webdevtutorials
    var fetchWebDevTutorials = fetch("https://www.reddit.com/r/WebdevTutorials.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data from r/webdevtutorials');
    });

    Promise.all([fetchWebDev, fetchWebDesign, fetchFrontEnd, fetchCSS, fetchJavascript, fetchJQuery, fetchWebDevTutorials]).then(function (values) {

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
        dataStore.setData(sortedByDate);
        console.log(dataStore.getData());
        updateView(sortedByDate);
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

    time = h + ":" + min + ampm + " " + dd + "/" + mm + "/" + yyyy;
    return time;
};

// Extracts hostname from URL
var getHostname = function getHostname(href) {
    var l = document.createElement("a");
    var shortened;
    l.href = href;
    if (l.hostname.indexOf('www.') === 0) {
        shortened = l.hostname.replace('www.', '');
        return shortened;
    } else {
        return l.hostname;
    }
};

function getTimeAgo(timestamp) {
    var d = new Date(); // Convert the passed timestamp to milliseconds
    var tNowS = Math.floor(d.getTime() / 1000);
    var seconds = tNowS - timestamp;
    var mins = Math.floor(seconds / 60);
    var hours = Math.floor(mins / 60);
    var days = Math.floor(seconds / 3600 / 24);

    if (days >= 7) {
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

var redditContent = document.getElementById('card-container');
var contentInfo = document.getElementById('content-info');

function updateView(data) {

    $('#loading').fadeIn('fast');

    // Clear content from card container
    contentInfo.innerHTML = '';
    redditContent.innerHTML = '';

    // Add an end mark icon
    var endMark = document.createElement('img');
    endMark.classList.add('content-end-mark');
    endMark.setAttribute('src', '../../../assets/images/reddit-icon-32x32.png');

    for (var i = 0; i < data.length; i++) {

        var time = getTimeAgo(data[i].created_utc);
        var thumbnail = void 0;
        var numCommentsText = void 0;
        // Check whether a thumbnail is available
        if (data[i].preview && data[i].preview.images[0].resolutions && data[i].preview.images[0].resolutions[2]) {
            thumbnail = "<a href=\"" + data[i].url + "\" target=\"_blank\">\n                        <div class=\"reddit-card__thumbnail-wrapper " + data[i].subreddit.toLowerCase() + "-overlay\"><img class=\"lazyload reddit-card__thumbnail\" src=\"" + data[i].preview.images[0].resolutions[2].url + "\">\n                        </div>\n                        </a>";
        } else {
            thumbnail = "";
        }

        // Create individual cards
        var card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add("reddit-card-" + data[i].subreddit.toLowerCase());
        card.setAttribute('data-sr', data[i].subreddit.toLowerCase());

        // Remove the 's' if comment number is one
        if (data[i].num_comments === 1) {
            numCommentsText = data[i].num_comments + " comment";
        } else {
            numCommentsText = data[i].num_comments + " comments";
        }
        var html = "<div class=\"reddit-card-inner\">\n        <h3 class=\"reddit-card__subreddit subreddit-" + data[i].subreddit.toLowerCase() + "\">r/" + data[i].subreddit + "</h3>\n                    \n                      <div class=\"reddit-card__post-title\"><a href=\"" + data[i].url + "\" target=\"blank\">\n                      " + data[i].title + "</a></div>\n\n\n                      <div class=\"card-footer\">\n                      <span class=\"short-url\">" + getHostname(data[i].url) + "</span><span class='bar'>|</span> \n                      <time class=\"timestamp\">" + time + "</time></span><span class='bar'>|</span>\n                        <span class=\"post-comments\">\n                          <a href=\"http://reddit.com/" + data[i].permalink + "\" target=\"blank\">\n                          " + numCommentsText + "</a>\n                        </span>     \n                      </div></div>";
        card.innerHTML = html;
        $('#loading').hide();
        redditContent.appendChild(card);
    }
    redditContent.appendChild(endMark);
    endMark.style.display = 'block';

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
        $('.search__close-btn').fadeOut('fast');
        $('.search').removeClass('search--opened');
    });

    var _searchResult = document.createElement('div');

    var _empty = function _empty() {
        contentInfo.innerHTML = _emptyMessage;
    };

    var _search = function _search(term) {
        _searchResult.className = 'search-term';
        _searchResult.innerHTML = "Results for \"" + term + "\":";
        _searchResult.appendChild(_clearSearchBtn);
        contentInfo.appendChild(_searchResult);
    };

    var _noResults = function __noResults(term) {
        _searchResult.className = 'search-term';
        _searchResult.innerHTML = "No results for \"" + term + "\".";
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

    var timeout;
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
};

// Check whether cards are visible on load and animate them in


// Check which cards are visible on scroll

function checkVisible(e) {

    $('.reddit-card').each(function () {

        var scrollInAt = void 0;
        if (window.scrollY < 0) {
            scrollInAt = window.innerHeight;
        } else {
            scrollInAt = window.scrollY + window.innerHeight - window.innerHeight * 0.1;
        }
        var isShowing = scrollInAt > this.offsetTop;
        var isNotShowing = window.scrollY < scrollInAt;
        var scrolled = window.scrollY > 10;

        if (scrolled && isShowing && isNotShowing) {
            this.classList.add('animate');
        } else if (!scrolled && isShowing && isNotShowing) {
            this.classList.add('animate');
        } else {
            this.classList.remove('animate');
        }
    });
}

function stickyHeader() {
    var previous = window.scrollY;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 180 && window.scrollY > previous) {
            $('.header').removeClass('is-sticky');
            previous = window.scrollY;
        } else if (window.scrollY > 180 && window.scrollY < previous) {
            $('.header').addClass('is-sticky');
            previous = window.scrollY;
        } else if (window.scrollY < 180) {
            $('.header').removeClass('is-sticky');
            previous = window.scrollY;
        } else {
            return;
        }
    });
};

window.addEventListener('scroll', checkVisible);
window.addEventListener('scroll', stickyHeader);

// Close and open filters list modal
var toggleModal = function toggleModal() {
    $('.modal').fadeToggle('fast');
    $('.filter-overlay').fadeToggle(100);
    if ($('header').hasClass('is-sticky')) {
        $('.modal').toggleClass('modal--opened');
        $('.modal').addClass('modal--opened--stuck');
        $('html').toggleClass('no-scroll');
    } else {
        $('.modal').toggleClass('modal--opened');
        $('html').toggleClass('no-scroll');
        $('.modal').removeClass('modal--opened--stuck');
    }
};

$('.filter-btn').on('click', toggleModal);
$('.modal__close-btn').on('click', toggleModal);
$('.filter-overlay').on('click', toggleModal);

// Check if no subreddits are selected then show a message
var visibleSubreddits = function visibleSubreddits() {

    var _checkVisible = function _checkVisible() {
        var subreddits = document.getElementsByClassName('filters__list-item');
        var selected = [];
        for (var i = 0; i < subreddits.length; i++) {
            if (subreddits[i].classList.contains('subreddit--selected')) {
                selected.push(subreddits[i]);
            }
        }
        return selected.length;
    };

    var _updateVisible = function _updateVisible() {
        if (_checkVisible() === 0) {
            $('.all-filter').removeClass('subreddit--selected');
            $('.all-filter').addClass('subreddit--deselected');
            showMessage.empty();
        } else if (_checkVisible() > 0 && _checkVisible() < 7) {
            $('.all-filter').removeClass('subreddit--selected');
            $('.all-filter').addClass('subreddit--deselected');
            showMessage.clear();
        } else {
            $('.all-filter').removeClass('subreddit--deselected');
            $('.all-filter').addClass('subreddit--selected');
            showMessage.empty();
        }
        return _checkVisible();
    };

    return {
        checkVisible: _checkVisible,
        updateVisible: _updateVisible
    };
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

$('.all-filter').on('click', function (e) {

    if (visibleSubreddits.updateVisible() === 0) {

        this.classList.remove('subreddit--deselected');
        this.classList.add('subreddit--selected');
        addSubreddit();
    } else if (visibleSubreddits.updateVisible() === 7) {
        this.classList.add('subreddit--deselected');
        this.classList.remove('subreddit--selected');
        removeSubreddit();
    } else {
        this.classList.add('subreddit--selected');
        this.classList.remove('subreddit--deselected');
        addSubreddit();
    };
});

/**
 *  Handles showing and hiding the selected category.
 *  Takes in the chosen category and the subreddit of the element on the page to be shown/hidden. The function targets the data attribute of the cards to select which to hide or show
 */
function handleShow(target, sr) {
    checkVisible();

    if (target.classList.contains('subreddit--deselected')) {
        $(".reddit-card-" + sr).hide();
    } else {
        $(".reddit-card-" + sr).fadeIn('fast');
    }
}

/**
 *  Add event handlers to all subreddits in list to handle hiding and showing
 */

$('.web_design-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'web_design');
    visibleSubreddits.updateVisible();
});

$('.frontend-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'frontend');
    visibleSubreddits.updateVisible();
});

$('.webdev-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'webdev');
    visibleSubreddits.updateVisible();
});

$('.css-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'css');
    visibleSubreddits.updateVisible();
});

$('.javascript-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'javascript');
    visibleSubreddits.updateVisible();
});

$('.jquery-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'jquery');
    visibleSubreddits.updateVisible();
});

$('.webdevtutorials-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'webdevtutorials');
    visibleSubreddits.updateVisible();
});

// Scroll progress bar
$(window).scroll(function () {
    var scrolled = $(document).height() - $(window).height();

    var scrolledTotal = ($(window).scrollTop() / scrolled * 100).toFixed(0);
    $('#scrolled-bar').css('width', scrolledTotal + "%");
    if (scrolledTotal > 2) {
        $('#back-to-top').fadeIn('fast');
    } else {
        $('#back-to-top').fadeOut('fast');
    }
});

$('#back-to-top').on('click', function () {
    window.scrollTo(0, 0);
});

init();

function isSearched(searchTerm) {
    return function (item) {
        return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    };
};

var search = document.getElementById('search');

$('.search-btn').on('click', function () {

    $('.search-wrapper').addClass('search-wrapper--opened');
    $('.search__close-btn').fadeIn('fast');
    $('.search').addClass('search--opened');
    document.getElementById('search').focus();
});

$('.search__close-btn').on('click', function () {
    search.value = '';
    $('.search-wrapper').removeClass('search-wrapper--opened');
    $('.search__close-btn').fadeOut('fast');
    $('.search').removeClass('search--opened');
});

document.body.addEventListener('mousemove', function () {
    document.body.classList.add('mouse-user');
});

search.addEventListener('change', function (e) {
    var filtered = void 0;
    if (e.target.value.length > 0 && typeof e.target.value === 'string') {
        filtered = dataStore.getData().filter(isSearched(e.target.value));
        updateView(filtered);
        showMessage.search(e.target.value);
        if (filtered.length === 0) {
            showMessage.noResults(e.target.value);
        }
        e.target.value = '';
    }
});

/**
 * View button
 */

(function switchLayout() {
    var viewBtn = document.getElementById('view-btn');

    viewBtn.addEventListener('click', function () {
        redditContent.classList.toggle('card-container--rows');
    });
})();