"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
Fetch all data from the Reddit server
 */
var getData = function getData() {

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
function updateView(sortedByDate) {

    for (var i = 0; i < sortedByDate.length; i++) {

        var endMark = document.getElementById('content-end-mark');
        var time = getTimeAgo(sortedByDate[i].created_utc);
        var thumbnail = void 0;
        var numCommentsText = void 0;
        var cardsArr = void 0;

        // Check whether a thumbnail is available
        if (sortedByDate[i].preview && sortedByDate[i].preview.images[0].resolutions && sortedByDate[i].preview.images[0].resolutions[2]) {
            thumbnail = "<a href=\"" + sortedByDate[i].url + "\" target=\"_blank\">\n                        <div class=\"reddit-card__thumbnail-wrapper " + sortedByDate[i].subreddit.toLowerCase() + "-overlay\"><img class=\"lazyload reddit-card__thumbnail\" src=\"" + sortedByDate[i].preview.images[0].resolutions[2].url + "\">\n                        </div>\n                        </a>";
        } else {
            thumbnail = "";
        }
        var card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add("reddit-card-" + sortedByDate[i].subreddit.toLowerCase());
        card.setAttribute('data-sr', sortedByDate[i].subreddit.toLowerCase());

        // Remove the 's' if comment number is one
        if (sortedByDate[i].num_comments === 1) {
            numCommentsText = sortedByDate[i].num_comments + " comment";
        } else {
            numCommentsText = sortedByDate[i].num_comments + " comments";
        }

        var html = "<div class=\"reddit-card__subreddit subreddit-" + sortedByDate[i].subreddit.toLowerCase() + "\"><h3>r/" + sortedByDate[i].subreddit + "</h3></div>\n                        " + thumbnail + "\n                      <div class=\"reddit-card__post-title\"><a href=\"" + sortedByDate[i].url + "\" target=\"blank\">\n                      " + sortedByDate[i].title + "</a></div>\n                      <div class=\"card-footer\">\n                      <span class=\"short-url\">" + getHostname(sortedByDate[i].url) + "</span><span class='bar'>|</span> \n                      <time class=\"timestamp\">" + time + "</time></span><span class='bar'>|</span>\n                        <span class=\"post-comments\">\n                          <a href=\"http://reddit.com/" + sortedByDate[i].permalink + "\" target=\"blank\">\n                          " + numCommentsText + "</a>\n                        </span>     \n                      </div>";
        card.innerHTML = html;
        $('#loading').hide();
        $('.reddit-content').hide().append(card).fadeIn(500);
        endMark.style.display = 'block';
    }

    checkVisible();
}

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
    if (window.scrollY > 180) {
        $('.header').addClass('is-sticky');
    } else {
        $('.header').removeClass('is-sticky');
    }
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

// (function view() {

// const subreddits = function() {

// }

// return {
//     currentSubReddits
// }
// })();


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
        } else if (0 > _checkVisible() < 7) {
            $('.all-filter').removeClass('subreddit--selected');
            $('.all-filter').addClass('subreddit--deselected');
            $('.empty-message').fadeOut('fast');
        } else {
            $('.all-filter').removeClass('subreddit--deselected');
            $('.all-filter').addClass('subreddit--selected');
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
});

$('.frontend-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'frontend');
});

$('.webdev-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'webdev');
});

$('.css-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'css');
});

$('.javascript-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'javascript');
});

$('.jquery-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'jquery');
});

$('.webdevtutorials-filter').on('click', function (e) {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    handleShow(this, 'webdevtutorials');
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

getData();