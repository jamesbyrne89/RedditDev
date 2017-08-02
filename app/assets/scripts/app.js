/*
Fetch all data from the Reddit server
 */
const getData = function getData() {

    // r/webdev
    const fetchWebDev = fetch("https://www.reddit.com/r/webdev.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))

    // r/web_design
    const fetchWebDesign = fetch("https://www.reddit.com/r/web_design.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))

    // r/frontend
    const fetchFrontEnd = fetch("https://www.reddit.com/r/frontend.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))

    // r/css
    const fetchCSS = fetch("https://www.reddit.com/r/css.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))

    // r/javascript
    const fetchJavascript = fetch("https://www.reddit.com/r/javascript.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))

    // r/jquery
    const fetchJQuery = fetch("https://www.reddit.com/r/jquery.json?")
        .then(resp => resp.json())

    // r/webdevtutorials
    const fetchWebDevTutorials = fetch("https://www.reddit.com/r/WebdevTutorials.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data'))


    Promise.all([fetchWebDev, fetchWebDesign, fetchFrontEnd, fetchCSS, fetchJavascript, fetchJQuery, fetchWebDevTutorials])
        .then((values) => {

            let combined = [];
            let allPosts = [];

            values.forEach(item => {
                combined.push(...item.data.children)

            });
            combined.forEach(item => {
                let post = item.data;
                allPosts.push(post)
            });

            console.log(allPosts)

            // Sort by date

            const sortedByDate = allPosts.sort(function(a, b) {
                return b.created - a.created;
            });



            updateView(sortedByDate)
        });

};


/*
Convert UNIX timestamp into regular format
 */
const convertTimestamp = function convertTimestamp(timestamp) {
    let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = (d.getFullYear().toString().substr(2, 2)),
        mm = (d.getMonth() + 1), // Months are zero based. Add leading 0.
        dd = d.getDate(), // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
        ampm = 'am',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'pm';
    } else if (hh === 12) {
        h = 12;
        ampm = 'pm';
    } else if (hh === 0) {
        h = 12;
    }

    time = `${h}:${min}${ampm} ${dd}/${mm}/${yyyy}`;
    return time;

};


// Extracts hostname from URL
const getHostname = function(href) {
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

    for (let i = 0; i < sortedByDate.length; i++) {

        const endMark = document.getElementById('content-end-mark');
        let time = convertTimestamp(sortedByDate[i].created);
        let thumbnail;
        let numCommentsText;
        let cardsArr;

        if (sortedByDate[i].preview && sortedByDate[i].preview.images[0].resolutions && sortedByDate[i].preview.images[0].resolutions[2]) {
            thumbnail = `<img class="lazyload reddit-card__thumbnail" src="${sortedByDate[i].preview.images[0].resolutions[2].url}">`;
        } else {
            thumbnail = "";
        }
        let card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add(`reddit-card-${(sortedByDate[i].subreddit).toLowerCase()}`);

        // Remove the 's' if comment number is one
        if (sortedByDate[i].num_comments === 1) {
            numCommentsText = `${sortedByDate[i].num_comments} comment`;
        } else {
            numCommentsText = `${sortedByDate[i].num_comments} comments`
        }

        let html = `<div class="reddit-card__subreddit subreddit-${(sortedByDate[i].subreddit).toLowerCase()}">r/${sortedByDate[i].subreddit}</div>
                      <figure class="reddit-card__thumbnail-title-wrapper">
                        <a href="${sortedByDate[i].url}" target="_blank">
                        <div class="reddit-card__thumbnail-wrapper">${thumbnail}
                        </div>
                        </a>

                      <div class="reddit-card__post-title"><a href="${sortedByDate[i].url}" target="blank">
                      ${sortedByDate[i].title}</a></div>
                      </figure>
                      <div class="card-footer">
                      <div> 
                      <span class="short-url">${getHostname(sortedByDate[i].url)}</span> 
                        <span class="post-comments">
                          <a href="http://reddit.com/${sortedByDate[i].permalink}" target="blank">
                          ${numCommentsText}</a>
                        </span>     
                      </div>
                        <time class="timestamp">${time}</time>

                      </div>`
        card.innerHTML = html;
        $('#loading').hide();
        $('.reddit-content').hide().append(card).fadeIn(500);
        endMark.style.display = 'block';
    }

    checkVisible();

}



// Debounce

function debounce(func, wait = 25, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }
    };
};


// Check whether cards are visible on load and animate them in



// Check which cards are visible on scroll

function checkVisible(e) {
    $('.reddit-card').each(function() {

        let scrollInAt;
        if (window.scrollY < 10) {
            scrollInAt = window.innerHeight;
        } else {
            scrollInAt = window.scrollY + window.innerHeight - (window.innerHeight * 0.25);
        }
        let isShowing = scrollInAt > this.offsetTop;
        let isNotShowing = window.scrollY < scrollInAt;
        let scrolled = window.scrollY > 10;

        if (scrolled && isShowing && isNotShowing) {
            this.classList.add('animate')
        } else if (!scrolled && isShowing && isNotShowing) {
            this.classList.add('animate')
        } else {
            this.classList.remove('animate')
        }
    })
}



window.addEventListener('scroll', checkVisible)



// Filter by subreddit
const toggleModal = function toggleModal() {
    $('.modal').fadeToggle('fast');
    $('.modal').toggleClass('modal--opened');
    $('.filter-overlay').fadeToggle('fast');
};


$('.filter-btn').on('click', toggleModal);
$('.modal__close-btn').on('click', toggleModal);
$('.filter-overlay').on('click', toggleModal);

// Check if no subreddits are selected then show a message
const checkForEmpty = function checkForEmpty() {
    let subreddits = document.getElementsByClassName('filters__list-item');
    let selected = [];

    for (let i = 0; i < subreddits.length; i++) {
        if (subreddits[i].classList.contains('subreddit--selected')) {
            selected.push(subreddits[i])
        }
    }
    if (selected.length === 0) {
        $('.empty-message').fadeIn('fast');
    } else {
        $('.empty-message').fadeOut('fast');
    }
}

// Unselect a subreddit
$('.filters__list-item').on('click', function() {
    $(this).toggleClass('subreddit--selected');
    $(this).toggleClass('subreddit--deselected');
    checkForEmpty()
});



$('.web_design-box').on('click', function(e) {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-web_design').fadeOut('fast');
    } else {
        $('.reddit-card-web_design').fadeIn('fast');
    }
});

$('.frontend-box').on('click', function(e) {

    if ($(e.target).hasClass('subreddit--deselected')) {
        $('.reddit-card-frontend').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-frontend').fadeIn('fast');
        console.log('selected')
    }
});

$('.webdev-box').on('click', function() {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdev').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-webdev').fadeIn('fast');
        console.log('selected')
    }
});

$('.css-box').on('click', function() {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-css').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-css').fadeIn('fast');
        console.log('selected')
    }
});

$('.javascript-box').on('click', function() {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-javascript').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-javascript').fadeIn('fast');
        console.log('selected')
    }
});

$('.jquery-box').on('click', function() {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-jquery').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-jquery').fadeIn('fast');
        console.log('selected')
    }
});

$('.webdevtutorials-box').on('click', function() {

    if ($(this).hasClass('subreddit--deselected')) {
        $('.reddit-card-webdevtutorials').fadeOut('fast');
        console.log('not selected')
    } else {
        $('.reddit-card-webdevtutorials').fadeIn('fast');
        console.log('selected')
    }
});



// Scroll progress bar
$(window).scroll(function() {
    let scrolled = $(document).height() - $(window).height();

    let scrolledTotal = ($(window).scrollTop() / scrolled * 100).toFixed(0);
    $('#scrolled-bar').css('width', `${scrolledTotal}%`);
    if (scrolledTotal > 2) {
        $('#back-to-top').fadeIn('fast');
    } else {
        $('#back-to-top').fadeOut('fast');
    }
});

getData();