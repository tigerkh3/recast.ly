
var VideoList = (props) => (
  <div className="video-list">
    <div>'hi'</div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// APP hierarchy
// APP (we give this our example data as prop)
// Video List (APP gives this our passed down data )
// Video List Entry (Video List hands us a single video to work off of)




































// Strategy ? Which Components should own state?
// Props: Description, video name/length/details
// State: Which video is playing/selected, user likes/dislikes/comments, search bar (video list updates based on user input)

// Home Feed
//   Search Bar
//   Video List (==> renders Video List Entries <==)
//     Playlist Row
//       Video List Entry
//         Image
//         Title
//         Author/Creator
//         View Count
//          Buttons (Play, Like, Dislike)
//   Footer

// Video List Entry
//   Video Player
//     Image/Vid
//     Progress Bar w/ Time
//     Play/Pause/Full Screen Buttons
//     Video Details
//   Side Bar
//     Video Thumbnail
//   Comments Feed
//     Comment Component
//       User
//       Text Comment
//       Like/Comment/Share Buttons
