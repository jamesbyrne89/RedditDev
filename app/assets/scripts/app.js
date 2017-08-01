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

        let time = convertTimestamp(sortedByDate[i].created);
        let thumbnail;
        let numCommentsText;

        if (sortedByDate[i].preview && sortedByDate[i].preview.images[0].resolutions && sortedByDate[i].preview.images[0].resolutions[2]) {
            thumbnail = `<img class="lazyload reddit-card__thumbnail" src="${sortedByDate[i].preview.images[0].resolutions[2].url}">`;
        } else {
            thumbnail = "";
        }
        let card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add(sortedByDate[i].subreddit);

        // Remove the 's' if comment number is one
        if (sortedByDate[i].num_comments === 1) {
            numCommentsText = `${sortedByDate[i].num_comments} comment`;
        } else {
            numCommentsText = `${sortedByDate[i].num_comments} comments`
        }

        let html = `<div class="reddit-card__subreddit ${sortedByDate[i].subreddit}">r/${sortedByDate[i].subreddit}</div>
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
        $('#reddit-content').hide().append(card).fadeIn(500);
        $('#loading').hide();

    }
}

// Filter by subreddit
$('.filter-btn').on('click', function() {
    $('.modal').toggleClass('modal--opened');
});

$('.select-all').on('click', function() {
    if ($(this).prop('checked')) {
        $('.checkbox').prop('checked', true)
        $('.web_design-box').trigger('change')
        $('.frontend-box').trigger('change')
        $('.webdev-box').trigger('change')
        $('.css-box').trigger('change')
        $('.javascript-box').trigger('change')
        $('.jquery-box').trigger('change')
        $('.webdevtutorials-box').trigger('change')
    } else {
        $('.checkbox').prop('checked', false)
        $('.web_design-box').trigger('change')
        $('.frontend-box').trigger('change')
        $('.webdev-box').trigger('change')
        $('.css-box').trigger('change')
        $('.javascript-box').trigger('change')
        $('.jquery-box').trigger('change')
        $('.webdevtutorials-box').trigger('change')
    }
});


$('.web_design-box').change(function() {
    console.log('triggered')
    if ($(this).prop('checked')) {
        $('.web_design').fadeIn('fast');
    } else {
        $('.web_design').fadeOut('fast');
    }
});

$('.frontend-box').change(function() {
    if ($(this).prop('checked')) {
        $('.Frontend').fadeIn('fast');
    } else {
        $('.Frontend').fadeOut('fast');
    }
});

$('.webdev-box').change(function() {
    if ($(this).prop('checked')) {
        $('.webdev').fadeIn('fast');
    } else {
        $('.webdev').fadeOut('fast');
    }
});

$('.css-box').change(function() {
    if ($(this).prop('checked')) {
        $('.css').fadeIn('fast');
    } else {
        $('.css').fadeOut('fast');
    }
});

$('.javascript-box').change(function() {
    if ($(this).prop('checked')) {
        $('.javascript').fadeIn('fast');
    } else {
        $('.javascript').fadeOut('fast');
    }
});

$('.jquery-box').change(function() {
    if ($(this).prop('checked')) {
        $('.jquery').fadeIn('fast');
    } else {
        $('.jquery').fadeOut('fast');
    }
});

$('.webdevtutorials-box').change(function() {
    if ($(this).prop('checked')) {
        $('.WebdevTutorials').fadeIn('fast');
    } else {
        $('.WebdevTutorials').fadeOut('fast');
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