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
        return console.error('Error fetching data');
    });

    // r/web_design
    var fetchWebDesign = fetch("https://www.reddit.com/r/web_design.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data');
    });

    // r/frontend
    var fetchFrontEnd = fetch("https://www.reddit.com/r/frontend.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data');
    });

    // r/css
    var fetchCSS = fetch("https://www.reddit.com/r/css.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data');
    });

    // r/javascript
    var fetchJavascript = fetch("https://www.reddit.com/r/javascript.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data');
    });

    // r/jquery
    var fetchJQuery = fetch("https://www.reddit.com/r/jquery.json?").then(function (resp) {
        return resp.json();
    });

    // r/webdevtutorials
    var fetchWebDevTutorials = fetch("https://www.reddit.com/r/WebdevTutorials.json?").then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        return console.error('Error fetching data');
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

/*
Place into HTML
 */
function updateView(sortedByDate) {

    for (var i = 0; i < sortedByDate.length; i++) {

        var endMark = document.getElementById('content-end-mark');
        var time = convertTimestamp(sortedByDate[i].created);
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

        var html = "<div class=\"reddit-card__subreddit subreddit-" + sortedByDate[i].subreddit.toLowerCase() + "\">r/" + sortedByDate[i].subreddit + "</div>\n                      <figure class=\"reddit-card__thumbnail-title-wrapper\">\n                        <a href=\"" + sortedByDate[i].url + "\" target=\"_blank\">\n                        <div class=\"reddit-card__thumbnail-wrapper\">" + thumbnail + "\n                        </div>\n                        </a>\n\n                      <div class=\"reddit-card__post-title\"><a href=\"" + sortedByDate[i].url + "\" target=\"blank\">\n                      " + sortedByDate[i].title + "</a></div>\n                      </figure>\n                      <div class=\"card-footer\">\n                      <div> \n                      <span class=\"short-url\">" + getHostname(sortedByDate[i].url) + "</span> \n                        <span class=\"post-comments\">\n                          <a href=\"http://reddit.com/" + sortedByDate[i].permalink + "\" target=\"blank\">\n                          " + numCommentsText + "</a>\n                        </span>     \n                      </div>\n                        <time class=\"timestamp\">" + time + "</time>\n\n                      </div>";
        card.innerHTML = html;
        $('#loading').hide();
        $('.reddit-content').hide().append(card).fadeIn(500);
        endMark.style.display = 'block';
    }

    checkVisible();
}

// Debounce

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
        var scrollInAt = window.scrollY + window.innerHeight - window.innerHeight * 0.25;
        var isShowing = scrollInAt > this.offsetTop;
        var isNotShowing = window.scrollY < scrollInAt;
        var scrolled = window.scrollY > 10;
        console.log(this.getBoundingClientRect());
        if (scrolled && isShowing && isNotShowing) {
            this.classList.add('animate');
        } else if (!scrolled && isShowing && isNotShowing) {
            this.classList.add('animate');
        } else {
            this.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', checkVisible);

// Filter by subreddit
var toggleModal = function toggleModal() {
    $('.modal').fadeToggle('fast');
    $('.modal').toggleClass('modal--opened');
    $('.filter-overlay').fadeToggle('fast');
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

$('.web_design-box').on('click', function (e) {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-web_design').fadeOut('fast');
    } else {
        $('.reddit-card-web_design').fadeIn('fast');
    }
});

$('.frontend-box').on('click', function (e) {

    if ($(e.target).hasClass('subreddit--deselected')) {
        $('.reddit-card-frontend').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-frontend').fadeIn('fast');
        console.log('selected');
    }
});

$('.webdev-box').on('click', function () {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdev').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-webdev').fadeIn('fast');
        console.log('selected');
    }
});

$('.css-box').on('click', function () {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-css').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-css').fadeIn('fast');
        console.log('selected');
    }
});

$('.javascript-box').on('click', function () {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-javascript').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-javascript').fadeIn('fast');
        console.log('selected');
    }
});

$('.jquery-box').on('click', function () {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-jquery').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-jquery').fadeIn('fast');
        console.log('selected');
    }
});

$('.webdevtutorials-box').on('click', function () {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdevtutorials').fadeOut('fast');
        console.log('not selected');
    } else {
        $('.reddit-card-webdevtutorials').fadeIn('fast');
        console.log('selected');
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

getData();