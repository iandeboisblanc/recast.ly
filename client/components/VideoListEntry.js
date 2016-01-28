var VideoListEntry = (props) => {debugger; return(
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" 
        src={props.videoObj.snippet.thumbnails.default.url} 
        onClick={props.onVideoListSelect.bind(null,props.videoObj)} alt="" 
      />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"
        onClick={props.onVideoListSelect.bind(null,props.videoObj)}>
        {props.videoObj.snippet.title}
      </div>
      <div className="video-list-entry-detail">{props.videoObj.snippet.description}</div>
    </div>
  </div>
)};

window.VideoListEntry = VideoListEntry;
