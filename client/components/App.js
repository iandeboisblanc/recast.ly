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
      currentVideo: videoObj,
      currentVideoList: window.exampleVideoData 
    });
  }

  onSearchValueChange(event) {
    // call ajax here
    // on success...
    console.log('searching...',event.target.value);
      // this.setState({
      //   currentVideoList:string  
      // });
  }

  render() {

    var videolist = <div/>;
    var videoplayer = <div />

    if(this.state.currentVideo.snippet) {
      videoplayer = <VideoPlayer videoObj={this.state.currentVideo} />
    }

    if(this.state.currentVideoList[0]) {
      videolist =  <VideoList videoListObj={this.state.currentVideoList} onVideoListSelect={this.onVideoListSelect.bind(this)} />
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
