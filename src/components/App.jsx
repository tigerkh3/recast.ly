import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYoutube.js';
import Search from './Search.js';

const { useState, useEffect } = React;

var App = () => {
  // set up a state for the list of all the "data"
  const [list, setList] = useState([]);
  // set up state for currentVideo that we want videoPlayer to render
  const [currentVid, setCurrentVid] = useState(null);
  // saves filtered list based on search bar query string
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    // set-up functionality: change list initial state to YT data (search Youtube)
    searchYouTube('').then(result => {
      setList(result);
      setCurrentVid(result[0]);
    });
    // clean-up functionality: on cleanup do we want to empty our list again ??
    // return () => {};
  }, [list]);

  var handleClick = function(e) {
    // use filter to reduce array of all video data into single video object in an array
    var currVid = list.filter((vid) => vid.id.videoId === e.target.id);
    console.log('handle click log', currVid);
    // call on setCurrentVid with arg as the object in side of currVid array to update the state
    setCurrentVid(currVid[0]);
  };

  var handleSubmit = function(e) {
    e.preventDefault();
    var queryStr = e.target.value;

    var test1 = list.filter((video) => video.snippet.title.split(' ').includes(queryStr));
    setFiltered([...test1]);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSubmit={handleSubmit} search={searchYouTube} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {currentVid === null ? <VideoPlayer video={exampleVideoData[0]} /> : <VideoPlayer video={currentVid} />}
        </div>
        <div className="col-md-5">
          {filtered === null ? <VideoList handleClick={handleClick} videos={list} /> : <VideoList handleClick={handleClick} videos={filtered} />}
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly define
export default App;