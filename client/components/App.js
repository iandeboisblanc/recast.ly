class App extends React.Component {

  constructor() {
    super()
  
    this.state = {
      currentVideo: window.exampleVideoData[0],
      currentVideoList: window.exampleVideoData
    }
  }

  onVideoListSelect(videoObj) {
    this.setState({
      currentVideo: videoObj,
      currentVideoList: window.exampleVideoData 
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer videoObj={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videoListObj={this.state.currentVideoList} onVideoListSelect={this.onVideoListSelect.bind(this)} />
        </div>
      </div>
    )
  }
}


window.App = App;
