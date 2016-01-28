var VideoList = (props) => (
  <div className="video-list media">
    { props.videoListObj.map( (videoObj) => 
        ( <VideoListEntry videoObj={videoObj} onVideoListSelect={props.onVideoListSelect} /> )) }
  </div>
);

window.VideoList = VideoList;
