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

        var time = convertTimestamp(sortedByDate[i].created);
        var thumbnail = void 0;
        var numCommentsText = void 0;

        if (sortedByDate[i].preview && sortedByDate[i].preview.images[0].resolutions && sortedByDate[i].preview.images[0].resolutions[2]) {
            thumbnail = "<img class=\"lazyload reddit-card__thumbnail\" src=\"" + sortedByDate[i].preview.images[0].resolutions[2].url + "\">";
        } else {
            thumbnail = "";
        }
        var card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add(sortedByDate[i].subreddit);

        // Remove the 's' if comment number is one
        if (sortedByDate[i].num_comments === 1) {
            numCommentsText = sortedByDate[i].num_comments + " comment";
        } else {
            numCommentsText = sortedByDate[i].num_comments + " comments";
        }

        var html = "<div class=\"reddit-card__subreddit " + sortedByDate[i].subreddit + "\">r/" + sortedByDate[i].subreddit + "</div>\n                      <figure class=\"reddit-card__thumbnail-title-wrapper\">\n                        <a href=\"" + sortedByDate[i].url + "\" target=\"_blank\">\n                        <div class=\"reddit-card__thumbnail-wrapper\">" + thumbnail + "\n                        </div>\n                        </a>\n\n                      <div class=\"reddit-card__post-title\"><a href=\"" + sortedByDate[i].url + "\" target=\"blank\">\n                      " + sortedByDate[i].title + "</a></div>\n                      </figure>\n                      <div class=\"card-footer\">\n                      <span class=\"short-url\">" + getHostname(sortedByDate[i].url) + "</span>      \n                      <div> \n                        <span class=\"post-comments\">\n                          <a href=\"http://reddit.com/" + sortedByDate[i].permalink + "\" target=\"blank\">\n                          " + numCommentsText + "</a>\n                        </span>\n                        <time class=\"timestamp\">" + time + "</time>\n                        </div>\n                      </div>";
        card.innerHTML = html;
        $('#reddit-content').hide().append(card).fadeIn(500);
        $('#loading').hide();
    }
}

// Filter by subreddit
$('.filters__title').on('click', function () {
    $('.expand-icon').toggleClass('expand-icon--opened');
    $('.filters__list').toggleClass('filters__list--opened');
});

$('.select-all').on('click', function () {
    if ($(this).prop('checked')) {
        $('.checkbox').prop('checked', true);
        $('.web_design-box').trigger('change');
        $('.frontend-box').trigger('change');
        $('.webdev-box').trigger('change');
        $('.css-box').trigger('change');
        $('.javascript-box').trigger('change');
        $('.jquery-box').trigger('change');
        $('.webdevtutorials-box').trigger('change');
    } else {
        $('.checkbox').prop('checked', false);
        $('.web_design-box').trigger('change');
        $('.frontend-box').trigger('change');
        $('.webdev-box').trigger('change');
        $('.css-box').trigger('change');
        $('.javascript-box').trigger('change');
        $('.jquery-box').trigger('change');
        $('.webdevtutorials-box').trigger('change');
    }
});

$('.web_design-box').change(function () {
    console.log('triggered');
    if ($(this).prop('checked')) {
        $('.web_design').fadeIn('fast');
    } else {
        $('.web_design').fadeOut('fast');
    }
});

$('.frontend-box').change(function () {
    if ($(this).prop('checked')) {
        $('.Frontend').fadeIn('fast');
    } else {
        $('.Frontend').fadeOut('fast');
    }
});

$('.webdev-box').change(function () {
    if ($(this).prop('checked')) {
        $('.webdev').fadeIn('fast');
    } else {
        $('.webdev').fadeOut('fast');
    }
});

$('.css-box').change(function () {
    if ($(this).prop('checked')) {
        $('.css').fadeIn('fast');
    } else {
        $('.css').fadeOut('fast');
    }
});

$('.javascript-box').change(function () {
    if ($(this).prop('checked')) {
        $('.javascript').fadeIn('fast');
    } else {
        $('.javascript').fadeOut('fast');
    }
});

$('.jquery-box').change(function () {
    if ($(this).prop('checked')) {
        $('.jquery').fadeIn('fast');
    } else {
        $('.jquery').fadeOut('fast');
    }
});

$('.webdevtutorials-box').change(function () {
    if ($(this).prop('checked')) {
        $('.WebdevTutorials').fadeIn('fast');
    } else {
        $('.WebdevTutorials').fadeOut('fast');
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