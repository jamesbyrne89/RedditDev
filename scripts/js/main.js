      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {
         for (i=0; i<data.data.children.length; i++){
                  if (data.data.children[i].data.thumbnail !== ('self' || 'default')) {
          thumbnail = `<img class="post-thumb" src="${data.data.children[i].data.thumbnail}">`;
        }
        else {
          thumbnail = `No thumbnail available`;
        }

          $('#reddit-content').append(`<div class="reddit-card">
            <div class="post-type--reddit">r/WebDev</div>
          <div class="post-thumb-wrapper">${thumbnail}</div>
        <div class="post-title"><a href="${data.data.children[i].data.url}" target="blank">
        ${data.data.children[i].data.title}</a></div>
        <div class="post-comm-num"><a href="http://reddit.com/${data.data.children[i].data.permalink}" target="blank">
        ${data.data.children[i].data.num_comments} comments</a></div>
        </div>`

        );
 console.log(data.data.children[i].data);
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("complete"); });