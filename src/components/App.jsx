import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
// import searchYouTube from '../lib/searchYoutube.js';
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

const { useState, useEffect } = React;

var App = () => {
  // creating hook here

  // set up a state for the list of all the "data"
  // at this point we're doing it for the hard coded exampleVideoData that is static
  const [list, setList] = useState([]);
  // set up state for currentVideo that we want videoPlayer to render
  const [currentVid, setCurrentVid] = useState(exampleVideoData[0]);

  useEffect(() => {
    // set state to YT data (search Youtube)
    // update list state with results of search
    // then in child component we can iterate over list var
  }, []);

  var handleClick = function(e) {
    // to handle a click we need to know what video was clicked
    // then update current video url and communicate that info to VideoPlayer
    // e.target.id is going to be the url.

    // use filter to reduce array of all video data into single video object in an array
    var currVid = list.filter((vid) => vid.id.videoId === e.target.id);
    // call on setCurrentVid with arg as the object in side of currVid array to update the state
    setCurrentVid(currVid[0]);
    // console.log('Handle Click log', currVid);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVid}/>
        </div>
        <div className="col-md-5">
          <VideoList search={searchYouTube} handleClick={handleClick} videos={exampleVideoData} />
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly define
export default App;