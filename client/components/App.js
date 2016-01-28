class App extends React.Component {

  constructor() {
    super()
  
    this.state = {
      currentVideo: {},
      currentVideoList: {}
    }
  }

  onVideoListSelect(videoObj) {
    this.setState({
      currentVideo: videoObj
    });
  }

  onSearchValueChange(event) {
    console.log('searching...',event.target.value);
    var optionsObj = {
      q:event.target.value,
      max: 5,
      key: YOUTUBE_API_KEY,
      videoembeddable: true,
      part:"snippet"
    };

    var callback = function(data) {
      this.setState({
        currentVideoList: data.items
      });
    };

    window.searchYouTube(optionsObj, callback.bind(this));
  }

  render() {

    var videolist = <div/>;
    var videoplayer = <div />

    if(this.state.currentVideo.snippet) {
      videoplayer = <VideoPlayer videoObj={this.state.currentVideo} />
    }

    if(this.state.currentVideoList[0]) {
      videolist =  <VideoList videoListObj={this.state.currentVideoList} 
                    onVideoListSelect={this.onVideoListSelect.bind(this)} />
    }

    return (
      <div>
        <Nav onSearchValueChange={this.onSearchValueChange.bind(this)} />
        <div className="col-md-7">
          {videoplayer}
        </div>
        <div className="col-md-5">
          {videolist}
        </div>
      </div>
    )
  }
}


window.App = App;
