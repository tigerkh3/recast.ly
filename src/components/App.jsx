import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYoutube.js';
import Search from './Search.js';
// import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

const { useState, useEffect } = React;

var App = () => {
  // creating hook here

  // set up a state for the list of all the "data"
  // at this point we're doing it for the hard coded exampleVideoData that is static
  const [list, setList] = useState([]);
  // set up state for currentVideo that we want videoPlayer to render
  const [currentVid, setCurrentVid] = useState(null);

  // on initial render, fetch YT data and setList()
  // create new state, filteredVids that will filter list based on user query string
  // add filteredVids to useEffect's dependencies so that on every change to filteredVids,
  // we will re-fetch newest list data from YT
  // set up handleSubmit func that will listen on Search Bar + filter list based on user query and pass it to VideoList component

  // =======================================
  // Starting to set up search bar hooks
  // =======================================
  const [filtered, setFiltered] = useState(null); // initial filtered list should be empty arr or entire list??

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
    // to handle a click we need to know what video was clicked
    // then update current video url and communicate that info to VideoPlayer
    // e.target.id is going to be the url.

    // use filter to reduce array of all video data into single video object in an array
    var currVid = list.filter((vid) => vid.id.videoId === e.target.id);
    console.log('handle click log', currVid);
    // call on setCurrentVid with arg as the object in side of currVid array to update the state
    setCurrentVid(currVid[0]);
    // console.log('curr vid', currentVid);
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