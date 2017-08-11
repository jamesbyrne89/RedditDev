

/**
 *  Initialise a store to hold the API data
 */

const dataStore = (function dataStore() {

    let _data = {};

    const _getData = function _getData() {
        return _data;
    }

    const _updateData = function _updateData(input) {
        _data = input;
    }

    return {
        setData: _updateData,
        getData: _getData
    }

})();


/*
Fetch all data from the Reddit server
 */
const init = function init() {

    // r/webdev
    const fetchWebDev = fetch("https://www.reddit.com/r/webdev.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/webdev'));

    // r/web_design
    const fetchWebDesign = fetch("https://www.reddit.com/r/web_design.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/web_design'));

    // r/frontend
    const fetchFrontEnd = fetch("https://www.reddit.com/r/frontend.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/frontend'));

    // r/css
    const fetchCSS = fetch("https://www.reddit.com/r/css.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/css'));

    // r/javascript
    const fetchJavascript = fetch("https://www.reddit.com/r/javascript.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/javascript'));

    // r/jquery
    const fetchJQuery = fetch("https://www.reddit.com/r/jquery.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/jquery'));

    // r/webdevtutorials
    const fetchWebDevTutorials = fetch("https://www.reddit.com/r/WebdevTutorials.json?")
        .then(resp => resp.json())
        .catch((err) => console.error('Error fetching data from r/webdevtutorials'));


    Promise.all([fetchWebDev, fetchWebDesign, fetchFrontEnd, fetchCSS, fetchJavascript, fetchJQuery, fetchWebDevTutorials])
        .then((values) => {

            let combined = [];
            let allPosts = [];

            values.forEach(item => {
                combined.push(...item.data.children);

            });
            combined.forEach(item => {

                let post = item.data;

                allPosts.push(post);
            });
            // Sort by date

            const sortedByDate = allPosts.sort(function(a, b) {
                return b.created - a.created;

            });
            // Update the datastore with the API data fetched from the server
            dataStore.setData(sortedByDate);

            // Add data to the view
            updateView(sortedByDate);
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

/**
 * Convert the UNIX timestamp provided by the API into human-readable format
 */

function getTimeAgo(timestamp) {
    let d = new Date() // Convert the passed timestamp to milliseconds
    let tNowS = Math.floor(d.getTime() / 1000);
    let seconds = tNowS - timestamp;
    let mins = Math.floor(seconds / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor((seconds / 3600) / 24);

    if (days >= 7) {
        return 'A week ago'
    } else if (seconds > 2 * 24 * 3600) {
        return Math.floor(days) + 'd ago'
    } else if (seconds > 24 * 3600) {
        return 'Yesterday'
    } else if (mins > 60) {
        return hours + 'h ago';
    } else if (2 < mins < 60) {
        return mins + 'm ago';
    } else {
        return mins + 'Just now';
    }
};


/*
Place into HTML
 */

  	const redditContent = document.getElementById('card-container');
	const contentInfo = document.getElementById('content-info');
	const loadingSpinner = document.getElementById('loading');

function updateView(data) {

    loadingSpinner.style.display = 'block';
  
    // Clear content from card container
    contentInfo.innerHTML = '';
    redditContent.innerHTML = '';

    // Add an end mark icon
    const endMark = document.createElement('img');
    endMark.classList.add('content-end-mark');
    endMark.setAttribute('src', '../../../assets/images/reddit-icon-32x32.png');


let combinedCards = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {

        let time = getTimeAgo(data[i].created_utc);
        let thumbnail;
        let numCommentsText;
        
        // Check whether a thumbnail is available
        if (data[i].preview && data[i].preview.images[0].resolutions && data[i].preview.images[0].resolutions[2]) {
            thumbnail = `<a href="${data[i].url}" target="_blank">
                        <div class="reddit-card__thumbnail-wrapper ${(data[i].subreddit).toLowerCase()}-overlay"><img class="lazyload reddit-card__thumbnail" src="${data[i].preview.images[0].resolutions[2].url}">
                        </div>
                        </a>`;
        } else {
            thumbnail = "";
        }
 

        // Create individual cards
        let card = document.createElement('div');
        card.className = 'reddit-card';
        card.classList.add(`reddit-card-${(data[i].subreddit).toLowerCase()}`);
        card.setAttribute('data-sr', (data[i].subreddit).toLowerCase());

        // Remove the 's' if comment number is one
        if (data[i].num_comments === 1) {
            numCommentsText = `${data[i].num_comments} comment`;
        } else {
            numCommentsText = `${data[i].num_comments} comments`;
        }

        // Build cards
        card.innerHTML = `<div class="reddit-card-inner">
        <div class='subreddit-wrapper'>
            <h3 class="reddit-card__subreddit subreddit-${(data[i].subreddit).toLowerCase()}">r/${data[i].subreddit}</h3>
        </div>            
                      <div class="reddit-card__post-title"><a href="${data[i].url}" target="blank">
                      ${data[i].title}</a></div>


                      <div class="card-footer">
                      <span class="short-url">${getHostname(data[i].url)}</span><span class='bar'>|</span> 
                      <time class="timestamp">${time}</time></span><span class='bar'>|</span>
                        <span class="post-comments">
                          <a href="http://reddit.com/${data[i].permalink}" target="blank">
                          ${numCommentsText}</a>
                        </span>     
                      </div></div>`
        
        combinedCards.appendChild(card);

    };
    loadingSpinner.style.display = 'none';
    // Add cards to the container element
    redditContent.appendChild(combinedCards);

    // Add an end mark to the bottom of the container div
    redditContent.appendChild(endMark);
    endMark.style.display = 'block';

    // Check that newly loaded cards are in view
    checkVisible();

};

const showMessage = (function showMessage() {

    // Set up messages
    const _emptyMessage = document.createElement('div');
    _emptyMessage.className = 'empty-message';
    _emptyMessage.innerHTML = "<h3 class='empty-message__header'>Nothing to see here.</h3><span class='empty-message__body'>Please use the filter button to select which subreddits to display</span>";

    // Create a 'clear search' button 
    
    const _clearSearchBtn = document.createElement('button');
    _clearSearchBtn.className = 'clear-search';
    _clearSearchBtn.innerHTML = 'Clear search';
    _clearSearchBtn.addEventListener('click', function(){
        init();
    $('.search-wrapper').removeClass('search-wrapper--opened');
    $('.search__close-btn').fadeOut('slow');
    $('.search').removeClass('search--opened');
    });

    const _searchResult = document.createElement('div');


    const _empty = function _empty() {
        contentInfo.innerHTML = _emptyMessage;
    }

    const _search = function _search(term) {
        _searchResult.className = 'search-term';
        _searchResult.innerHTML = `Results for "${term}":`;
        _searchResult.appendChild(_clearSearchBtn);
         contentInfo.appendChild(_searchResult);          
    }

    const _noResults = function __noResults(term) {
        _searchResult.className = 'search-term';
        _searchResult.innerHTML = `No results for "${term}".`;
        _searchResult.appendChild(_clearSearchBtn);
         contentInfo.appendChild(_searchResult);     
    }

    const _clear = function _clear() {
        contentInfo.innerHTML = '';
    }

    return {
        empty: _empty,
        search: _search,
        noResults: _noResults,
        clear: _clear
    }

})();



// Debounce scroll function to prevent too many triggers

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




// Check which cards are visible on scroll

function checkVisible(e) {
const redditCards = document.querySelectorAll('.reddit-card');
    redditCards.forEach(function(card) {

        let scrollInAt;
        if (window.scrollY < 0) {
            scrollInAt = window.innerHeight;
        } else {
            scrollInAt = window.scrollY + window.innerHeight - (window.innerHeight * 0.1);
        }
        let isShowing = scrollInAt > card.offsetTop;
        let isNotShowing = window.scrollY < scrollInAt;
        let scrolled = window.scrollY > 10;

        if (scrolled && isShowing && isNotShowing) {
            card.classList.add('animate');
        } else if (!scrolled && isShowing && isNotShowing) {
            card.classList.add('animate');
        } else {
            card.classList.remove('animate');
        }
    })
}


/**
 * Sticky header that slides into view only when the user scrolls up
 */

function stickyHeader() {
    let previous = window.scrollY;
    window.addEventListener('scroll', function() {
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


// Event listeners for scroll events
window.addEventListener('scroll', checkVisible);
window.addEventListener('scroll', stickyHeader);



// Close and open filters list modal
const toggleModal = function toggleModal() {
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

const filterOverlay = document.getElementById('filter-overlay');

let filterOverlayTap = new Hammer(filterOverlay);

filterOverlayTap.on("tap", function(ev) {
    toggleModal();
});



// Check if no subreddits are selected then show a message
const visibleSubreddits = (function visibleSubreddits() {

    const _checkVisible = function _checkVisible() {
        let subreddits = document.getElementsByClassName('filters__list-item');
        let selected = [];
        for (let i = 0; i < subreddits.length; i++) {
            if (subreddits[i].classList.contains('subreddit--selected')) {
                selected.push(subreddits[i])
            };
        };
        return selected.length;
    };

    const _updateVisible = function _updateVisible() {
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
        };
        return _checkVisible();
    };

    return {
        checkVisible: _checkVisible,
        updateVisible: _updateVisible
    };
})();



function removeSubreddit() {
    let subReds = document.getElementsByClassName('filters__list-item')
    for (let i = 0; i < subReds.length; i++) {
        subReds[i].classList.remove('subreddit--selected');
        subReds[i].classList.add('subreddit--deselected');
        handleShow(subReds[i], subReds[i].getAttribute('data-sr'));
    }
}

function addSubreddit() {
    let subReds = document.getElementsByClassName('filters__list-item')
    for (let i = 0; i < subReds.length; i++) {
        subReds[i].classList.add('subreddit--selected');
        subReds[i].classList.remove('subreddit--deselected');
        handleShow(subReds[i], subReds[i].getAttribute('data-sr'));
    }
}

/**
 * Toggles the 'select all' button
 */

$('.all-filter').on('click', function(e) {

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
    if (target.classList.contains('subreddit--deselected')) {
        $(`.reddit-card-${sr}`).hide();
    } else {
        $(`.reddit-card-${sr}`).fadeIn('fast');
    };
    visibleSubreddits.updateVisible();
};



/**
 *  Add event handlers to all subreddits in list to handle hiding and showing
 */

const webDesignFilterBtn = document.querySelector('.web_design-filter');
const frontendFilterBtn = document.querySelector('.frontend-filter');
const webDevFilterBtn = document.querySelector('.webdev-filter');
const cssFilterBtn = document.querySelector('.css-filter');
const javascriptFilterBtn = document.querySelector('.javascript-filter');
const jqueryFilterBtn = document.querySelector('.jquery-filter');
const webdevTutorialsFilterBtn = document.querySelector('.webdevtutorials-filter');
const filterList = document.querySelector('.filters__list');



webDesignFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'web_design');
    
});

frontendFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected')
    handleShow(this, 'frontend');
});

webDevFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'webdev');
    
});

cssFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'css');
});

javascriptFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'javascript');
});

jqueryFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'jquery');
});

webdevTutorialsFilterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    this.classList.toggle('subreddit--selected');
    this.classList.toggle('subreddit--deselected');
    handleShow(this, 'webdevtutorials');
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

const backToTopBtn = document.getElementById('back-to-top');

let backToTopTap = new Hammer(backToTopBtn);

backToTopTap.on("tap", function(ev) {
    window.scrollTo(0, 0);
});



/**
 * [isSearched description]
 * @param  {[type]}  searchTerm [description]
 * @return {Boolean}            [description]
 */
function isSearched(searchTerm) {
    return function(item) {
        return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    };
};

const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchCloseBtn = document.getElementById('search-close-btn');

let searchTap = new Hammer(searchBtn);

searchTap.on("tap", function(ev) {
     $('.search-wrapper').toggleClass('search-wrapper--opened');
    $('.search__close-btn').fadeIn('fast');
    $('.search').toggleClass('search--opened');
    document.getElementById('search').focus();
});

let searchCloseTap = new Hammer(searchCloseBtn);

searchCloseTap.on("tap", function(ev) {
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

search.addEventListener('change', function(e) {
    let filtered;
    if (e.target.value.length > 0 && typeof e.target.value === 'string') {
        filtered = dataStore.getData().filter(isSearched(e.target.value));
        updateView(filtered);
        showMessage.search(e.target.value);      
     if (filtered.length === 0) {
        showMessage.noResults(e.target.value);
     };
     e.target.value = '';
    };
});


/**
 * Button that toggles between grid and row view
 */

(function switchLayout() {
   const viewBtn = document.getElementById('view-btn');
   
   viewBtn.addEventListener('click', function() {
    if (this.classList.contains('grid')) {
        this.classList.add('rows');
        this.classList.remove('grid');
        this.innerHTML= `View<i class='fa fa-list'>`;
    }
    else {
        this.classList.remove('rows');
        this.classList.add('grid');
        this.innerHTML= `View<i class='fa fa-th-large'>`;
    }
    redditContent.classList.toggle('card-container--rows');
   });


})();


init();









