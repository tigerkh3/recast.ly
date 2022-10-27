import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => (

  // Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { q: query },
    dataType: 'json',
    success: callback,
    error: function(error) {
      console.error('Youtube API: Failed to fetch videos', error);
    }
  })
);


// var ssearchYouTube = (query, callback) => {

//   // Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
//   var test = $.ajax({
//     url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
//     type: 'GET',
//     data: { q: query },
//     // dataType: 'json',
//     success: callback,
//     error: function(error) {
//       console.error('Youtube API: Failed to fetch videos', error);
//     }
//   }).responseText;
//   console.log('???', test);
//   // return test.responseText;

// };
export default searchYouTube;
