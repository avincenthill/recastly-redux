import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({
  currentVideo: currentVideoReducer,
  videoList: videoListReducer
});

export default rootReducer;

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.
