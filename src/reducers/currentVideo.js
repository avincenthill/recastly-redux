import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    let newState = action.video || null; //TBD: action.video undefined here...?
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;
