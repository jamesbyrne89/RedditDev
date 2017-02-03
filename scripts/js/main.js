    const postsArr = []; 
    let unix;
    let html;
    let redditCards = [];

function grabJsonData (){
      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {

         for (i=0; i<data.data.children.length; i++){

          postsArr.push(data.data.children[i].data);  
          unix = convertTimestamp(data.data.children[i].data.created);
      if (typeof data.data.children[i].data.preview !== 'undefined' &&
                    typeof data.data.children[i].data.preview.images[0].resolutions[2] !== 'undefined') {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
        }
else {
  thumbnail = "";
}

         }
    }

      )
      .success(function() {  })
      .error(function() { alert("error"); })
      .complete(function() { console.log('Got r/WebDev data'); 
      });


$('.reddit-card').sort(function (a, b) {
console.log('sorting');
      var contentA =parseInt( $(a).attr('data-timestamp'));
      var contentB =parseInt( $(b).attr('data-timestamp'));
      return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
   });

   
// Grab r/web_design data
            $.getJSON(
        "http://www.reddit.com/r/web_design.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        
        if (typeof data.data.children[i].data.preview !== 'undefined' &&
                    typeof data.data.children[i].data.preview.images[0].resolutions[2] !== 'undefined') {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
        }
        else {
          thumbnail = "";
        }

 
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/web_design data"); });


// Grab r/CSS data

                 $.getJSON(
        "http://www.reddit.com/r/css.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  
        if (typeof data.data.children[i].data.preview !== 'undefined' &&
                    typeof data.data.children[i].data.preview.images[0].resolutions[2] !== 'undefined') {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}


         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/CSS data"); });



// Grab r/Javascript data

                       $.getJSON(
        "http://www.reddit.com/r/javascript.json?raw_json=1",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  
        unix = convertTimestamp(data.data.children[i].data.created);
              if (typeof data.data.children[i].data.preview !== 'undefined' &&
                    typeof data.data.children[i].data.preview.images[0].resolutions[2] !== 'undefined') {
          
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
  thumbnail = "";
}


         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/javascript data"); });



// Grab r/jQuery data
                       $.getJSON(
        "http://www.reddit.com/r/jquery.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        postsArr.push(data.data.children[i].data);  
    if (typeof data.data.children[i].data.preview !== 'undefined' &&
                    typeof data.data.children[i].data.preview.images[0].resolutions[2] !== 'undefined') {
          unix = convertTimestamp(data.data.children[i].data.created);
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
        }
        else {
          thumbnail = "";
        }

 
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/jQuery data"); });


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
placeIntoHtml(postsArr);

};

grabJsonData();


function placeIntoHtml(arr) {
  $.each(arr,function(i, value){
    console.log(arr);
  console.log('index: ' + i + ',value: ' + value);
});
};



