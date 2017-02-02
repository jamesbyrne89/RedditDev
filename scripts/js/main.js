    const postsArr = []; 

      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {
         for (i=0; i<data.data.children.length; i++){
          postsArr.push(data.data.children[i].data.created);    
     
         
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
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        </div>`

        );

         }

    }

      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log(data.data.children[i].data); });


            $.getJSON(
        "http://www.reddit.com/r/web_design.json?jsonp=?",
        function foo(data)
        {
       for (i=0; i<data.data.children.length; i++){
        if (data.data.children[i].data.preview !== undefined) {
          
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
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
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
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
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
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
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
           if (data.data.children[i].data.preview !== undefined) {
          
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.preview.images[0].resolutions[2].url}">`;
}
else {
}
          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit jquery">r/jQuery</div>
          <div class="post-thumb-wrapper">${thumbnail}</div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        </div>`

        );
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("Got r/jQuery data"); });

  