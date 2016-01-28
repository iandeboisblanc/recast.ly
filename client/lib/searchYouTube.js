var searchYouTube = (options, callback) => {
  console.log('search yoooo');

  // parse the object here


  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: options,
    success: function(data) {
      console.log('success', data);
      callback(data);
    },
    failure: function() {
      console.log('You\'re a failure');
    }

  });

};

var throttledSearchYouTube = _.throttle(searchYouTube,400);

window.searchYouTube = throttledSearchYouTube;