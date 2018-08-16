import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    let newState = action.videos;
    return newState;
  } else {
    return state;
  }
};

export default videoListReducer;
