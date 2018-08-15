import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  return dispatch => ({
    videos: searchYouTube({ key: YOUTUBE_API_KEY, query: q }, videos => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    }),
    type: 'SEARCH_YOUTUBE'
  });
};

export default handleVideoSearch;
