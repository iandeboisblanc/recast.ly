var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer videoObj={window.exampleVideoData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList />
    </div>
  </div>
);


window.App = App;
