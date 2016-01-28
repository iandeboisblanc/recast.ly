var VideoList = () => (
  <div className="video-list media">
    { window.exampleVideoData.map( (videoObj) => ( <VideoListEntry videoObj={videoObj} /> )) }
  </div>
);

window.VideoList = VideoList;
