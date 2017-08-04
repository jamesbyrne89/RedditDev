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

        console.log(allPosts);

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

        if (sortedByDate[i].preview && sortedByDate[i].preview.images[0].resolutions && sortedByDate[i].preview.images[0].resolutions[2]) {
            thumbnail = "<img class=\"lazyload reddit-card__thumbnail\" src=\"" + sortedByDate[i].preview.images[0].resolutions[2].url + "\">";
        } else {
            thumbnail = "";
        }
        var card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add("reddit-card-" + sortedByDate[i].subreddit.toLowerCase());

        // Remove the 's' if comment number is one
        if (sortedByDate[i].num_comments === 1) {
            numCommentsText = sortedByDate[i].num_comments + " comment";
        } else {
            numCommentsText = sortedByDate[i].num_comments + " comments";
        }

        var html = "<div class=\"reddit-card__subreddit subreddit-" + sortedByDate[i].subreddit.toLowerCase() + "\"><h3>r/" + sortedByDate[i].subreddit + "</h3></div>\n                      <figure class=\"reddit-card__thumbnail-title-wrapper\">\n                        <a href=\"" + sortedByDate[i].url + "\" target=\"_blank\">\n                        <div class=\"reddit-card__thumbnail-wrapper " + sortedByDate[i].subreddit.toLowerCase() + "-overlay\">" + thumbnail + "\n                        </div>\n                        </a>\n\n                      <div class=\"reddit-card__post-title\"><a href=\"" + sortedByDate[i].url + "\" target=\"blank\">\n                      " + sortedByDate[i].title + "</a></div>\n                      </figure>\n                      <div class=\"card-footer\">\n                      <span class=\"short-url\">" + getHostname(sortedByDate[i].url) + "</span><span class='bar'>|</span> \n                      <time class=\"timestamp\">" + time + "</time></span><span class='bar'>|</span>\n                        <span class=\"post-comments\">\n                          <a href=\"http://reddit.com/" + sortedByDate[i].permalink + "\" target=\"blank\">\n                          " + numCommentsText + "</a>\n                        </span>     \n                        \n\n                      </div>";
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
        if (window.scrollY < 10) {
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
    if (scrollY > 180) {
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
    $('.filter-overlay').fadeToggle('fast');
    if ($('header').hasClass('is-sticky')) {
        $('.modal').toggleClass('modal--opened-stuck');
    } else {
        $('.modal').toggleClass('modal--opened');
    }
};

$('.filter-btn').on('click', toggleModal);
$('.modal__close-btn').on('click', toggleModal);
$('.filter-overlay').on('click', toggleModal);

// Check if no subreddits are selected then show a message
var checkForEmpty = function checkForEmpty() {
    var subreddits = document.getElementsByClassName('filters__list-item');
    var selected = [];

    for (var i = 0; i < subreddits.length; i++) {
        if (subreddits[i].classList.contains('subreddit--selected')) {
            selected.push(subreddits[i]);
        }
    }
    if (selected.length === 0) {
        $('.empty-message').fadeIn('fast');
    } else {
        $('.empty-message').fadeOut('fast');
    }
};

// Unselect a subreddit
$('.filters__list-item').on('click', function () {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    checkForEmpty();
});

$('.web_design-filter').on('click', function (e) {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-web_design').fadeOut('fast');
    } else {
        $('.reddit-card-web_design').fadeIn('fast');
    }
});

$('.frontend-filter').on('click', function (e) {
    checkVisible();
    if ($(e.target).hasClass('subreddit--deselected')) {
        $('.reddit-card-frontend').fadeOut('fast');
    } else {
        $('.reddit-card-frontend').fadeIn('fast');
    }
});

$('.webdev-filter').on('click', function () {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdev').fadeOut('fast');
    } else {
        $('.reddit-card-webdev').fadeIn('fast');
    }
});

$('.css-filter').on('click', function () {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-css').fadeOut('fast');
    } else {
        $('.reddit-card-css').fadeIn('fast');
    }
});

$('.javascript-filter').on('click', function () {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-javascript').fadeOut('fast');
    } else {
        $('.reddit-card-javascript').fadeIn('fast');
    }
});

$('.jquery-filter').on('click', function () {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-jquery').fadeOut('fast');
    } else {
        $('.reddit-card-jquery').fadeIn('fast');
    }
});

$('.webdevtutorials-filter').on('click', function () {
    checkVisible();
    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdevtutorials').fadeOut('fast');
    } else {
        $('.reddit-card-webdevtutorials').fadeIn('fast');
    }
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
    console.log('back to top');
    window.scrollTo(0, 0);
});

getData();