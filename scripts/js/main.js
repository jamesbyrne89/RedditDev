    const postsArr = []; 
    let unix;
    let html;
    let redditCards = [];
    let completed = 0;

function grabJsonData (){
      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {

         for (i=0; i<data.data.children.length; i++){

          postsArr.push(data.data.children[i].data); 

         }
    }

      )
      .success(function() {  })
      .error(function() { alert("error"); })
      .complete(function() { console.log('Got r/WebDev data'); 
      completed++;
      if (completed ==5){
        checkCompleted();
      
      }
      });

   
// Grab r/web_design data
            $.getJSON(
        "http://www.reddit.com/r/web_design.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data); 
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/web_design data");
    completed++;
        if (completed ==5){
        checkCompleted();
      }});


// Grab r/CSS data

                 $.getJSON(
        "http://www.reddit.com/r/css.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  


         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/CSS data"); 
        completed++;
          if (completed == 5){
        checkCompleted();
      }});



// Grab r/Javascript data

                       $.getJSON(
        "http://www.reddit.com/r/javascript.json?raw_json=1",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  


         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/javascript data"); 
    completed++;
        if (completed == 5){
        checkCompleted();
      }});



// Grab r/jQuery data
                       $.getJSON(
        "http://www.reddit.com/r/jquery.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/jQuery data");
        completed++; 
        if (completed == 5){
        checkCompleted();
      }});


// Convert UNIX timestamp into regular format

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


};

//   unix = convertTimestamp(postsArr[i].created);

grabJsonData();




function checkCompleted(){
postsArr.sort(function (a, b) {
return a.created - b.created;
   });
  for (i=0; i<postsArr.length;i++){
          if (
            typeof postsArr[i].preview !== 'undefined' &&
              typeof postsArr[i].preview.images[0].resolutions !== 'undefined' &&
                    typeof postsArr[i].preview.images[0].resolutions[2] !== 'undefined') {
         
          thumbnail = `<img class="post-thumb" src="${postsArr[i].preview.images[0].resolutions[2].url}">`;
        }
else {
  thumbnail = "";
}
           html = `<div class="reddit-card" data-timestamp="${postsArr[i].created}">
        <div class="post-type--reddit ${postsArr[i].subreddit}">r/${postsArr[i].subreddit}</div>
      <div class="post-thumb-wrapper"><a href="${postsArr[i].url}" target="blank">${thumbnail}</a></div>
    <div class="post-title"><a href="${postsArr[i].url}" target="blank">
    ${postsArr[i].title}</a></div>
    <div class="bottom-info-wrapper">        
    <div class="post-comm-num"><a href="http://reddit.com/${postsArr[i].permalink}" target="blank">
    ${postsArr[i].num_comments} comments</a></div>
    <div class="timestamp"></div>
    </div>
    </div>`
console.log
       $('#reddit-content').append(html);

  }
}



