    const postsArr = [];
    
    /*
    Fetch all data from the Reddit server
     */
    (function fetchData() {

    let completed = 0;

    // Grab r/web_design data
    $.getJSON(
            "https://www.reddit.com/r/webdev.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);
                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed == 7) {
                checkCompleted();

            }
        });


    // Grab r/web_design data
    $.getJSON(
            "https://www.reddit.com/r/web_design.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);
                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });


    // Grab r/Frontend data
    $.getJSON(
            "https://www.reddit.com/r/frontend.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);
                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });


    // Grab r/CSS data
    $.getJSON(
            "https://www.reddit.com/r/css.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);


                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });


    // Grab r/Javascript data
    $.getJSON(
            "https://www.reddit.com/r/javascript.json?raw_json=1",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);


                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });



    // Grab r/jQuery data
    $.getJSON(
            "https://www.reddit.com/r/jquery.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);
                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });

    // Grab r/WebdevTutorials data
    $.getJSON(
            "https://www.reddit.com/r/WebdevTutorials.json?jsonp=?",
            function foo(data) {
                for (i = 0; i < data.data.children.length; i++) {
                    postsArr.push(data.data.children[i].data);
                }
            }
        )
        .success(function() {})
        .error(function() {
            alert("There was a problem fetching JSON data");
        })
        .complete(function() {
            completed++;
            if (completed === 7) {
                checkCompleted();
            }
        });

})();
    /*
    Convert UNIX timestamp into regular format
     */
    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
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
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM  
        time = h + ':' + min + ampm + " " + dd + "/" + mm + '/' + yyyy;
        return time;

    };



    /*
    Place into HTML
     */
    function checkCompleted() {
        postsArr.sort(function(a, b) {
            return b.created - a.created;
        });
        for (i = 0; i < postsArr.length; i++) {
            time = convertTimestamp(postsArr[i].created);
            if (
                typeof postsArr[i].preview !== 'undefined' &&
                typeof postsArr[i].preview.images[0].resolutions !== 'undefined' &&
                typeof postsArr[i].preview.images[0].resolutions[2] !== 'undefined') {

                thumbnail = `<img class="lazyload reddit-card__thumbnail" src="${postsArr[i].preview.images[0].resolutions[2].url}">`;
            } else {
                thumbnail = "";
            }
            let html = `<div class="reddit-card ${postsArr[i].subreddit}" data-timestamp="${postsArr[i].created}">
                      <div class="reddit-card__subreddit ${postsArr[i].subreddit}">r/${postsArr[i].subreddit}</div>
                      <div class="reddit-card__thumbnail-title-wrapper">
                        <a href="${postsArr[i].url}" target="_blank">
                        <div class="reddit-card__thumbnail-wrapper">${thumbnail}
                        </div>
                        </a>

                      <div class="reddit-card__post-title"><a href="${postsArr[i].url}" target="blank">
                      ${postsArr[i].title}</a></div>
                      </div>
                      <div class="card-footer">        
                        <span class="post-comments">
                          <a href="http://reddit.com/${postsArr[i].permalink}" target="blank">
                          ${postsArr[i].num_comments} comments</a>
                        </span>
                        <time class="timestamp">${time}</time>
                      </div>
                    </div>`

            $('#reddit-content').hide().append(html).fadeIn(500);
            $('#loading').hide();

        }
    };

    // Filter by subreddit

    $('.filters__title').on('click', function() {
        $('.expand-icon').toggleClass('expand-icon--opened');
        $('.filters__list').toggleClass('filters__list--opened');
    });


    $('.web_design-box').change(function() {
        if ($(this).is(':checked')) {
            $('.web_design').fadeIn('fast');
        } else {
            $('.web_design').fadeOut('fast');
        }
    });

    $('.frontend-box').change(function() {
        if ($(this).is(':checked')) {
            $('.Frontend').fadeIn('fast');
        } else {
            $('.Frontend').fadeOut('fast');
        }
    });

    $('.webdev-box').change(function() {
        if ($(this).is(':checked')) {
            $('.webdev').fadeIn('fast');
        } else {
            $('.webdev').fadeOut('fast');
        }
    });

    $('.css-box').change(function() {
        if ($(this).is(':checked')) {
            $('.css').fadeIn('fast');
        } else {
            $('.css').fadeOut('fast');
        }
    });

    $('.javascript-box').change(function() {
        if ($(this).is(':checked')) {
            $('.javascript').fadeIn('fast');
        } else {
            $('.javascript').fadeOut('fast');
        }
    });

    $('.jquery-box').change(function() {
        if ($(this).is(':checked')) {
            $('.jquery').fadeIn('fast');
        } else {
            $('.jquery').fadeOut('fast');
        }
    });

    $('.webdevtutorials-box').change(function() {
        if ($(this).is(':checked')) {
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
        }
        else {
            $('#back-to-top').fadeOut('fast');
        }
    });