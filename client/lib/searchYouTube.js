var searchYouTube = (options, callback) => {
  console.log('search yoooo');

  // parse the object here

  options = options || {
    query: 'dogs',
    max: 5,
    key: window.YOUTUBE_API_KEY ,
    videoEmbeddable: true
  };

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: options,
    success: function(data) {
      console.log('success');
      callback(data);
    },
    failure: function() {
      console.log('You\'re a failure');
    }

  });

};

window.searchYouTube = searchYouTube;