    const postsArr = []; 
    let unix;

      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {

         for (i=0; i<data.data.children.length; i++){
          console.log(data.data.children[i].data)
          postsArr.push(data.data.children[i].data.created);  
          unix = convertTimestamp(data.data.children[i].data.created);
     if (data.data.children && data.data.children.length > 0) {
            lastId = data.data.children[data.data.children.length - 1].data.id;
        } else {
            lastId = undefined;
        }
                   if (data.data.children[i].data.preview !== undefined) {
          
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit webdev">r/WebDev</div>
          <div class="post-thumb-wrapper"><a href="${data.data.children[i].data.url}" target="blank">${thumbnail}</a></div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="bottom-info-wrapper">
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        <div class="timestamp">${unix}</div>
        </div>
        </div>`

        );

         }

    }

      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log(data.data.children[i].data); });

$('.after').click(function () {
    if (lastId) {
        load({
            after: 't3_' + lastId
        });
    }
})



// Grab r/web_design data

            $.getJSON(
        "http://www.reddit.com/r/web_design.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        if (data.data.children[i].data.preview !== undefined) {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit web_design">r/Web_Design</div>
          <div class="post-thumb-wrapper"><a href="${data.data.children[i].data.url}" target="blank">${thumbnail}</a></div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="bottom-info-wrapper">        
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        <div class="timestamp">${unix}</div>
        </div>
        </div>`

        );
          
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/web_design data"); });

                 $.getJSON(
        "http://www.reddit.com/r/css.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        if (data.data.children[i].data.preview !== undefined) {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit css">r/CSS</div>
          <div class="post-thumb-wrapper"><a href="${data.data.children[i].data.url}" target="blank">${thumbnail}</a></div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="bottom-info-wrapper">        
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        <div class="timestamp">${unix}</div>
        </div>
        </div>`

        );

         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/CSS data"); });

                       $.getJSON(
        "http://www.reddit.com/r/javascript.json?raw_json=1",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        unix = convertTimestamp(data.data.children[i].data.created);
              if (data.data.children[i].data.preview !== undefined) {
          
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit javascript">r/Javascript</div>
          <div class="post-thumb-wrapper"><a href="${data.data.children[i].data.url}" target="blank">${thumbnail}</a></div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="bottom-info-wrapper">        
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        <div class="timestamp">${unix}</div>
        </div>
        </div>`

        );
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/javascript data"); });

                       $.getJSON(
        "http://www.reddit.com/r/jquery.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
           if (data.data.children[i].data.preview !== 'undefined') {
          
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit jquery">r/jQuery</div>
          <div class="post-thumb-wrapper">${thumbnail}</div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="bottom-info-wrapper">
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        <div class="timestamp">${unix}</div>
        </div>
        </div>`

        );
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/jQuery data"); });


      function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = (d.getFullYear().toString().substr(2,2)),
    mm = (d.getMonth() + 1),  // Months are zero based. Add leading 0.
    dd = d.getDate(),    // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),   // Add leading 0.
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
  time = h + ':' + min + ampm + " " + dd + "/" + mm + '/' + yyyy ;
  return time;

}


  