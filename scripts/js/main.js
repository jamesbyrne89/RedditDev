      $.getJSON(
        "http://www.reddit.com/r/webdev.json?jsonp=?",
        function foo(data)
        {
         for (i=0; i<data.data.children.length; i++){
          $('#reddit-content').append(`<div class="reddit-card">
        <div class="post-title">${data.data.children[i].data.title}</div></div>`);
            console.log(data.data.children[i].data.title);
         }
        }
      )
      .success(function() { })
      .error(function() { alert("error"); })
      .complete(function() { console.log("complete"); });